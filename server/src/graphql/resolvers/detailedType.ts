import DetailedTypeServices, {
  CreateParams,
  UpdateParams,
} from "../../services/detailedType";

export default {
  Query: {
    async detailedType(_: any, args: { _id: string }) {
      const detailedType = await DetailedTypeServices.getDetailedType(args._id);
      return detailedType;
    },
    async detailedTypes() {
      const detailedTypes = await DetailedTypeServices.getDetailedTypes();
      return detailedTypes;
    },
    async detailedTypesByParent(_: any, args: { parentId: string }) {
      const detailedTypes = await DetailedTypeServices.getDetailedTypesByParent(args.parentId);
      return detailedTypes;
    }
  },
  Mutation: {
    async createDetailedType(_: any, args: CreateParams) {
      const detailedType = await DetailedTypeServices.createDetailedType(args);
      return detailedType;
    },
    async updateDetailedType(_: any, args: UpdateParams) {
      const detailedType = await DetailedTypeServices.updateDetailedType(args);
      return detailedType;
    },
    async deleteDetailedType(_: any, args: { _id: string }) {
      const detailedType = await DetailedTypeServices.deleteDetailedType(args._id);
      return detailedType;
    },
  },
};
