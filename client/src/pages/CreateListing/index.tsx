import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import {
  Buttons,
  Category,
  Details,
  Estate,
  Location,
  Stepper,
  Submit,
} from "./components";
import { useAuthStore } from "@/store/authStore";
import UploadService from "@/services/UploadService";
import checkListingError from "@/utils/checkListingError";
import { CREATE_ESTATE } from "@/graphql/mutations/estates";
import { CREATE_DETAILS } from "@/graphql/mutations/details";
import { CREATE_LOCATION } from "@/graphql/mutations/locations";

export type BaseInputs = {
  category: "rent" | "sale";
  images: FileList;
  title: string;
  description: string;
  price: number;
  size: number;
  type: string;
  detailedType: string;
  location: string;
  details?: string;
};

export type LocationInputs = {
  province: string;
  district: string;
  address: string;
};

export type DetailsInputs = {
  buildingYear?: number;
  roomAndSaloon?: string;
  floor?: number;
  locatedFloor?: number;
  bathroom?: number;
  internet?: boolean;
  furnished?: boolean;
  balcony?: boolean;
  elevator?: boolean;
  thermalInsulation?: boolean;
  garage?: boolean;
  fittedKitchen?: boolean;
  fittedBathroom?: boolean;
  parquet?: boolean;
  heatingType?: string;
};

const CreateListingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const user = useAuthStore((state) => state.user);

  const [createDetails] = useMutation(CREATE_DETAILS, {
    onCompleted: ({ createDetails }) =>
      methods.setValue("details", createDetails._id),
    onError: () => toast.error("Somethings went wrong."),
  });

  const [createLocation] = useMutation(CREATE_LOCATION, {
    onCompleted: async ({ createLocation }) => {
      methods.setValue("location", createLocation._id);

      const {
        images,
        title,
        description,
        price,
        size,
        category,
        type,
        detailedType,
        details,
      } = methods.getValues();

      const imageUrls: string[] = [];

      for (let i = 0; i < images.length; i++) {
        const res = await UploadService.uploadImage(images[i]);

        if (res?.message) return toast.error("Somethings went wrong.");

        imageUrls.push(res.secure_url);
      }

      setTimeout(() => {
        createEstate({
          variables: {
            images: imageUrls,
            title,
            description,
            price: Number(price),
            seller: user?._id,
            size: Number(size),
            category,
            location: createLocation._id,
            type,
            detailedType,
            details: details ? details : null,
          },
        });

        setLoading(false);
      }, 2000);
    },
    onError: () => toast.error("Somethings went wrong."),
  });

  const [createEstate, { loading: estateLoading }] = useMutation(
    CREATE_ESTATE,
    {
      onCompleted: () => {
        toast.success("Listings created successfully.");
        return navigate("/listings");
      },
      onError: () => toast.error("Listing couldn't be created."),
    }
  );

  const methods = useForm<BaseInputs & LocationInputs & DetailsInputs>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<
    BaseInputs & LocationInputs & DetailsInputs
  > = async (data) => {
    const {
      province,
      district,
      address,
      buildingYear,
      balcony,
      bathroom,
      elevator,
      fittedKitchen,
      fittedBathroom,
      furnished,
      floor,
      garage,
      heatingType,
      internet,
      locatedFloor,
      parquet,
      roomAndSaloon,
      thermalInsulation,
    } = data;

    setLoading(true);

    if (data.buildingYear)
      createDetails({
        variables: {
          buildingYear: Number(buildingYear),
          roomAndSaloon,
          floor: Number(floor),
          locatedFloor: Number(locatedFloor),
          bathroom: Number(bathroom),
          internet,
          furnished,
          balcony,
          elevator,
          thermalInsulation,
          garage,
          fittedKitchen,
          fittedBathroom,
          parquet,
          heatingType,
        },
      });

    createLocation({
      variables: {
        province,
        district,
        address,
      },
    });
  };
  const inputs = methods.watch();

  return (
    <FormProvider {...methods}>
      <div className="md:w-[600px] w-full mx-auto my-8">
        <h1 className="text-3xl font-semibold my-4">Create Listing</h1>
        <Stepper
          currentStep={step}
          setCurrentStep={setStep}
          type={inputs.type}
          disabled={checkListingError(step, inputs, methods.formState.errors)}
        />
        <form
          className="w-full bg-bgColor-soft rounded-lg mt-4 p-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {(() => {
            switch (step) {
              case 0:
                return <Category />;
              case 1:
                return <Location />;
              case 2:
                return <Estate />;
              case 3:
                return <Details />;
              default:
                return <Submit setStep={setStep} />;
            }
          })()}
          <Buttons
            step={step}
            setStep={setStep}
            type={inputs.type}
            loading={estateLoading || loading}
            disabled={checkListingError(step, inputs, methods.formState.errors)}
          />
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateListingPage;
