import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { BasicButton } from "@/components/ui";
import { HOUSING_TYPE_ID } from "@/utils/constants";

type Props = {
  type: string | undefined;
  step: number;
  disabled: boolean;
  loading?: boolean;
  setStep: Dispatch<SetStateAction<number>>;
};

const Buttons: FC<Props> = ({ type, disabled, loading, step, setStep }) => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);

  useEffect(() => {
    if (step > 3) {
      setDisableSubmit(true);
      setTimeout(() => setDisableSubmit(false), 3000);
    }
  }, [step]);

  const handleNext = () => {
    if (step === 2 && type !== HOUSING_TYPE_ID)
      return setStep((prev) => prev + 2);

    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step === 4 && type !== HOUSING_TYPE_ID)
      return setStep((prev) => prev - 2);

    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-between mt-4 md:mt-8">
      <BasicButton
        variant="contained"
        radius="small"
        type="button"
        className={`w-28 ${step === 0 && "invisible"}`}
        onClick={handlePrevious}
      >
        <FaArrowLeft className="mr-2" />
        Back
      </BasicButton>
      {step > 3 ? (
        <BasicButton
          variant="contained"
          radius="small"
          type="submit"
          loading={loading}
          disabled={disableSubmit}
          className="w-28"
        >
          Submit
        </BasicButton>
      ) : (
        <BasicButton
          variant="contained"
          radius="small"
          type="button"
          disabled={disabled}
          className="w-28"
          onClick={handleNext}
        >
          Next
          <FaArrowRight className="ml-2" />
        </BasicButton>
      )}
    </div>
  );
};

export default Buttons;
