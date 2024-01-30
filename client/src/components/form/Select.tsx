import { FieldError } from "react-hook-form";
import { FC, FormEvent, forwardRef } from "react";

type Props = {
  label: string;
  defaultValue?: string;
  onChange?(e: FormEvent<HTMLSelectElement>): void;
  options: {
    name: string;
    value: string;
  }[];
  error?: FieldError;
  placeholder?: string;
  disabled?: boolean;
};

const Select: FC<Props> = forwardRef(({ label, defaultValue, options, error, placeholder, disabled, onChange, ...props }, ref) => {
  return (
      <div className="w-full">
        <label className="text-xl font-semibold block">{label}</label>
        <select
          onChange={onChange}
          className={`bg-borderColor text-textColor p-2 rounded-lg  border-2 capitalize w-full disabled:opacity-70 ${
            !error ? "border-borderColor" : "border-primary"
          }`}
          // @ts-expect-error type diff
          ref={ref}
          defaultValue={defaultValue ?? "placeholder"}
          disabled={options.length === 0 || disabled}
          {...props}
        >
          {placeholder && (
            <option value="placeholder" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.length > 0 ? (
            options.map((option) => (
              <option className="capitalize" key={option.value} value={option.value}>
                {option.name}
              </option>
            ))
          ) : (
            <option className="capitalize" value={0}>
              There is nothing for choose
            </option>
          )}
        </select>
        {
          error && <p>{error.message}</p>
        }
      </div>
    );
  }
);

export default Select;
