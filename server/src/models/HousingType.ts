import { Schema, model, models } from "mongoose";

const HousingTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const HousingType =
  models.HousingType || model("HousingType", HousingTypeSchema);
export default HousingType;
