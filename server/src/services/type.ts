import Type from "../models/Type";

export type CreateParams = {
  name: string;
};

export type UpdateParams = CreateParams & { _id: string };

class TypeService {
  public static async getType(_id: string) {
    const type = await Type.findById(_id);
    return type;
  }

  public static async getTypes() {
    const types = await Type.find({});
    return types;
  }

  public static async createType(params: CreateParams) {
    const type = await Type.create(params);
    return type;
  }

  public static async updateType(params: UpdateParams) {
    const type = await Type.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return type;
  }

  public static async deleteType(_id: string) {
    const type = await Type.findByIdAndDelete(_id);
    return type;
  }
}

export default TypeService;
