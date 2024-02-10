import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { MdCheck, MdClose } from "react-icons/md";

import formatPrice from "@/utils/formatPrice";
import { BaseInputs, DetailsInputs, LocationInputs } from "..";

const Submit = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
  const { getValues } = useFormContext<BaseInputs & DetailsInputs & LocationInputs>();
  const values = getValues();

  return (
    <section className="flex flex-col gap-4 text-xl">
      <div>
        <h1 className="text-3xl font-semibold">Check The Informations </h1>
        <p className="text-textColor-soft sm:text-lg text-sm">
          (If you want to change, just "click" on them.)
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          onClick={() => setStep(0)}
          className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer"
        >
          For<strong className="capitalize ml-1"> {values.category}</strong>
        </p>
        <div onClick={() => setStep(2)} className="flex flex-col gap-2">
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Title:<strong className="ml-1">{values.title}</strong>
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Description: {values.description}{" "}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Price: {formatPrice(values.price)}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Size: {values.size} m²
          </p>
        </div>
        <p
          onClick={() => setStep(1)}
          className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer"
        >
          Address: {values.address}
        </p>
      </div>
      {values.buildingYear && (
        <div
          onClick={() => setStep(3)}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Building Year: {values.buildingYear}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Room and Saloon: {values.roomAndSaloon}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Bathrooms: {values.bathroom}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Total Floor: {values.floor}
          </p>
          <p className="hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
            Floor Location: {values.locatedFloor}
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-4">
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Furnished <BooleanSign value={values.furnished!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Internet <BooleanSign value={values.internet!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Fitted Kitchen <BooleanSign value={values.fittedKitchen!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Fitted Bathroom <BooleanSign value={values.fittedBathroom!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Balcony <BooleanSign value={values.balcony!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Elevator <BooleanSign value={values.elevator!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Garage <BooleanSign value={values.garage!} />
            </div>
            <div className="flex items-center gap-2 col-span-1 hover:text-primary text-textColor transition-all duration-200 cursor-pointer">
              Thermal Insulation{" "}
              <BooleanSign value={values.thermalInsulation!} />
            </div>
          </div>
        </div>
      )}
      <hr className="border-borderColor" />
      <p className="text-sm py-1 text-textColor-soft">
        * From the moment you submit, you agree all that informations is
        correct. *
      </p>
    </section>
  );
};

const BooleanSign = ({ value }: { value: boolean }) => {
  if (value) return <MdCheck className="text-3xl " />;
  return <MdClose className="text-3xl" />;
};

export default Submit;
