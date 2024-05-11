import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { FilterInputs } from "./Filters";
import { DetailedType, Type } from "@/types";
import { GET_TYPES } from "@/graphql/queries/types";
import { RadioInputs, Select } from "@/components/form";
import { GET_DETAILED_TYPES } from "@/graphql/queries/detailedTypes";

const CategoryFilter = () => {
  const { register, watch, setValue, getValues } = useFormContext<FilterInputs>();
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const values = getValues();
    return values.category;
  });

  const {
    data: typeData,
    loading: typeLoading,
    error: typeError,
  } = useQuery(GET_TYPES);

  const {
    data: detailedData,
    loading: detailedLoading,
    error: detailedError,
  } = useQuery(GET_DETAILED_TYPES);

  const selectedType = watch("type");

  const handleChangeCategory = (category: "sale" | "rent") => {
    setSelectedCategory(category);
    setValue("category", category);
  };

  useEffect(() => {
    setSelectedCategory(getValues().category);
  }, [getValues().category]);

  if (typeLoading || detailedLoading)
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div className="w-full h-[60px] rounded-full bg-borderColor animate-pulse"></div>
          <div className="w-full h-[60px] rounded-full bg-borderColor animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-7 w-1/2 rounded-lg bg-borderColor animate-pulse"></div>
          <div className="h-10 w-full rounded-lg bg-borderColor animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-7 w-1/2 rounded-lg bg-borderColor animate-pulse"></div>
          <div className="h-10 w-full rounded-lg bg-borderColor animate-pulse"></div>
        </div>
      </div>
    );

  if (typeError || detailedError)
    return (
      <div className="invisible">
        An error occurred while fetching provinces and districts.
      </div>
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleChangeCategory("sale")}
          className={`p-4 w-full rounded-full border text-center font-semibold transition-all duration-200 cursor-pointer ${
            selectedCategory === "sale"
              ? "bg-primary text-white border-primary"
              : "hover:bg-borderColor border-textColor-soft text-textColor-soft"
          }`}
        >
          Sale
        </button>
        <button
          type="button"
          onClick={() => handleChangeCategory("rent")}
          className={`p-4 w-full rounded-full border text-center font-semibold transition-all duration-200 cursor-pointer ${
            selectedCategory === "rent"
              ? "bg-primary text-white border-primary"
              : "hover:bg-borderColor border-textColor-soft text-textColor-soft"
          }`}
        >
          Rent
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Type</p>
        <RadioInputs
          label=""
          options={typeData?.types.map((type: Type) => ({
            name: type.name,
            value: type._id,
          }))}
          {...register("type")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Detailed Type</p>
        <Select
          label=""
          options={detailedData?.detailedTypes
            .filter(
              (detailedType: DetailedType) =>
                detailedType.parent._id === selectedType
            )
            .map((detailedType: DetailedType) => ({
              name: detailedType.name,
              value: detailedType._id,
            }))}
          placeholder="Select Detailed Type"
          {...register("detailedType")}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
