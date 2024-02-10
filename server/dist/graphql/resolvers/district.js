"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const district_1 = __importDefault(require("../../services/district"));
exports.default = {
    Query: {
        async district(_, args) {
            const district = await district_1.default.getDistrict(args._id);
            return district;
        },
        async districts() {
            const districts = await district_1.default.getDistricts();
            return districts;
        },
        async districtsByProvince(_, args) {
            const districts = await district_1.default.getDistrictsByProvince(args.provinceId);
            return districts;
        },
    },
    Mutation: {
        async createDistrict(_, args) {
            const district = await district_1.default.createDistrict(args);
            return district;
        },
        async updateDistrict(_, args) {
            const district = await district_1.default.updateDistrict(args);
            return district;
        },
        async deleteDistrict(_, args) {
            const district = await district_1.default.deleteDistrict(args._id);
            return district;
        },
    },
};
//# sourceMappingURL=district.js.map