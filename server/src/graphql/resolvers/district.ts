import DistrictService, {
  CreateParams,
  UpdateParams,
} from "../../services/district";

export default {
  Query: {
    async district(_: any, args: { _id: string }) {
      const district = await DistrictService.getDistrict(args._id);
      return district;
    },
    async districts() {
      const districts = await DistrictService.getDistricts();
      return districts;
    },
    async districtsByProvince(_: any, args: { provinceId: string }) {
      const districts = await DistrictService.getDistrictsByProvince(
        args.provinceId
      );
      return districts;
    },
  },
  Mutation: {
    async createDistrict(_: any, args: CreateParams) {
      const district = await DistrictService.createDistrict(args);
      return district;
    },
    async updateDistrict(_: any, args: UpdateParams) {
      const district = await DistrictService.updateDistrict(args);
      return district;
    },
    async deleteDistrict(_: any, args: { _id: string }) {
      const district = await DistrictService.deleteDistrict(args._id);
      return district;
    },
  },
};
