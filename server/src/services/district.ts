import District from "../models/District";

export type CreateParams = {
  name: string;
  province: string;
};

export type UpdateParams = {
  _id: string;
  name?: string;
  province?: string;
};

class DistrictService {
  public static async getDistrict(_id: string) {
    const district = await District.findById(_id).populate("province");
    return district;
  }

  public static async getDistricts() {
    const districts = await District.find({}).populate("province");
    return districts;
  }

  public static async getDistrictsByProvince(provinceId: string) {
    const districts = await District.find({
      province: provinceId,
    }).populate("province");

    return districts;
  }

  public static async createDistrict(params: CreateParams) {
    const district = await District.create(params);
    return district;
  }

  public static async updateDistrict(params: UpdateParams) {
    const district = await District.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return district;
  }

  public static async deleteDistrict(_id: string) {
    const district = await District.findByIdAndDelete(_id);
    return district;
  }
}

export default DistrictService;
