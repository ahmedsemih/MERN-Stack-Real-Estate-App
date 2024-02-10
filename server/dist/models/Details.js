"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DetailsSchema = new mongoose_1.Schema({
    buildingYear: Number,
    roomAndSaloon: String,
    floor: Number,
    locatedFloor: Number,
    bathroom: Number,
    internet: Boolean,
    furnished: Boolean,
    balcony: Boolean,
    elevator: Boolean,
    thermalInsulation: Boolean,
    garage: Boolean,
    fittedKitchen: Boolean,
    fittedBathroom: Boolean,
    parquet: Boolean,
    heatingType: {
        type: String,
        enum: [
            "heat pump",
            "forced air system",
            "radiator system",
            "radiant heating",
        ],
    },
}, { versionKey: false });
const Details = mongoose_1.models.Details || (0, mongoose_1.model)("Details", DetailsSchema);
exports.default = Details;
//# sourceMappingURL=Details.js.map