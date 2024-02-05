import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { Details } from "@/types";
import { EstateInputs } from "..";
import { Checkbox, Input, Select } from "@/components/form";
import { HEATING_SYSTEMS, ROOM_AND_SALOONS } from "@/utils/constants";

type Props = {
  details?: Details;
};

const Details: FC<Props> = ({ details }) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<EstateInputs>();

  const totalFloors = watch("floor");

  if(details)
  return (
    <section className="flex flex-col gap-4 rounded-lg border border-borderColor bg-bgColor-soft p-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex sm:flex-row flex-col items-start gap-4">
          <Select
            label="Room and Saloon"
            placeholder="Room and Saloon"
            error={errors.roomAndSaloon}
            options={ROOM_AND_SALOONS}
            {...register("roomAndSaloon", {
              required: "This is required.",
              value: details?.roomAndSaloon,
            })}
          />
          <Input
            label="Bathroom Count"
            placeholder="Count of Bathrooms"
            type="number"
            error={errors.bathroom}
            {...register("bathroom", {
              required: "This is required.",
              value: details?.bathroom,
            })}
          />
        </div>
        <div className="flex sm:flex-row flex-col items-start gap-4">
          <Input
            label="Total Floor"
            placeholder="Count of Floors"
            type="number"
            error={errors.floor}
            {...register("floor", {
              required: "This is required.",
              value: details?.floor,
            })}
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
              value: details?.locatedFloor,
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
              value: details?.buildingYear,
            })}
          />
          <Select
            label="Heating System"
            placeholder="Heating System"
            options={HEATING_SYSTEMS}
            error={errors.heatingType}
            {...register("heatingType", {
              required: "This is required.",
              value: details?.heatingType,
            })}
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="flex flex-col gap-4">
            <Checkbox
              label="is Furnished"
              layout="checkbox-first"
              {...(register("furnished"), { value: details?.furnished })}
            />
            <Checkbox
              label="is Bathroom Fitted?"
              layout="checkbox-first"
              {...register("fittedBathroom", { value: details?.fittedBathroom })}
            />
            <Checkbox
              label="is Kitchen Fitted?"
              layout="checkbox-first"
              {...register("fittedKitchen", { value: details?.fittedKitchen })}
            />
            <Checkbox
              label="has Parquet"
              layout="checkbox-first"
              {...register("parquet", { value: details?.parquet })}
            />
            <Checkbox
              label="has Balcony"
              layout="checkbox-first"
              {...register("balcony", { value: details?.balcony })}
            />
            <Checkbox
              label="has Elevator"
              layout="checkbox-first"
              {...register("elevator", { value: details?.elevator })}
            />
            <Checkbox
              label="has Internet"
              layout="checkbox-first"
              {...register("internet", { value: details?.internet })}
            />
            <Checkbox
              label="has Garage"
              layout="checkbox-first"
              {...register("garage", { value: details?.garage })}
            />
            <Checkbox
              label="has Thermal Insulation"
              layout="checkbox-first"
              {...register("thermalInsulation", {
                value: details?.thermalInsulation,
              })}
            />
        </div>
      </div>
    </section>
  );
};

export default Details;
