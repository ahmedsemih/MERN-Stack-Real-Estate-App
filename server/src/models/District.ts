import { Schema, model, models } from "mongoose";

const DistrictSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    province: {
      type: Schema.Types.ObjectId,
      ref: "Province",
    },
  },
  { versionKey: false }
);

const District = models.District || model("District", DistrictSchema);
export default District;
