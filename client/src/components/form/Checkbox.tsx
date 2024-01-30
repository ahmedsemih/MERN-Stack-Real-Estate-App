import { FC, forwardRef } from "react";

type Props = {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  layout: "checkbox-first" | "label-first";
};

const Checkbox: FC<Props> = forwardRef(
  ({ label, layout, defaultChecked, disabled, ...props }, ref) => {
    return (
      <label
        className={`text-lg flex items-start flex-nowrap w-full gap-2 cursor-pointer text-textColor ${
          layout === "label-first" && "justify-between"
        }`}
      >
        {layout === "label-first" && <span>{label}</span>}
        <input
          // @ts-expect-error type diff
          ref={ref}
          type="checkbox"
          disabled={disabled}
          defaultChecked={defaultChecked}
          className="w-6 h-6 min-w-6 min-h-6 bg-borderColor accent-primary focus:ring-primary hover:accent-secondary cursor-pointer border-none outline-none rounded-lg"
          {...props}
        />
        {layout === "checkbox-first" && <span>{label}</span>}
      </label>
    );
  }
);

export default Checkbox;
