import { useSearchParams } from "react-router-dom";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { CategoryFilter, LocationFilter, NumberFilters } from ".";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Estate } from "@/types";
import { BasicButton } from "@/components/ui";

export type FilterInputs = {
  category: string;
  type: string;
  detailedType: string;
  province: string;
  district: string;
  minPrice: string;
  maxPrice: string;
  minSize: string;
  maxSize: string;
};

type Props = {
  setEstates: Dispatch<SetStateAction<Estate[]>>;
};

const Filters: FC<Props> = ({ setEstates }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const methods = useForm<FilterInputs>({
    mode: "onSubmit",
    values: {
      category: searchParams.get('category') || 'sale',
      type: searchParams.get('type') || '',
      detailedType: searchParams.get('detailedType') || 'placeholder',
      province: searchParams.get('province') || 'placeholder',
      district: searchParams.get('district') || 'placeholder',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      minSize: searchParams.get('minSize') || '',
      maxSize: searchParams.get('maxSize') || '',
    }
  });

  const onSubmit: SubmitHandler<FilterInputs> = (values) => {
    const map = new Map(Object.entries(values));
    const newParams = new URLSearchParams();

    map.forEach((value, key) => {
      if (value && value !== "placeholder") newParams.append(key, value);
    });

    setEstates([]);
    setSearchParams(newParams);
  };

  const handleReset = () => {
    methods.reset();

    const newParams = new URLSearchParams();
    newParams.append("category", "sale");
    setSearchParams(newParams);

    methods.setValue("category", "sale");
  };

  return (
    <div className="w-full flex flex-col gap-2 z-50">
      <BasicButton
        type="button"
        radius="small"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="block md:hidden"
      >
        Open Filters
      </BasicButton>
      <aside
        className={`${
          isFilterOpen ? "block" : "hidden"
        } w-full h-full md:block p-4 bg-bgColor-soft border border-borderColor transition-all duration-500 rounded-lg`}
      >
        <form
          className="flex flex-col gap-8"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormProvider {...methods}>
            <CategoryFilter />
            <LocationFilter />
            <NumberFilters />
          </FormProvider>
          <div className="flex flex-col sm:flex-row w-full gap-4 border-borderColor border-t-2 pt-4">
            <BasicButton radius="small" type="submit" className="w-full">
              Search
            </BasicButton>
            <BasicButton
              radius="small"
              variant="outlined"
              onClick={handleReset}
              className="w-full"
            >
              Reset
            </BasicButton>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Filters;
