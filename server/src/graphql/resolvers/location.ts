import LocationService, {
  CreateParams,
  UpdateParams,
} from "../../services/location";

export default {
  Query: {
    async location(_: any, args: { _id: string }) {
      const location = await LocationService.getLocation(args._id);
      return location;
    },
    async locations() {
      const locations = await LocationService.getLocations();
      return locations;
    },
  },
  Mutation: {
    async createLocation(_: any, args: CreateParams) {
      const location = await LocationService.createLocation(args);
      return location;
    },
    async updateLocation(_: any, args: UpdateParams) {
      const location = await LocationService.updateLocation(args);
      return location;
    },
  },
};
