import { useQuery } from "@apollo/client";
import { useFormContext } from "react-hook-form";

import { BaseInputs } from "..";
import { Select } from "@/components/form";
import { DetailedType, Type } from "@/types";
import { GET_TYPES } from "@/graphql/queries/types";
import { GET_DETAILED_TYPES } from "@/graphql/queries/detailedTypes";

const Category = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<BaseInputs>();
  const { data: typesData } = useQuery(GET_TYPES);
  const { loading, data: detailedTypesData } = useQuery(GET_DETAILED_TYPES);

  const selectedType = watch("type");

  if (loading || !typesData || !detailedTypesData)
    return (
      <section className="flex flex-col gap-4">
        <div className="w-full">
          <div className="w-32 h-6 mb-1 bg-borderColor animate-pulse rounded-lg"></div>
          <div className="bg-borderColor rounded-lg border-borderColor border-2 h-10 w-full animate-pulse"></div>
        </div>
        <div className="w-full">
          <div className="w-32 h-6 mb-1 bg-borderColor animate-pulse rounded-lg"></div>
          <div className="bg-borderColor rounded-lg border-borderColor border-2 h-10 w-full animate-pulse"></div>
        </div>
        <div className="w-full">
          <div className="w-32 h-6 mb-1 bg-borderColor animate-pulse rounded-lg"></div>
          <div className="bg-borderColor rounded-lg border-borderColor border-2 h-10 w-full animate-pulse"></div>
        </div>
      </section>
    );

  return (
    <section className="flex flex-col gap-4">
      <Select
        label="Category"
        defaultValue="sale"
        error={errors.category}
        options={[
          { name: "Sale", value: "sale" },
          { name: "Rent", value: "rent" },
        ]}
        {...register("category")}
      />
      <Select
        label="Type"
        error={errors.type}
        placeholder="select type"
        options={typesData?.types?.map((type: Type) => ({
          name: type.name,
          value: type._id,
        }))}
        {...register("type", {
          required: "Every property must have a type.",
          validate: (value) => value !== "placeholder",
        })}
      />
      <Select
        label="Detailed Type"
        error={errors.detailedType}
        disabled={!selectedType || selectedType === "placeholder"}
        placeholder="select sub type"
        options={detailedTypesData?.detailedTypes
          ?.filter(
            (detailedType: DetailedType) =>
              detailedType.parent._id === selectedType
          )
          .map((type: DetailedType) => ({
            name: type.name,
            value: type._id,
          }))}
        {...register("detailedType", {
          required: "Every property must have a detailed type.",
          validate: (value) => value !== "placeholder",
        })}
      />
    </section>
  );
};

export default Category;
