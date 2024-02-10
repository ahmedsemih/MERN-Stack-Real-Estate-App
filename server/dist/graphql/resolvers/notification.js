"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notification_1 = __importDefault(require("../../services/notification"));
exports.default = {
    Query: {
        async notification(_, args) {
            const notification = await notification_1.default.getNotification(args._id);
            return notification;
        },
        async notifications() {
            const notifications = await notification_1.default.getNotifications();
            return notifications;
        },
        async notificationsByUser(_, args) {
            const notifications = await notification_1.default.getNotificationsByUser(args.userId);
            return notifications;
        },
    },
    Mutation: {
        async createNotification(_, args) {
            const notification = await notification_1.default.createNotification(args);
            return notification;
        },
        async deleteNotification(_, args) {
            const notification = await notification_1.default.deleteNotifications(args._id);
            return notification;
        },
    },
};
//# sourceMappingURL=notification.js.map