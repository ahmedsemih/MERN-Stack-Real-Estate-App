import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 30,
      required: true,
    },
    password: {
      type: String,
      minLength: 5,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    favorites: {
      type: Schema.Types.ObjectId,
      ref: "Estate",
    },
    role: {
      type: String,
      enum: ["user", "admin", "banned"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: { createdAt: true } }
);

const User = models.User || model("User", UserSchema);
export default User;
