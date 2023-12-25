import { Schema, model, models } from "mongoose";

const LocationSchema = new Schema(
  {
    province: {
      type: Schema.Types.ObjectId,
      ref: "Province",
      required: true,
    },
    district: {
      type: Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Location = models.Location || model("Location", LocationSchema);
export default Location;
