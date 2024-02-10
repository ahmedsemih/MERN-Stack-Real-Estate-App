"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DistrictSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    province: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Province",
    },
}, { versionKey: false });
const District = mongoose_1.models.District || (0, mongoose_1.model)("District", DistrictSchema);
exports.default = District;
//# sourceMappingURL=District.js.map