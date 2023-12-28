import User from "../models/User";

export type UpdateParams = {
  _id: string;
  phone?: string;
  email?: string;
  verified?: boolean;
  role?: "user" | "admin" | "banned";
};

export type SetFavoriteParams = {
  userId: string;
  estateId: string;
};

class UserService {
  public static async getUserById(_id: string) {
    const user = await User.findById(_id).populate("favorites");
    return user;
  }

  public static async getUserByEmail(email: string) {
    const user = await User.findOne({ email }).populate("favorites");
    return user;
  }

  public static async getUsers() {
    const users = await User.find({}).populate("favorites");
    return users;
  }

  public static async getFavorites(_id: string) {
    const favorites = await User.findById(_id)
      .select("favorites")
      .populate("favorites");
    return favorites;
  }

  public static async updateUser(params: UpdateParams) {
    const user = await User.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return user;
  }

  public static async addFavorite(params: SetFavoriteParams) {
    const user = await User.findByIdAndUpdate(
      params.userId,
      {
        $push: { favorites: params.estateId },
      },
      { new: true }
    );
    return user;
  }

  public static async removeFavorite(params: SetFavoriteParams) {
    const user = await User.findByIdAndUpdate(
      params.userId,
      {
        $pull: { favorites: params.estateId },
      },
      { new: true }
    );
    return user;
  }
}

export default UserService;
