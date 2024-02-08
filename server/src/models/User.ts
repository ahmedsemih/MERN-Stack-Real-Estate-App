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
    image: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Estate",
      },
    ],
    role: {
      type: String,
      enum: ["user", "admin", "banned"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
  },
  { versionKey: false, timestamps: { createdAt: true } }
);

const User = models.User || model("User", UserSchema);
export default User;
