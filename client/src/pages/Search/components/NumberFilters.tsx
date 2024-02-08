import { useFormContext } from "react-hook-form";

import { FilterInputs } from "./Filters";
import { Input } from "@/components/form";

const NumberFilters = () => {
  const { register } = useFormContext<FilterInputs>();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold mb-2">Price ($)</p>
        <div className="flex sm:flex-row md:flex-col xl:flex-row flex-col gap-4 items-end">
          <Input
            label=""
            placeholder="Min Price ($)"
            type="number"
            {...register("minPrice")}
          />
          <Input
            label=""
            placeholder="Max Price ($)"
            type="number"
            {...register("maxPrice")}
          />
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">Size (m²)</p>
        <div className="flex sm:flex-row md:flex-col xl:flex-row flex-col gap-4 items-end">
          <Input
            label=""
            placeholder="Min Size (m²)"
            type="number"
            {...register("minSize")}
          />
          <Input
            label=""
            placeholder="Max Size (m²)"
            type="number"
            {...register("maxSize")}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberFilters;
