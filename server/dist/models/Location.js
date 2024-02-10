"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LocationSchema = new mongoose_1.Schema({
    province: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Province",
        required: true,
    },
    district: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "District",
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { versionKey: false });
const Location = mongoose_1.models.Location || (0, mongoose_1.model)("Location", LocationSchema);
exports.default = Location;
//# sourceMappingURL=Location.js.map