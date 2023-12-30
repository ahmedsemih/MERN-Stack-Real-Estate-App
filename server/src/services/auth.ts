import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

class AuthService {
  public static async register(params: RegisterParams) {
    try {
      const { email, password } = params;

      const hashedPassword = await bcrypt.hash(password, 10);
      const isExist = await UserService.getUserByEmail(email);

      if (isExist) throw new Error("This email is already in use.");

      const user = await User.create({ ...params, password: hashedPassword });
      return user;
    } catch (error) {
      return error;
    }
  }

  public static async login(params: LoginParams) {
    try {
      const { email, password } = params;

      const user = await UserService.getUserByEmail(email);
      if (!user) throw new Error("Wrong email or password.");

      if (user.role === "banned")
        throw new Error("Your account has been banned.");

      const isSame = await bcrypt.compare(password, user.password);

      if (!isSame) throw new Error("Wrong email or password.");

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
    } catch (error) {
      return error;
    }
  }

  public static async logout(_id: string) {
    await UserService.updateUser({ _id, refreshToken: "" });
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
