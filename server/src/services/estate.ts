import UserService from "./user";
import Estate from "../models/Estate";
import NotificationService from "./notification";

export type FilterParams = {
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
  maxSize?: number;
  category?: string;
  type?: string;
  detailedType?: string;
  province?: string;
  district?: string;
  sortBy: string;
  order: string;
  limit?: number;
  offset: number;
};

export type CreateParams = {
  images: string[];
  title: string;
  description: string;
  price: number;
  seller: string;
  size: number;
  category: string;
  location: string;
  type: string;
  detailedType?: string;
  details?: string;
};

export type UpdateParams = {
  _id: string;
  images?: string[];
  title?: string;
  description?: string;
  price?: number;
  size?: number;
  category?: string;
  status?: boolean;
  type?: string;
  detailedType?: string;
};

const populateOptions = [
  { path: "seller" },
  { path: "type" },
  { path: "detailedType" },
  { path: "details" },
  {
    path: "location",
    populate: [{ path: "province" }, { path: "district" }],
  },
];

class EstateService {
  public static async getEstate(_id: string) {
    const estate = await Estate.findById(_id).populate(populateOptions);
    return estate;
  }

  public static async getEstates(limit?: number, offset?: number) {
    const estates = await Estate.find({ status: true })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" })
      .limit(limit)
      .skip(offset);
    return estates;
  }

  public static async getEstatesBySeller(
    sellerId: string,
    limit?: number,
    offset?: number
  ) {
    const estates = await Estate.find({ seller: sellerId, status: true })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" })
      .limit(limit)
      .skip(offset);
    return estates;
  }

  public static async getEstatesByFilter(params: FilterParams) {
    const {
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      offset,
      order,
      sortBy,
      limit,
      province,
      district,
      ...queryParams
    } = params;

    const query = {
      status: true,
      price: { $gte: minPrice || 0, $lte: maxPrice || 1000000000 },
      size: { $gte: minSize || 0, $lte: maxSize || 1000000000 },
    };

    Object.keys(queryParams).forEach((key) => {
      // @ts-expect-error type diff
      query[key] = queryParams[key];
    });

    const estates = await Estate.find(query)
      .populate(populateOptions)
      .sort(
        sortBy === "price"
          ? { price: order === "asc" ? "asc" : "desc" }
          : { updatedAt: order === "asc" ? "asc" : "desc" }
      )
      .limit(limit)
      .skip(offset);

    let filteredEstates = estates;

    if (district || province) {
      filteredEstates = estates.filter((estate) => {
        if (district)
          return (
            estate.location.district._id == district &&
            estate.location.province._id == province
          );
        
        return estate.location.province._id == province;
      });
    }

    return filteredEstates;
  }

  public static async getEstatesSortedByDate(
    desc: boolean,
    limit?: number,
    offset?: number
  ) {
    const estates = await Estate.find({ status: true })
      .populate(populateOptions)
      .sort({ updatedAt: desc ? "desc" : "asc" })
      .limit(limit)
      .skip(offset);
    return estates;
  }

  public static async getEstatesSortedByPrice(
    desc: boolean,
    limit?: number,
    offset?: number
  ) {
    const estates = await Estate.find({ status: true })
      .populate(populateOptions)
      .sort({ price: desc ? "desc" : "asc" })
      .limit(limit)
      .skip(offset);

    return estates;
  }

  public static async getEstatesBySearch(
    search: string,
    sortBy: string,
    order: string,
    limit?: number,
    offset?: number
  ) {
    const lowerCasedSearch = search.toLowerCase();

    const estates = await Estate.find({ status: true })
      .populate(populateOptions)
      .sort(
        sortBy === "price"
          ? { price: order === "asc" ? "asc" : "desc" }
          : { updatedAt: order === "asc" ? "asc" : "desc" }
      )
      .limit(limit)
      .skip(offset);

    const filteredEstates = estates.filter(
      (estate) =>
        estate.location.province.name
          .toLowerCase()
          .includes(lowerCasedSearch) ||
        estate.location.district.name
          .toLowerCase()
          .includes(lowerCasedSearch) ||
        estate.location.address.toLowerCase().includes(lowerCasedSearch) ||
        estate.title.toLowerCase().includes(lowerCasedSearch)
    );

    return filteredEstates;
  }

  public static async createEstate(params: CreateParams) {
    const estate = await Estate.create(params);
    return estate;
  }

  public static async updateEstate(params: UpdateParams) {
    const estate = await Estate.findByIdAndUpdate(params._id, params);
    const users = await UserService.getUsersByFavorite(params._id);

    let notificationBody = { user: "", estate: params._id, message: "" };

    if (estate.price > params.price)
      notificationBody.message =
        "One of your favorite listings has decreased in price.";
    else if (estate.price < params.price)
      notificationBody.message =
        "One of your favorite listings has increased in price.";
    else
      notificationBody.message =
        "One of your favorite listings has been updated.";

    users.forEach(async (user) => {
      notificationBody.user = user._id;
      await NotificationService.createNotification(notificationBody);
    });

    return estate;
  }
}

export default EstateService;
