import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { HOUSING_TYPE_ID, LISTING_STEPS } from "@/utils/constants";

type Props = {
  type: string;
  disabled: boolean;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const Stepper: FC<Props> = ({
  type,
  disabled,
  currentStep,
  setCurrentStep,
}) => {
  const [maxStep, setMaxStep] = useState<number>(1);

  useEffect(() => {
    if (currentStep > maxStep) setMaxStep(currentStep);
  }, [currentStep]);

  return (
    <div className="flex items-center gap-4">
      {LISTING_STEPS.map((step, index: number) => {
        return (
          <div
            key={index}
            className={`flex items-center transition-all duration-200 gap-4 ${
              currentStep < index
                ? "opacity-50 text-textColor-soft"
                : currentStep === index
                ? "text-textColor font-semibold"
                : "text-textColor-soft"
            } ${type !== HOUSING_TYPE_ID && step === "details" && "hidden"} ${
              maxStep >= index ? "block" : "hidden"
            }`}
          >
            {index !== 0 && <RiArrowRightDoubleFill />}
            <button
              className={`capitalize transition-all duration-200 ${
                !(disabled && currentStep < index) &&
                "hover:text-textColor cursor-pointer"
              }`}
              disabled={maxStep < index || (disabled && currentStep < index)}
              onClick={() => setCurrentStep(index)}
            >
              {step}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
