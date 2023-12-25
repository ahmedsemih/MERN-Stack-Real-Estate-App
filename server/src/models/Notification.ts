import { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    estate: {
      type: Schema.Types.ObjectId,
      ref: "Estate",
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: { createdAt: true } }
);

const Notification =
  models.Notification || model("Notification", NotificationSchema);
export default Notification;
