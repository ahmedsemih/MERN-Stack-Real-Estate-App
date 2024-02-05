import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { EstateInputs } from "..";
import { FileInput, Input, TextArea } from "@/components/form";
import { ExistingImages } from ".";

type Props = {
  estate: {
    _id: string;
    title: string;
    description: string;
    price: number;
    size: number;
    images: string[];
    status: boolean;
    updatedAt: string;
    createdAt: string;
  };
};

const Estate: FC<Props> = ({ estate }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<EstateInputs>();

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-borderColor bg-bgColor-soft p-4 w-full">
      <Input
        label="Title"
        placeholder="Title of Listing"
        type="text"
        error={errors.title}
        {...register("title", {
          required: "Title is required.",
          maxLength: {
            value: 100,
            message: "Title must be max 100 characters.",
          },
          minLength: { value: 10, message: "Title must be min 10 characters." },
          value: estate.title,
        })}
      />
      <TextArea
        label="Description"
        placeholder="Description"
        error={errors.description}
        className="h-40"
        {...register("description", {
          required: "Description is required.",
          value: estate.description,
        })}
      />
      <div className="flex flex-col sm:flex-row gap-2 items-start">
        <Input
          label="Size (m²)"
          placeholder="Size as m²"
          type="number"
          error={errors.size}
          {...register("size", {
            required: "Size is required.",
            value: estate.size,
          })}
        />
        <Input
          label="Price ($)"
          placeholder="Price of Estate"
          type="number"
          error={errors.price}
          {...register("price", {
            required: "Price is required.",
            min: { value: 1000, message: "Price must be min 1000$." },
            max: {
              value: 1000000000,
              message: "This is not a realistic expectation.",
            },
            value: estate.price,
          })}
        />
      </div>
      <ExistingImages images={estate.images} setValue={setValue} />
      <FileInput
        label="Upload New"
        // @ts-expect-error type diff
        setValue={setValue}
        withInfo
        error={errors.images}
        {...register("images", {
          maxLength: { value: 10, message: "You can upload max 10 images." },
        })}
      />
    </section>
  );
};

export default Estate;
