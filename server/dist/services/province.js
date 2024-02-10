"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Province_1 = __importDefault(require("../models/Province"));
class ProvinceService {
    static async getProvince(_id) {
        const province = await Province_1.default.findById(_id);
        return province;
    }
    static async getProvinceByCode(code) {
        const province = await Province_1.default.findOne({ code });
        return province;
    }
    static async getProvinces() {
        const provinces = await Province_1.default.find({});
        return provinces;
    }
    static async createProvince(params) {
        const province = await Province_1.default.create(params);
        return province;
    }
    static async updateProvince(params) {
        const province = await Province_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        });
        return province;
    }
    static async deleteProvince(_id) {
        const province = await Province_1.default.findByIdAndDelete(_id);
        return province;
    }
}
exports.default = ProvinceService;
//# sourceMappingURL=province.js.map