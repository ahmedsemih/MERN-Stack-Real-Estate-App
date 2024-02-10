"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { versionKey: false });
const Type = mongoose_1.models.Type || (0, mongoose_1.model)("Type", TypeSchema);
exports.default = Type;
//# sourceMappingURL=Type.js.map