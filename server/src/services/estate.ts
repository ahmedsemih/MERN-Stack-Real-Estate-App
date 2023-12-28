import Estate from "../models/Estate";

export type FilterParams = {
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
  maxSize?: number;
  category?: string;
  type?: string;
  housingType?: string;
  province?: string;
  district?: string;
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
  housingType?: string;
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
  type?: string;
  housingType?: string;
};

const populateOptions = [
  { path: "seller" },
  { path: "type" },
  { path: "housingType" },
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

  public static async getEstates() {
    const estates = await Estate.find({})
      .populate(populateOptions)
      .sort({ updatedAt: "desc" });
    return estates;
  }

  public static async getEstatesBySeller(sellerId: string) {
    const estates = await Estate.find({ seller: sellerId })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" });
    return estates;
  }

  public static async getEstatesByFilter(params: FilterParams) {
    const estates = await Estate.find({
      price: { $lte: params.minPrice, $gte: params.maxPrice },
      size: { $lte: params.minSize, $gte: params.maxSize },
      category: params.category,
      type: params.type,
      housingType: params.housingType,
      location: {
        province: params.province,
        district: params.district,
      },
    })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" });
    return estates;
  }

  public static async getEstatesSortedByDate(desc: boolean) {
    const estates = await Estate.find({})
      .populate(populateOptions)
      .sort({ updatedAt: desc ? "desc" : "asc" });
    return estates;
  }

  public static async getEstatesSortedByPrice(desc: boolean) {
    const estates = await Estate.find({})
      .populate(populateOptions)
      .sort({ price: desc ? "desc" : "asc" });
    return estates;
  }

  public static async createEstate(params: CreateParams) {
    const estate = await Estate.create(params);
    return estate;
  }

  public static async updateEstate(params: UpdateParams) {
    const estate = await Estate.findByIdAndUpdate(params._id, params, {
      new: true,
    });
    return estate;
  }
}

export default EstateService;
