import { Schema, model, models } from "mongoose";

const DetailedTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
  },
  { versionKey: false }
);

const DetailedType =
  models.DetailedType || model("DetailedType", DetailedTypeSchema);
export default DetailedType;
