"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const Estate_1 = __importDefault(require("../models/Estate"));
const notification_1 = __importDefault(require("./notification"));
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
    static async getEstate(_id) {
        const estate = await Estate_1.default.findById(_id).populate(populateOptions);
        return estate;
    }
    static async getEstates(limit, offset) {
        const estates = await Estate_1.default.find({ status: true })
            .populate(populateOptions)
            .sort({ updatedAt: "desc" })
            .limit(limit)
            .skip(offset);
        return estates;
    }
    static async getEstatesBySeller(sellerId, limit, offset) {
        const estates = await Estate_1.default.find({ seller: sellerId, status: true })
            .populate(populateOptions)
            .sort({ updatedAt: "desc" })
            .limit(limit)
            .skip(offset);
        return estates;
    }
    static async getEstatesByFilter(params) {
        const { minPrice, maxPrice, minSize, maxSize, offset, order, sortBy, limit, province, district, ...queryParams } = params;
        const query = {
            status: true,
            price: { $gte: minPrice || 0, $lte: maxPrice || 1000000000 },
            size: { $gte: minSize || 0, $lte: maxSize || 1000000000 },
        };
        Object.keys(queryParams).forEach((key) => {
            // @ts-expect-error type diff
            query[key] = queryParams[key];
        });
        const estates = await Estate_1.default.find(query)
            .populate(populateOptions)
            .sort(sortBy === "price"
            ? { price: order === "asc" ? "asc" : "desc" }
            : { updatedAt: order === "asc" ? "asc" : "desc" })
            .limit(limit)
            .skip(offset);
        let filteredEstates = estates;
        if (district || province) {
            filteredEstates = estates.filter((estate) => {
                if (district)
                    return (estate.location.district._id == district &&
                        estate.location.province._id == province);
                return estate.location.province._id == province;
            });
        }
        return filteredEstates;
    }
    static async getEstatesSortedByDate(desc, limit, offset) {
        const estates = await Estate_1.default.find({ status: true })
            .populate(populateOptions)
            .sort({ updatedAt: desc ? "desc" : "asc" })
            .limit(limit)
            .skip(offset);
        return estates;
    }
    static async getEstatesSortedByPrice(desc, limit, offset) {
        const estates = await Estate_1.default.find({ status: true })
            .populate(populateOptions)
            .sort({ price: desc ? "desc" : "asc" })
            .limit(limit)
            .skip(offset);
        return estates;
    }
    static async getEstatesBySearch(search, sortBy, order, limit, offset) {
        const lowerCasedSearch = search.toLowerCase();
        const estates = await Estate_1.default.find({ status: true })
            .populate(populateOptions)
            .sort(sortBy === "price"
            ? { price: order === "asc" ? "asc" : "desc" }
            : { updatedAt: order === "asc" ? "asc" : "desc" })
            .limit(limit)
            .skip(offset);
        const filteredEstates = estates.filter((estate) => estate.location.province.name
            .toLowerCase()
            .includes(lowerCasedSearch) ||
            estate.location.district.name
                .toLowerCase()
                .includes(lowerCasedSearch) ||
            estate.location.address.toLowerCase().includes(lowerCasedSearch) ||
            estate.title.toLowerCase().includes(lowerCasedSearch));
        return filteredEstates;
    }
    static async createEstate(params) {
        const estate = await Estate_1.default.create(params);
        return estate;
    }
    static async updateEstate(params) {
        const estate = await Estate_1.default.findByIdAndUpdate(params._id, params);
        const users = await user_1.default.getUsersByFavorite(params._id);
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
            await notification_1.default.createNotification(notificationBody);
        });
        return estate;
    }
}
exports.default = EstateService;
//# sourceMappingURL=estate.js.map