"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../../services/auth"));
const user_1 = __importDefault(require("../../services/user"));
exports.default = {
    Query: {
        async user(_, args) {
            const user = await user_1.default.getUserById(args._id);
            return user;
        },
        async users(_, args) {
            const users = await user_1.default.getUsers(args.limit, args.offset);
            return users;
        },
        async favorites(_, args) {
            const favorites = await user_1.default.getFavorites(args._id, args.limit, args.offset);
            return favorites;
        },
        async reauthenticate(_, args, { req, res }) {
            const oldRefreshToken = req.cookies["refresh-token"];
            const { refreshToken, accessToken, user } = await auth_1.default.reauthenticate(oldRefreshToken);
            if (refreshToken && accessToken && user) {
                res.cookie("access-token", accessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 1000 * 60 * 30,
                    sameSite: "None",
                });
                res.cookie("refresh-token", refreshToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    sameSite: "None",
                });
                res.cookie("user", JSON.stringify(user), {
                    httpOnly: false,
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 1000 * 60 * 30,
                    sameSite: "None",
                });
                await user_1.default.updateUser({
                    _id: user._id,
                    refreshToken,
                });
                return true;
            }
            return false;
        },
    },
    Mutation: {
        async register(_, args) {
            const user = await auth_1.default.register(args);
            return user;
        },
        async login(_, args, { res }) {
            const { accessToken, refreshToken } = await auth_1.default.login(args);
            res.cookie("access-token", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 30,
                sameSite: "None",
            });
            res.cookie("refresh-token", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "None",
            });
            return accessToken;
        },
        async logout(_, args, { res }) {
            await auth_1.default.logout(args._id);
            res.clearCookie("user");
            res.clearCookie("access-token");
            res.clearCookie("refresh-token");
            return true;
        },
        async updateUser(_, args) {
            const user = await user_1.default.updateUser(args);
            return user;
        },
        async addFavorite(_, args) {
            const user = await user_1.default.addFavorite(args);
            return user;
        },
        async removeFavorite(_, args) {
            const user = await user_1.default.removeFavorite(args);
            return user;
        },
        async changeRole(_, args) {
            const user = await user_1.default.changeRole(args);
            return user;
        },
    },
};
//# sourceMappingURL=user.js.map