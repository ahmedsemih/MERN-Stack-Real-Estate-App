import Location from "../models/Location";

export type CreateParams = {
  province: string;
  district: string;
  address: string;
};

export type UpdateParams = {
  _id: string;
  province?: string;
  district?: string;
  address?: string;
};

class LocationService {
  public static async getLocation(_id: string) {
    const location = await Location.findById(_id);
    return location;
  }

  public static async getLocations() {
    const locations = await Location.find({});
    return locations;
  }

  public static async createLocation(params: CreateParams) {
    const location = await Location.create(params);
    return location;
  }

  public static async updateLocation(params: UpdateParams) {
    const location = await Location.findByIdAndUpdate(params._id, params, {
      new: true,
    }).populate(['province', 'district']);
    return location;
  }
}

export default LocationService;
