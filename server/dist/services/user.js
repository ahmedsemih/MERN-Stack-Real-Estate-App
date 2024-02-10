"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserService {
    static async getUserById(_id) {
        const user = await User_1.default.findById(_id).populate([
            {
                path: "favorites",
                populate: [
                    {
                        path: "location",
                        populate: [{ path: "province" }, { path: "district" }],
                    },
                    { path: "details" },
                    { path: "type" },
                    { path: "detailedType" },
                    { path: "seller" },
                ],
            },
        ]);
        return user;
    }
    static async getUserByEmail(email) {
        const user = await User_1.default.findOne({ email });
        return user;
    }
    static async getUsers(limit, offset) {
        const users = await User_1.default.find({})
            .populate("favorites")
            .limit(limit)
            .skip(offset);
        return users;
    }
    static async getUsersByFavorite(estateId) {
        const users = await User_1.default.find({ favorites: estateId });
        return users;
    }
    static async getFavorites(_id, limit, offset) {
        const user = await User_1.default.findById(_id)
            .select("favorites")
            .populate([
            {
                path: "favorites",
                populate: [
                    {
                        path: "location",
                        populate: [{ path: "province" }, { path: "district" }],
                    },
                    { path: "details" },
                    { path: "type" },
                    { path: "detailedType" },
                    { path: "seller" },
                ],
            },
        ])
            .limit(limit)
            .skip(offset);
        return user?.favorites ? user?.favorites : [];
    }
    static async updateUser(params) {
        const user = await User_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        });
        return user;
    }
    static async addFavorite(params) {
        const user = await User_1.default.findByIdAndUpdate(params._id, {
            $push: { favorites: params.estateId },
        }, { new: true }).populate("favorites");
        return user;
    }
    static async removeFavorite(params) {
        const user = await User_1.default.findByIdAndUpdate(params._id, {
            $pull: { favorites: params.estateId },
        }, { new: true }).populate("favorites");
        return user;
    }
    static async changeRole(params) {
        const user = await User_1.default.findByIdAndUpdate(params._id, { role: params.role }, { new: true });
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.js.map