import User from "../models/User";

export type UpdateParams = {
  _id: string;
  phone?: string;
  email?: string;
  verified?: boolean;
  image?: string;
  refreshToken?: string;
};

export type SetFavoriteParams = {
  _id: string;
  estateId: string;
};

class UserService {
  public static async getUserById(_id: string) {
    const user = await User.findById(_id).populate([
      {
        path: "favorites",
        populate: [
          {
            path: "location",
            populate: [{ path: "province" }, { path: "district" }],
          },
          { path: "details" },
          { path: "type" },
          { path: "detailedType" },
          { path: "seller" },
        ],
      },
    ]);
    return user;
  }

  public static async getUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }

  public static async getUsers(limit?: number, offset?: number) {
    const users = await User.find({})
      .populate("favorites")
      .limit(limit)
      .skip(offset);
    return users;
  }

  public static async getUsersByFavorite(estateId: string) {
    const users = await User.find({ favorites: estateId });
    return users;
  }

  public static async getFavorites(
    _id: string,
    limit?: number,
    offset?: number
  ) {
    const user = await User.findById(_id)
      .select("favorites")
      .populate([
        {
          path: "favorites",
          populate: [
            {
              path: "location",
              populate: [{ path: "province" }, { path: "district" }],
            },
            { path: "details" },
            { path: "type" },
            { path: "detailedType" },
            { path: "seller" },
          ],
        },
      ])
      .limit(limit)
      .skip(offset);
    return user?.favorites ? user?.favorites : [];
  }

  public static async updateUser(params: UpdateParams) {
    const user = await User.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return user;
  }

  public static async addFavorite(params: SetFavoriteParams) {
    const user = await User.findByIdAndUpdate(
      params._id,
      {
        $push: { favorites: params.estateId },
      },
      { new: true }
    ).populate("favorites");
    return user;
  }

  public static async removeFavorite(params: SetFavoriteParams) {
    const user = await User.findByIdAndUpdate(
      params._id,
      {
        $pull: { favorites: params.estateId },
      },
      { new: true }
    ).populate("favorites");
    return user;
  }

  public static async changeRole(params: { _id: string; role: string }) {
    const user = await User.findByIdAndUpdate(
      params._id,
      { role: params.role },
      { new: true }
    );
    return user;
  }
}

export default UserService;
