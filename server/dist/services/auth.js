"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const graphql_1 = require("../../node_modules/graphql");
const user_1 = __importDefault(require("./user"));
const User_1 = __importDefault(require("../models/User"));
class AuthService {
    static async register(params) {
        const { email, password } = params;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const isExist = await user_1.default.getUserByEmail(email);
        if (isExist)
            throw new graphql_1.GraphQLError("This email is already in use.");
        const user = await User_1.default.create({ ...params, password: hashedPassword });
        return user;
    }
    static async login(params) {
        const { email, password } = params;
        const user = await user_1.default.getUserByEmail(email);
        if (!user)
            throw new graphql_1.GraphQLError("Wrong email or password.");
        if (user.role === "banned")
            throw new graphql_1.GraphQLError("Your account has been banned.");
        const isSame = await bcrypt_1.default.compare(password, user.password);
        if (!isSame)
            throw new graphql_1.GraphQLError("Wrong email or password.");
        const accessToken = await AuthService.generateAccessToken({
            _id: user._id,
            role: user.role,
        });
        const refreshToken = await AuthService.generateRefreshToken({
            _id: user._id,
            role: user.role,
        });
        await user_1.default.updateUser({ _id: user._id, refreshToken });
        return { accessToken, refreshToken };
    }
    static async logout(_id) {
        await user_1.default.updateUser({ _id, refreshToken: "" });
    }
    static async reauthenticate(refreshToken) {
        try {
            let user, newRefreshToken, newAccessToken;
            const decoded = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
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
        }
        catch {
            return {
                user: null,
                refreshToken: null,
                accessToken: null,
            };
        }
    }
    static async checkRefreshToken(_id, refreshToken) {
        const user = await user_1.default.getUserById(_id);
        return user.refreshToken === refreshToken;
    }
    static async generateAccessToken(params) {
        const token = jsonwebtoken_1.default.sign(params, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "30m",
        });
        return token;
    }
    static async generateRefreshToken(params) {
        const token = jsonwebtoken_1.default.sign(params, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "30 days",
        });
        return token;
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.js.map