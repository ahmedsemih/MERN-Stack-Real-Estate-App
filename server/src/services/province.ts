import Province from "../models/Province";

export type CreateParams = {
  code: number;
  name: string;
};

export type UpdateParams = {
  _id: string;
  code?: number;
  name?: string;
};

class ProvinceService {
  public static async getProvince(_id: string) {
    const province = await Province.findById(_id);
    return province;
  }

  public static async getProvinceByCode(code: number) {
    const province = await Province.findOne({ code });
    return province;
  }

  public static async getProvinces() {
    const provinces = await Province.find({});
    return provinces;
  }

  public static async createProvince(params: CreateParams) {
    const province = await Province.create(params);
    return province;
  }

  public static async updateProvince(params: UpdateParams) {
    const province = await Province.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return province;
  }

  public static async deleteProvince(_id: string) {
    const province = await Province.findByIdAndDelete(_id);
    return province;
  }
}

export default ProvinceService;
