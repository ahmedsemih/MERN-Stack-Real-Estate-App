import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import {
  Buttons,
  Category,
  Details,
  Estate,
  Loader,
  Location,
} from "./components";
import { Error } from "@/components/common";
import generateSlug from "@/utils/generateSlug";
import UploadService from "@/services/UploadService";
import { GET_ESTATE } from "@/graphql/queries/estates";
import { UPDATE_ESTATE } from "@/graphql/mutations/estates";
import { UPDATE_DETAILS } from "@/graphql/mutations/details";
import { UPDATE_LOCATION } from "@/graphql/mutations/locations";

export type EstateInputs = {
  category: "sale" | "rent";
  type: string;
  detailedType: string;
  province: string;
  district: string;
  address: string;
  title: string;
  description: string;
  price: number;
  size: number;
  imageUrls: string[];
  images?: FileList;
  buildingYear: number;
  roomAndSaloon: string;
  floor: number;
  locatedFloor: number;
  bathroom: number;
  internet: boolean;
  furnished: boolean;
  balcony: boolean;
  elevator: boolean;
  thermalInsulation: boolean;
  garage: boolean;
  fittedKitchen: boolean;
  fittedBathroom: boolean;
  parquet: boolean;
  heatingType: string;
};

const EditListingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    data,
    loading: fetchLoading,
    error,
  } = useQuery(GET_ESTATE, {
    variables: { _id: state.estateId },
  });

  const [updateLocation] = useMutation(UPDATE_LOCATION, {
    onError: () => toast.error("Listing couldn't be updated."),
  });

  const [updateDetails] = useMutation(UPDATE_DETAILS, {
    onError: () => toast.error("Listing couldn't be updated."),
  });

  const [updateEstate, { loading: updateLoading }] = useMutation(
    UPDATE_ESTATE,
    {
      onCompleted: () => {
        toast.success("Listing updated successfully.");
        setTimeout(() => {
          navigate("/listings");
        }, 2000);
      },
      onError: () => toast.error("Listing couldn't be updated."),
    }
  );

  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      province: data?.estate.location.province._id,
      district: data?.estate.location.district._id
    }
  });

  const onSubmit: SubmitHandler<EstateInputs> = async (values) => {
    const {
      address,
      balcony,
      bathroom,
      buildingYear,
      category,
      description,
      detailedType,
      district,
      elevator,
      fittedBathroom,
      fittedKitchen,
      floor,
      furnished,
      garage,
      heatingType,
      imageUrls,
      internet,
      locatedFloor,
      parquet,
      price,
      province,
      roomAndSaloon,
      size,
      thermalInsulation,
      title,
      type,
      images,
    } = values;

    setLoading(true);
    const imageArray: string[] = imageUrls || data?.estate.images;

    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const res = await UploadService.uploadImage(images[i]);

        if (res?.message) return toast.error("Somethings went wrong.");

        imageArray.push(res.secure_url);
      }
    }

    if (data?.estate.details) {
      updateDetails({
        variables: {
          _id: data?.estate.details._id,
          buildingYear,
          roomAndSaloon,
          balcony,
          bathroom,
          elevator,
          fittedBathroom,
          fittedKitchen,
          floor,
          furnished,
          garage,
          locatedFloor,
          internet,
          heatingType,
          thermalInsulation,
          parquet,
        },
      });
    }

    updateLocation({
      variables: {
        _id: data?.estate.location._id,
        province,
        district,
        address,
      },
    });

    updateEstate({
      variables: {
        _id: data?.estate._id,
        images: imageArray,
        title,
        description,
        price: Number(price),
        size: Number(size),
        category,
        type,
        detailedType,
      },
    });

    setLoading(false);
  };

  if (fetchLoading) return <Loader />;

  if (error)
    return (
      <Error message="Whoops! An error occurred while fetching this estate." />
    );

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="false"
        className="flex flex-col gap-4 my-8"
        // @ts-expect-error type diff
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-semibold">
          Edit Listing: {generateSlug(data?.estate.title)}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Category
            category={data?.estate.category}
            type={data?.estate.type}
            detailedType={data?.estate.detailedType}
          />
          <Location location={data?.estate.location} />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Estate estate={data?.estate} />
          <Details details={data?.estate.details} />
        </div>
        <Buttons _id={state.estateId} saveLoading={updateLoading || loading} />
      </form>
    </FormProvider>
  );
};

export default EditListingPage;
