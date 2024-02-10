"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EstateSchema = new mongoose_1.Schema({
    images: {
        type: [String],
        default: [
            "https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg",
        ],
    },
    title: {
        type: String,
        maxLength: 80,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 100,
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    size: {
        type: Number,
        required: true,
        min: 1,
    },
    status: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        enum: ["rent", "sale"],
        required: true,
    },
    type: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Type",
        required: true,
    },
    detailedType: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "DetailedType",
    },
    details: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Details",
    },
    location: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
}, { versionKey: false, timestamps: true });
const Estate = mongoose_1.models.Estate || (0, mongoose_1.model)("Estate", EstateSchema);
exports.default = Estate;
//# sourceMappingURL=Estate.js.map