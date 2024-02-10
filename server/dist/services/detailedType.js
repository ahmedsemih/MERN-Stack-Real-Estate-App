"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetailedType_1 = __importDefault(require("../models/DetailedType"));
class DetailedTypeServices {
    static async getDetailedType(_id) {
        const detailedType = await DetailedType_1.default.findById(_id).populate("parent");
        return detailedType;
    }
    static async getDetailedTypes() {
        const detailedTypes = await DetailedType_1.default.find({}).populate("parent");
        return detailedTypes;
    }
    static async getDetailedTypesByParent(parentId) {
        const detailedTypes = await DetailedType_1.default.find({
            parent: parentId,
        });
        return detailedTypes;
    }
    static async createDetailedType(params) {
        const detailedType = await DetailedType_1.default.create(params);
        return detailedType;
    }
    static async updateDetailedType(params) {
        const detailedType = await DetailedType_1.default.findByIdAndUpdate(params._id, params, { new: true });
        return detailedType;
    }
    static async deleteDetailedType(_id) {
        const detailedType = await DetailedType_1.default.findByIdAndDelete(_id);
        return detailedType;
    }
}
exports.default = DetailedTypeServices;
//# sourceMappingURL=detailedType.js.map