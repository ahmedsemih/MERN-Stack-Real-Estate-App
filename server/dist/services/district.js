"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const District_1 = __importDefault(require("../models/District"));
class DistrictService {
    static async getDistrict(_id) {
        const district = await District_1.default.findById(_id).populate("province");
        return district;
    }
    static async getDistricts() {
        const districts = await District_1.default.find({}).populate("province");
        return districts;
    }
    static async getDistrictsByProvince(provinceId) {
        const districts = await District_1.default.find({
            province: provinceId,
        }).populate("province");
        return districts;
    }
    static async createDistrict(params) {
        const district = await District_1.default.create(params);
        return district;
    }
    static async updateDistrict(params) {
        const district = await District_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        });
        return district;
    }
    static async deleteDistrict(_id) {
        const district = await District_1.default.findByIdAndDelete(_id);
        return district;
    }
}
exports.default = DistrictService;
//# sourceMappingURL=district.js.map