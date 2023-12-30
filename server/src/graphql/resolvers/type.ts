import TypeService, { UpdateParams, CreateParams } from "../../services/type";

export default {
  Query: {
    async type(_: any, args: { _id: string }) {
      const type = await TypeService.getType(args._id);
      return type;
    },
    async types() {
      const types = await TypeService.getTypes();
      return types;
    },
  },
  Mutation: {
    async createType(_: any, args: CreateParams) {
      const type = await TypeService.createType(args);
      return type;
    },
    async updateType(_: any, args: UpdateParams) {
      const type = await TypeService.updateType(args);
      return type;
    },
    async deleteType(_: any, args: { _id: string }) {
      const type = await TypeService.deleteType(args._id);
      return type;
    },
  },
};
