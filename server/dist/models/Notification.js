"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NotificationSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    estate: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Estate",
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
}, { versionKey: false, timestamps: { createdAt: true } });
const Notification = mongoose_1.models.Notification || (0, mongoose_1.model)("Notification", NotificationSchema);
exports.default = Notification;
//# sourceMappingURL=Notification.js.map