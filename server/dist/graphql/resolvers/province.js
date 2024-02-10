"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const province_1 = __importDefault(require("../../services/province"));
exports.default = {
    Query: {
        async province(_, args) {
            const province = await province_1.default.getProvince(args._id);
            return province;
        },
        async provinceByCode(_, args) {
            const province = await province_1.default.getProvinceByCode(args.code);
            return province;
        },
        async provinces() {
            const provinces = await province_1.default.getProvinces();
            return provinces;
        },
    },
    Mutation: {
        async createProvince(_, args) {
            const province = await province_1.default.createProvince(args);
            return province;
        },
        async updateProvince(_, args) {
            const province = await province_1.default.updateProvince(args);
            return province;
        },
        async deleteProvince(_, args) {
            const province = await province_1.default.deleteProvince(args._id);
            return province;
        },
    },
};
//# sourceMappingURL=province.js.map