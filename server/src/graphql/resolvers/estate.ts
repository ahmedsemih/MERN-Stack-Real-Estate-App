import EstateService, {
  FilterParams,
  CreateParams,
  UpdateParams,
} from "../../services/estate";

export default {
  Query: {
    async estate(_: any, args: { _id: string }) {
      const estate = await EstateService.getEstate(args._id);
      return estate;
    },
    async estates(_: any, args: { limit?: number; offset?: number }) {
      const estates = await EstateService.getEstates(args.limit, args.offset);
      return estates;
    },
    async estatesBySeller(
      _: any,
      args: { sellerId: string; limit?: number; offset?: number }
    ) {
      const estates = await EstateService.getEstatesBySeller(
        args.sellerId,
        args.limit,
        args.offset
      );
      return estates;
    },
    async estatesByFilter(_: any, args: FilterParams) {
      const estates = await EstateService.getEstatesByFilter(args);
      return estates;
    },
    async estatesSortedByDate(
      _: any,
      args: { desc: boolean; limit?: number; offset?: number }
    ) {
      const estates = await EstateService.getEstatesSortedByDate(
        args.desc,
        args.limit,
        args.offset
      );
      return estates;
    },
    async estatesSortedByPrice(
      _: any,
      args: { desc: boolean; limit?: number; offset?: number }
    ) {
      const estates = await EstateService.getEstatesSortedByPrice(
        args.desc,
        args.limit,
        args.offset
      );
      return estates;
    },
    async estatesBySearch(
      _: any,
      args: {
        search: string;
        sortBy: string;
        order: string;
        limit?: number;
        offset?: number;
      }
    ) {
      const estates = await EstateService.getEstatesBySearch(
        args.search,
        args.sortBy,
        args.order,
        args.limit,
        args.offset
      );
      return estates;
    },
  },
  Mutation: {
    async createEstate(_: any, args: CreateParams) {
      const estate = await EstateService.createEstate(args);
      return estate;
    },
    async updateEstate(_: any, args: UpdateParams) {
      const estate = await EstateService.updateEstate(args);
      return estate;
    },
  },
};
