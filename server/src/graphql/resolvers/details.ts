import DetailsService, {
  CreateParams,
  UpdateParams,
} from "../../services/details";

export default {
  Query: {
    async details(_: any, args: { _id: string }) {
      const details = await DetailsService.getDetails(args._id);
      return details;
    },
  },
  Mutation: {
    async createDetails(_: any, args: CreateParams) {
      const details = await DetailsService.createDetails(args);
      return details;
    },
    async updateDetails(_: any, args: UpdateParams) {
      const details = await DetailsService.updateDetails(args);
      return details;
    },
  },
};
