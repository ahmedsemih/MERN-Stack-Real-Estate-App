"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Details_1 = __importDefault(require("../models/Details"));
class DetailsService {
    static async getDetails(_id) {
        const details = await Details_1.default.findById(_id);
        return details;
    }
    static async createDetails(params) {
        const details = await Details_1.default.create(params);
        return details;
    }
    static async updateDetails(params) {
        const details = await Details_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        });
        return details;
    }
}
exports.default = DetailsService;
//# sourceMappingURL=details.js.map