"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DetailedTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    parent: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Type",
        required: true,
    },
}, { versionKey: false });
const DetailedType = mongoose_1.models.DetailedType || (0, mongoose_1.model)("DetailedType", DetailedTypeSchema);
exports.default = DetailedType;
//# sourceMappingURL=DetailedType.js.map