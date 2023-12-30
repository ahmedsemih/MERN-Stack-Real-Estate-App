import HousingTypeServices, {
  CreateParams,
  UpdateParams,
} from "../../services/housingType";

export default {
  Query: {
    async housingType(_: any, args: { _id: string }) {
      const housingType = await HousingTypeServices.getHousingType(args._id);
      return housingType;
    },
    async housingTypes() {
      const housingTypes = await HousingTypeServices.getHousingTypes();
      return housingTypes;
    },
  },
  Mutation: {
    async createHousingType(_: any, args: CreateParams) {
      const housingType = await HousingTypeServices.createHousingType(args);
      return housingType;
    },
    async updateHousingType(_: any, args: UpdateParams) {
      const housingType = await HousingTypeServices.updateHousingType(args);
      return housingType;
    },
    async deleteHousingType(_: any, args: { _id: string }) {
      const housingType = await HousingTypeServices.deleteHousingType(args._id);
      return housingType;
    },
  },
};
