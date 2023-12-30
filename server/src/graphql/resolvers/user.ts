import AuthService, { RegisterParams, LoginParams } from "../../services/auth";
import UserService, {
  UpdateParams,
  SetFavoriteParams,
} from "../../services/user";

export default {
  Query: {
    async user(_: any, args: { _id: string }) {
      const user = await UserService.getUserById(args._id);
      return user;
    },
    async users() {
      const users = await UserService.getUsers();
      return users;
    },
    async favorites(_: any, args: { _id: string }) {
      const favorites = await UserService.getFavorites(args._id);
      return favorites;
    },
  },
  Mutation: {
    async register(_: any, args: RegisterParams) {
      const user = await AuthService.register(args);
      return user;
    },
    async login(_: any, args: LoginParams, { res }: any) {
      const { accessToken, refreshToken } = await AuthService.login(args);

      res.cookie("access-token", accessToken, {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 30,
        sameSite: "none",
      });
      res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "none",
      });

      return accessToken;
    },
    async logout(_: any, args: { _id: string }, { res }: any) {
      await AuthService.logout(args._id);
      res.clearCookie("access-token");
      res.clearCookie("refresh-token");

      return true;
    },
    async updateUser(_: any, args: UpdateParams) {
      const user = await UserService.updateUser(args);
      return user;
    },
    async addFavorite(_: any, args: SetFavoriteParams) {
      const user = await UserService.addFavorite(args);
      return user;
    },
    async removeFavorite(_: any, args: SetFavoriteParams) {
      const user = await UserService.removeFavorite(args);
      return user;
    },
  },
};
