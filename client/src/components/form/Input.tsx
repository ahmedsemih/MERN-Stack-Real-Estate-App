import { FieldError } from "react-hook-form";
import { FC, forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  label: string;
  type: "email" | "text" | "password" | "number" | "tel";
  placeholder: string;
  className?: string;
  error?: FieldError;
};

const Input: FC<Props> = forwardRef(
  ({ label, type, placeholder, className, error, ...props }, ref) => {
    const [passType, setPassType] = useState("password");

    const togglePassType = () => {
      setPassType((prev) => (prev === "password" ? "text" : "password"));
    };

    if (type === "password")
      return (
        <div className="w-full">
          <label className="text-xl text-textColor-soft">{label}</label>
          <div className="w-full rounded-lg relative">
            <input
              ref={ref}
              className={
                `w-full rounded-lg p-1 text-xl indent-2 border-2 outline-none bg-borderColor text-textColor selection:text-borderColor selection:bg-bgColor-soft ${
                  error ? "border-primary" : "border-borderColor"
                } ` + className
              }
              type={passType}
              placeholder={placeholder}
              {...props}
            />
            <button
              type="button"
              onClick={togglePassType}
              className="absolute right-3 text-2xl text-textColor-soft top-2 transition-all duration-200 opacity-70 hover:opacity-100"
            >
              {passType === "password" ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-primary">{error?.message}</p>
        </div>
      );

    return (
      <div className="w-full">
        <label className="text-xl text-textColor-soft">{label}</label>
        <input
          ref={ref}
          className={
            `w-full rounded-lg p-1 text-xl indent-2 border-2 outline-none bg-borderColor text-textColor selection:text-borderColor selection:bg-bgColor-soft ${
              error ? "border-primary" : "border-borderColor"
            } ` + className
          }
          type={type}
          placeholder={placeholder}
          {...props}
        />
        <p className="text-primary">{error?.message}</p>
      </div>
    );
  }
);

export default Input;
