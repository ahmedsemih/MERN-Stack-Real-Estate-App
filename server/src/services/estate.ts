import Estate from "../models/Estate";

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
};

export type CreateParams = {
  body: {
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
};

export type UpdateParams = {
  _id: string;
  body: {
    images?: string[];
    title?: string;
    description?: string;
    price?: number;
    size?: number;
    category?: string;
    type?: string;
    detailedType?: string;
  };
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
    const estates = await Estate.find({})
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
    const estates = await Estate.find({ seller: sellerId })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" })
      .limit(limit)
      .skip(offset);
    return estates;
  }

  public static async getEstatesByFilter(
    params: FilterParams,
    limit?: number,
    offset?: number
  ) {
    const estates = await Estate.find({
      price: { $lte: params.minPrice, $gte: params.maxPrice },
      size: { $lte: params.minSize, $gte: params.maxSize },
      category: params.category,
      type: params.type,
      detailedType: params.detailedType,
      location: {
        province: params.province,
        district: params.district,
      },
    })
      .populate(populateOptions)
      .sort({ updatedAt: "desc" })
      .limit(limit)
      .skip(offset);
    return estates;
  }

  public static async getEstatesSortedByDate(
    desc: boolean,
    limit?: number,
    offset?: number
  ) {
    const estates = await Estate.find({})
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
    const estates = await Estate.find({})
      .populate(populateOptions)
      .sort({ price: desc ? "desc" : "asc" })
      .limit(limit)
      .skip(offset);

    return estates;
  }

  public static async createEstate(params: CreateParams) {
    const estate = await Estate.create(params.body);
    return estate;
  }

  public static async updateEstate(params: UpdateParams) {
    const estate = await Estate.findByIdAndUpdate(params._id, params.body, {
      new: true,
    });
    return estate;
  }
}

export default EstateService;
