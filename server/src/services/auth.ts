import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GraphQLError } from "../../node_modules/graphql";

import UserService from "./user";
import User from "../models/User";

export type RegisterParams = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

type GenerateParams = {
  _id: string;
  role: string;
};

type Token = {
  _id: string;
  role: string;
  iat: number;
  exp: number;
};

type Reauthenticate = {
  user: {
    _id: string;
    role: string;
  };
  refreshToken: string;
  accessToken: string;
};

class AuthService {
  public static async register(params: RegisterParams) {
    const { email, password } = params;

    const hashedPassword = await bcrypt.hash(password, 10);
    const isExist = await UserService.getUserByEmail(email);

    if (isExist) throw new GraphQLError("This email is already in use.");

    const user = await User.create({ ...params, password: hashedPassword });
    return user;
  }

  public static async login(params: LoginParams) {
    const { email, password } = params;

    const user = await UserService.getUserByEmail(email);
    if (!user) throw new GraphQLError("Wrong email or password.");

    if (user.role === "banned")
      throw new GraphQLError("Your account has been banned.");

    const isSame = await bcrypt.compare(password, user.password);

    if (!isSame) throw new GraphQLError("Wrong email or password.");

    const accessToken = await AuthService.generateAccessToken({
      _id: user._id,
      role: user.role,
    });
    const refreshToken = await AuthService.generateRefreshToken({
      _id: user._id,
      role: user.role,
    });

    await UserService.updateUser({ _id: user._id, refreshToken });

    return { accessToken, refreshToken };
  }

  public static async logout(_id: string) {
    await UserService.updateUser({ _id, refreshToken: "" });
  }

  public static async reauthenticate(
    refreshToken: string
  ): Promise<null | Reauthenticate> {
    try {
      let user, newRefreshToken, newAccessToken;

      const decoded: Token | any = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
      );
      const { _id, role } = decoded;
      const isSame = await AuthService.checkRefreshToken(_id, refreshToken);

      if (isSame) {
        user = { _id, role };

        newAccessToken = await AuthService.generateAccessToken({
          _id,
          role,
        });
        newRefreshToken = await AuthService.generateRefreshToken({
          _id,
          role,
        });
      }

      return {
        user,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch {
      return {
        user: null,
        refreshToken: null,
        accessToken: null,
      };
    }
  }

  public static async checkRefreshToken(_id: string, refreshToken: string) {
    const user = await UserService.getUserById(_id);
    return user.refreshToken === refreshToken;
  }

  public static async generateAccessToken(params: GenerateParams) {
    const token = jwt.sign(params, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    return token;
  }

  public static async generateRefreshToken(params: GenerateParams) {
    const token = jwt.sign(params, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30 days",
    });
    return token;
  }
}

export default AuthService;
