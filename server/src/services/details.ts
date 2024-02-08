import Details from "../models/Details";

export type CreateParams = {
    buildingYear: number;
    roomAndSaloon: string;
    floor: number;
    locatedFloor: number;
    bathroom: number;
    internet: boolean;
    furnished: boolean;
    balcony: boolean;
    elevator: boolean;
    thermalInsulation: boolean;
    garage: boolean;
    fittedKitchen: boolean;
    fittedBathroom: boolean;
    parquet: boolean;
    heatingType: string;
};

export type UpdateParams = CreateParams & { _id: string };

class DetailsService {
  public static async getDetails(_id: string) {
    const details = await Details.findById(_id);
    return details;
  }

  public static async createDetails(params: CreateParams) {
    const details = await Details.create(params);
    return details;
  }

  public static async updateDetails(params: UpdateParams) {
    const details = await Details.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return details;
  }
}

export default DetailsService;
