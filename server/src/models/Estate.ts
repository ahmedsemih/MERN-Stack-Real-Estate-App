import { Schema, model, models } from "mongoose";

const EstateSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
    detailedType: {
      type: Schema.Types.ObjectId,
      ref: "DetailedType",
    },
    details: {
      type: Schema.Types.ObjectId,
      ref: "Details",
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Estate = models.Estate || model("Estate", EstateSchema);
export default Estate;
