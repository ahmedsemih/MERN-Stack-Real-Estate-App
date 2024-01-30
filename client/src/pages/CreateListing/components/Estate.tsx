import { useFormContext } from "react-hook-form";

import { BaseInputs } from "..";
import { FileInput, Input, TextArea } from "@/components/form";

const Estate = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<BaseInputs>();

  return (
    <section className="flex flex-col gap-4">
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
        })}
      />
      <TextArea
        label="Description"
        placeholder="Description"
        error={errors.description}
        className="h-40"
        {...register("description", { required: "Description is required." })}
      />
      <div className="flex flex-col sm:flex-row gap-2 items-start">
        <Input
          label="Size (m²)"
          placeholder="Size as m²"
          type="number"
          error={errors.size}
          {...register("size", { required: "Size is required." })}
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
          })}
        />
      </div>
      <FileInput
        label="Images"
        setValue={setValue}
        withInfo
        error={errors.images}
        {...register("images", {
          required: "Image is required.",
          maxLength: { value: 10, message: "You can upload max 10 images." },
        })}
      />
    </section>
  );
};

export default Estate;
