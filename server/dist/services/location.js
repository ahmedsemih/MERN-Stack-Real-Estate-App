"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Location_1 = __importDefault(require("../models/Location"));
class LocationService {
    static async getLocation(_id) {
        const location = await Location_1.default.findById(_id);
        return location;
    }
    static async getLocations() {
        const locations = await Location_1.default.find({});
        return locations;
    }
    static async createLocation(params) {
        const location = await Location_1.default.create(params);
        return location;
    }
    static async updateLocation(params) {
        const location = await Location_1.default.findByIdAndUpdate(params._id, params, {
            new: true,
        }).populate(['province', 'district']);
        return location;
    }
}
exports.default = LocationService;
//# sourceMappingURL=location.js.map