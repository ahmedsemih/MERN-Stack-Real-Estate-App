import NotificationService, { CreateParams } from "../../services/notification";

export default {
  Query: {
    async notification(_: any, args: { _id: string }) {
      const notification = await NotificationService.getNotification(args._id);
      return notification;
    },
    async notifications() {
      const notifications = await NotificationService.getNotifications();
      return notifications;
    },
    async notificationsByUser(_: any, args: { userId: string }) {
      const notifications = await NotificationService.getNotificationsByUser(
        args.userId
      );
      return notifications;
    },
  },
  Mutation: {
    async createNotification(_: any, args: CreateParams) {
      const notification = await NotificationService.createNotification(args);
      return notification;
    },
    async deleteNotification(_: any, args: { _id: string }) {
      const notification = await NotificationService.deleteNotifications(
        args._id
      );
      return notification;
    },
  },
};
