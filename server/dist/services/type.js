"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../models/Type"));
class TypeService {
    static async getType(_id) {
        const type = await Type_1.default.findById(_id);
        return type;
    }
    static async getTypes() {
        const types = await Type_1.default.find({});
        return types;
    }
    static async createType(params) {
        const type = await Type_1.default.create(params);
        return type;
    }
    static async updateType(params) {
        const type = await Type_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        });
        return type;
    }
    static async deleteType(_id) {
        const type = await Type_1.default.findByIdAndDelete(_id);
        return type;
    }
}
exports.default = TypeService;
//# sourceMappingURL=type.js.map