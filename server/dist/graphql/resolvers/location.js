"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("../../services/location"));
exports.default = {
    Query: {
        async location(_, args) {
            const location = await location_1.default.getLocation(args._id);
            return location;
        },
        async locations() {
            const locations = await location_1.default.getLocations();
            return locations;
        },
    },
    Mutation: {
        async createLocation(_, args) {
            const location = await location_1.default.createLocation(args);
            return location;
        },
        async updateLocation(_, args) {
            const location = await location_1.default.updateLocation(args);
            return location;
        },
    },
};
//# sourceMappingURL=location.js.map