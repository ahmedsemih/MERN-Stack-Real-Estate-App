import { useQuery } from "@apollo/client";
import { useFormContext } from "react-hook-form";

import { FilterInputs } from "./Filters";
import { Select } from "@/components/form";
import { District, Province } from "@/types";
import { GET_PROVINCES } from "@/graphql/queries/provinces";
import { GET_DISTRICTS } from "@/graphql/queries/districts";

const LocationFilter = () => {
  const { register, watch } = useFormContext<FilterInputs>();

  const {
    data: provinceData,
    loading: provinceLoading,
    error: provinceError,
  } = useQuery(GET_PROVINCES);
  
  const {
    data: districtData,
    loading: districtLoading,
    error: districtError,
  } = useQuery(GET_DISTRICTS);

  const selectedProvince = watch("province");

  if (provinceLoading || districtLoading)
    return (
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold h-7 w-1/2 rounded-lg bg-borderColor animate-pulse"></div>
        <div className="h-10 w-full rounded-lg bg-borderColor animate-pulse"></div>
        <div className="h-10 w-full rounded-lg bg-borderColor animate-pulse"></div>
      </div>
    );

  if (provinceError || districtError)
    return (
      <div className="invisible">
        An error occurred while fetching provinces and districts.
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-semibold">Location</p>
      <Select
        label=""
        options={provinceData?.provinces.map((province: Province) => ({
          name: province.name,
          value: province._id,
        }))}
        placeholder="Select Province"
        {...register("province")}
      />
      <Select
        label=""
        options={districtData?.districts
          .filter(
            (district: District) => district.province._id === selectedProvince
          )
          .map((district: District) => ({
            name: district.name,
            value: district._id,
          }))}
        placeholder="Select District"
        {...register("district")}
      />
    </div>
  );
};

export default LocationFilter;
