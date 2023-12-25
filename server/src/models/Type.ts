import { Schema, model, models } from "mongoose";

const TypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const Type = models.Type || model("Type", TypeSchema);
export default Type;
