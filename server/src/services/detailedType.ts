import DetailedType from "../models/DetailedType";

export type CreateParams = {
  name: string;
  parent: string;
};

export type UpdateParams = CreateParams & { _id: string };

class DetailedTypeServices {
  public static async getDetailedType(_id: string) {
    const detailedType = await DetailedType.findById(_id).populate("parent");
    return detailedType;
  }

  public static async getDetailedTypes() {
    const detailedTypes = await DetailedType.find({}).populate("parent");
    return detailedTypes;
  }

  public static async getDetailedTypesByParent(parentId: string) {
    const detailedTypes = await DetailedType.find({
      parent: parentId,
    });
    return detailedTypes;
  }

  public static async createDetailedType(params: CreateParams) {
    const detailedType = await DetailedType.create(params);
    return detailedType;
  }

  public static async updateDetailedType(params: UpdateParams) {
    const detailedType = await DetailedType.findByIdAndUpdate(
      params._id,
      params,
      { new: true }
    );
    return detailedType;
  }

  public static async deleteDetailedType(_id: string) {
    const detailedType = await DetailedType.findByIdAndDelete(_id);
    return detailedType;
  }
}

export default DetailedTypeServices;
