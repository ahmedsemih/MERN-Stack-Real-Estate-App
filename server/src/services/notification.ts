import Notification from "../models/Notification";

export type CreateParams = {
  message: string;
  user: string;
  estate: string;
};

class NotificationService {
  public static async getNotification(_id: string) {
    const notification = await Notification.findById(_id).populate([
      "user",
      "estate",
    ]);
    return notification;
  }

  public static async getNotifications() {
    const notifications = await Notification.find({}).populate([
      "user",
      "estate",
    ]);
    return notifications;
  }

  public static async getNotificationsByUser(userId: string) {
    const notifications = await Notification.find({
      user: userId,
    }).populate(["user", "estate"]);
    return notifications;
  }

  public static async createNotification(params: CreateParams) {
    const notification = await Notification.create(params);
    return notification;
  }

  public static async deleteNotifications(_id: string) {
    const notification = await Notification.findByIdAndDelete(_id);
    return notification;
  }
}

export default NotificationService;
