"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = __importDefault(require("../models/Notification"));
class NotificationService {
    static async getNotification(_id) {
        const notification = await Notification_1.default.findById(_id).populate([
            "user",
            "estate",
        ]);
        return notification;
    }
    static async getNotifications() {
        const notifications = await Notification_1.default.find({}).populate([
            "user",
            "estate",
        ]);
        return notifications;
    }
    static async getNotificationsByUser(userId) {
        const notifications = await Notification_1.default.find({
            user: userId,
        }).populate(["user", "estate"]);
        return notifications;
    }
    static async createNotification(params) {
        const notification = await Notification_1.default.create(params);
        return notification;
    }
    static async deleteNotifications(_id) {
        const notification = await Notification_1.default.findByIdAndDelete(_id);
        return notification;
    }
}
exports.default = NotificationService;
//# sourceMappingURL=notification.js.map