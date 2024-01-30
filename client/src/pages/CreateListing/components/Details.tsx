import { useFormContext } from "react-hook-form";

import { DetailsInputs } from "..";
import { Checkbox, Input, Select } from "@/components/form";
import { HEATING_SYSTEMS, ROOM_AND_SALOONS } from "@/utils/constants";

const Details = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<DetailsInputs>();

  const totalFloors = watch("floor");

  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="flex sm:flex-row flex-col items-start gap-4">
          <Select
            label="Room and Saloon"
            placeholder="Room and Saloon"
            error={errors.roomAndSaloon}
            options={ROOM_AND_SALOONS}
            {...register("roomAndSaloon", { required: "This is required." })}
          />
          <Input
            label="Bathroom Count"
            placeholder="Count of Bathrooms"
            type="number"
            error={errors.bathroom}
            {...register("bathroom", { required: "This is required." })}
          />
        </div>
        <div className="flex sm:flex-row flex-col items-start gap-4">
          <Input
            label="Total Floor"
            placeholder="Count of Floors"
            type="number"
            error={errors.floor}
            {...register("floor", { required: "This is required." })}
          />
          <Input
            label="Floor Location"
            placeholder="Floor Location"
            type="number"
            error={errors.locatedFloor}
            disabled={!totalFloors}
            {...register("locatedFloor", {
              required: "This is required.",
              max: {
                value: totalFloors ?? 1000,
                message: "Please enter a valid floor",
              },
            })}
          />
        </div>
        <div className="flex sm:flex-row flex-col items-start gap-4">
          <Input
            label="Building Year"
            placeholder="Construction Year (2021 etc)"
            type="number"
            error={errors.buildingYear}
            {...register("buildingYear", {
              required: "This is required.",
              max: {
                value: Number(new Date().getFullYear()),
                message: "Enter a valid year",
              },
            })}
          />
          <Select
            label="Heating System"
            placeholder="Heating System"
            options={HEATING_SYSTEMS}
            error={errors.heatingType}
            {...register("heatingType", { required: "This is required." })}
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="flex flex-col sm:flex-row justify-between sm:gap-x-8 gap-y-2">
          <div className="flex flex-col flex-1 gap-y-3">
            <Checkbox
              label="is Furnished"
              layout="checkbox-first"
              {...register("furnished")}
            />
            <Checkbox
              label="is Bathroom Fitted?"
              layout="checkbox-first"
              {...register("fittedBathroom")}
            />
            <Checkbox
              label="is Kitchen Fitted?"
              layout="checkbox-first"
              {...register("fittedKitchen")}
            />
            <Checkbox
              label="has Parquet"
              layout="checkbox-first"
              {...register("parquet")}
            />
          </div>
          <div className="flex flex-col flex-1 gap-y-3">
            <Checkbox
              label="has Balcony"
              layout="checkbox-first"
              {...register("balcony")}
            />
            <Checkbox
              label="has Elevator"
              layout="checkbox-first"
              {...register("elevator")}
            />
            <Checkbox
              label="has Internet"
              layout="checkbox-first"
              {...register("internet")}
            />
            <Checkbox
              label="has Garage"
              layout="checkbox-first"
              {...register("garage")}
            />
            <Checkbox
              label="has Thermal Insulation"
              layout="checkbox-first"
              {...register("thermalInsulation")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
