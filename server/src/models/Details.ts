import { Schema, model, models } from "mongoose";

const DetailsSchema = new Schema(
  {
    buildingYear: Number,
    roomAndSaloon: String,
    floor: Number,
    locatedFloor: Number,
    bathroom: Number,
    internet: Boolean,
    furnished: Boolean,
    balcony: Boolean,
    elevator: Boolean,
    thermalInsulation: Boolean,
    garage: Boolean,
    fittedKitchen: Boolean,
    fittedBathroom: Boolean,
    parquet: Boolean,
    heatingType: {
      type: String,
      enum: [
        "heat pump",
        "forced air system",
        "radiator system",
        "radiant heating",
      ],
    },
  },
  { versionKey: false }
);

const Details = models.Details || model("Details", DetailsSchema);
export default Details;
