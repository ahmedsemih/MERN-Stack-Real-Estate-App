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
    async estates() {
      const estates = await EstateService.getEstates();
      return estates;
    },
    async estatesBySeller(_: any, args: { sellerId: string }) {
      const estates = await EstateService.getEstatesBySeller(args.sellerId);
      return estates;
    },
    async estatesByFilter(_: any, args: FilterParams) {
      const estates = await EstateService.getEstatesByFilter(args);
      return estates;
    },
    async estatesSortedByDate(_: any, args: { desc: boolean }) {
      const estates = await EstateService.getEstatesSortedByDate(args.desc);
      return estates;
    },
    async estatesSortedByPrice(_: any, args: { desc: boolean }) {
      const estates = await EstateService.getEstatesSortedByPrice(args.desc);
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
