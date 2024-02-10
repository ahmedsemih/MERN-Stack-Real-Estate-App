"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProvinceSchema = new mongoose_1.Schema({
    code: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { versionKey: false });
const Province = mongoose_1.models.Province || (0, mongoose_1.model)("Province", ProvinceSchema);
exports.default = Province;
//# sourceMappingURL=Province.js.map