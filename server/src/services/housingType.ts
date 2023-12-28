import HousingType from "../models/HousingType";

export type CreateParams = {
  name: string;
};

export type UpdateParams = CreateParams & { _id: string };

class HousingTypeServices {
  public static async getHousingType(_id: string) {
    const housingType = await HousingType.findById(_id);
    return housingType;
  }

  public static async getHousingTypes() {
    const housingTypes = await HousingType.find({});
    return housingTypes;
  }

  public static async createHousingType(params: CreateParams) {
    const housingType = await HousingType.create(params);
    return housingType;
  }

  public static async updateHousingType(params: UpdateParams) {
    const housingType = await HousingType.findByIdAndUpdate(
      params._id,
      params,
      { new: true }
    );
    return housingType;
  }

  public static async deleteHousingType(_id: string) {
    const housingType = await HousingType.findByIdAndDelete(_id);
    return housingType;
  }
}

export default HousingTypeServices;
