import { FC } from "react";
import { useQuery } from "@apollo/client";
import { useFormContext } from "react-hook-form";

import { EstateInputs } from "..";
import { Select, TextArea } from "@/components/form";
import { District, Location, Province } from "@/types";
import { GET_DISTRICTS } from "@/graphql/queries/districts";
import { GET_PROVINCES } from "@/graphql/queries/provinces";

type Props = {
  location: Location;
};

const Location: FC<Props> = ({ location }) => {
  const { loading: provinceLoading, data: provinceData } = useQuery(GET_PROVINCES);
  const { loading: districtLoading, data: districtData } = useQuery(GET_DISTRICTS);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<EstateInputs>();

  const selectedProvince = watch("province");

  if (provinceLoading || districtLoading || !provinceData || !districtData)
    return (
      <section className="rounded-lg border border-borderColor bg-bgColor-soft p-4 flex flex-col gap-4">
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
          <div className="bg-borderColor rounded-lg border-borderColor border-2 h-20 w-full animate-pulse"></div>
        </div>
      </section>
    );

  return (
    <section className="rounded-lg border border-borderColor bg-bgColor-soft p-4 flex flex-col gap-4">
      <Select
        label="Province"
        options={provinceData?.provinces?.map((province: Province) => ({
          name: province.name,
          value: province._id,
        }))}
        error={errors.province}
        placeholder="Select a province"
        {...register("province", {
          required: "Province is required.",
          validate: (value) => value !== "placeholder",
          value: location.province._id,
        })}
      />
      <Select
        label="District"
        disabled={!selectedProvince || selectedProvince === "placeholder"}
        options={districtData?.districts
          ?.filter(
            (district: District) => district.province._id === selectedProvince
          )
          .map((district: District) => ({
            name: district.name,
            value: district._id,
          }))}
        error={errors.district}
        placeholder="Select a district"
        {...register("district", {
          required: "District is required.",
          validate: (value) => value !== "placeholder",
          value: location.district._id,
        })}
      />
      <TextArea
        label="Address"
        placeholder="Full address of estate"
        error={errors.address}
        {...register("address", {
          required: "Address is required.",
          minLength: {
            value: 10,
            message: "Please enter a valid address.",
          },
          maxLength: {
            value: 200,
            message: "Address must be max 200 characters.",
          },
          value: location.address,
        })}
      />
    </section>
  );
};

export default Location;
