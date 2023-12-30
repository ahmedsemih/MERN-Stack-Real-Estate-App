import ProvinceService, {
  CreateParams,
  UpdateParams,
} from "../../services/province";

export default {
  Query: {
    async province(_: any, args: { _id: string }) {
      const province = await ProvinceService.getProvince(args._id);
      return province;
    },
    async provinceByCode(_: any, args: { code: number }) {
      const province = await ProvinceService.getProvinceByCode(args.code);
      return province;
    },
    async provinces() {
      const provinces = await ProvinceService.getProvinces();
      return provinces;
    },
  },
  Mutation: {
    async createProvince(_: any, args: CreateParams) {
      const province = await ProvinceService.createProvince(args);
      return province;
    },
    async updateProvince(_: any, args: UpdateParams) {
      const province = await ProvinceService.updateProvince(args);
      return province;
    },
    async deleteProvince(_: any, args: { _id: string }) {
      const province = await ProvinceService.deleteProvince(args._id);
      return province;
    },
  },
};
