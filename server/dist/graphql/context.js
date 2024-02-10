"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = async ({ req, res }) => {
    let user = null;
    const accessToken = req.headers.authorization || req.cookies["access-token"];
    if (accessToken && accessToken !== undefined) {
        jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET, (error, decoded) => {
            if (decoded) {
                const { _id, role } = decoded;
                user = { _id, role };
                return {
                    user,
                    req,
                    res,
                };
            }
        });
    }
    if (!accessToken)
        res.clearCookie("user");
    return {
        user,
        req,
        res,
    };
};
//# sourceMappingURL=context.js.map