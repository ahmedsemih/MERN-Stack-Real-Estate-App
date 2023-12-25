import { Schema, model, models } from "mongoose";

const ProvinceSchema = new Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const Province = models.Province || model("Province", ProvinceSchema);
export default Province;
