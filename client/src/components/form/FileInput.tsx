import { ChangeEvent, FC, forwardRef, useRef, useState } from "react";
import { FieldError, Merge, UseFormSetValue } from "react-hook-form";

import { BasicButton } from "../ui";
import { BaseInputs } from "@/pages/CreateListing";

type Props = {
  label: string;
  buttonText?: string;
  withInfo?: boolean;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  setValue?: UseFormSetValue<BaseInputs>;
};

const FileInput: FC<Props> = forwardRef(
  ({ label, buttonText, error, withInfo, setValue, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>();
    const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const images = event.target.files;

      if (!images) return;

      setSelectedImages(images);
      setValue && setValue("images", images);
    };

    return (
      <div className="w-full">
        <label className="text-xl text-textColor font-semibold">{label}</label>
        <div
          className={`flex items-center justify-between gap-2 rounded-lg p-1 border w-full ${
            withInfo ? "border" : "border-none"
          } ${error ? "border-primary" : "border-borderColor"}`}
        >
          <BasicButton
            onClick={handleClick}
            type="button"
            radius="small"
            variant="outlined"
          >
            {buttonText || "Choose Images"}
          </BasicButton>
          {withInfo && (
            <p
              className={`font-semibold mx-auto hover:underline transition-all duration-200 ${
                error ? "text-primary" : "text-textColor-soft"
              }`}
            >
              {selectedImages?.length ?? 0} Images Selected
            </p>
          )}
          <input
            // @ts-expect-error type diff
            ref={inputRef}
            onChange={handleChange}
            hidden
            accept="image/*"
            multiple
            type="file"
          />
          <input
            // @ts-expect-error type diff
            ref={ref}
            type="file"
            hidden
            {...props}
          />
        </div>
        <p className="text-primary">{error?.message}</p>
      </div>
    );
  }
);

export default FileInput;
