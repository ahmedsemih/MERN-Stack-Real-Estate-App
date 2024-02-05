import { FC } from "react";
import { useForm } from "react-hook-form";

import { EstateInputs } from "..";
import { Select } from "@/components/form";
import { DetailedType, Type } from "@/types";

type Props = {
  category: "sale" | "rent";
  type: Type;
  detailedType: DetailedType;
};

const Category: FC<Props> = ({
  category,
  type,
  detailedType,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<EstateInputs>();

  return (
    <section className="rounded-lg border border-borderColor bg-bgColor-soft p-4 flex flex-col gap-4">
      <Select
        label="Category"
        error={errors.category}
        options={[
          { name: "Sale", value: "sale" },
          { name: "Rent", value: "rent" },
        ]}
        {...register("category", { value: category })}
      />
      <Select
        label="Type"
        error={errors.type}
        disabled
        placeholder="select type"
        options={[{ name: type.name, value: type._id }]}
        {...register("type", {
          value: type._id,
        })}
      />
      <Select
        label="Detailed Type"
        error={errors.detailedType}
        disabled
        placeholder="select sub type"
        options={[{ name: detailedType.name, value: detailedType._id }]}
        {...register("detailedType", {
          value: detailedType._id,
        })}
      />
    </section>
  );
};

export default Category;
