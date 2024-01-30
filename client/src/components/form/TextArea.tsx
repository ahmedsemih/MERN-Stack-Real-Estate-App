import { FC, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  className?: string;
  error?: FieldError;
};

const TextArea: FC<Props> = forwardRef(
  ({ label, placeholder, className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="text-xl text-textColor font-semibold">{label}</label>
        <textarea
          // @ts-expect-error type diff
          ref={ref}
          placeholder={placeholder}
          className={
            `p-1 resize-none w-full min-h-20 bg-borderColor text-textColor overflow-y-auto text-xl border-2 rounded-lg selection:text-borderColor selection:bg-bgColor-soft outline-none ${
              error ? "border-primary" : "border-borderColor"
            } ` + className
          }
          {...props}
        ></textarea>
        <p className="text-primary">{error?.message}</p>
      </div>
    );
  }
);

export default TextArea;
