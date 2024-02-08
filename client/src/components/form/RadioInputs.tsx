import { FC, forwardRef } from "react";

type Props = {
  label?: string;
  options: { name: string; value: string }[];
};

const Radio: FC<Props> = forwardRef(({ label, options, ...props }, ref) => {
  return (
    <div className="w-full">
      <p className="text-xl font-semibold">{label}</p>
      <div className="flex overflow-hidden flex-wrap lg:flex-row md:flex-col sm:flex-row flex-col justify-between gap-4">
        {options.map((option) => (
          <label key={option.value} className="text-lg capitalize flex items-center gap-2">
            <input
              // @ts-expect-error type diff
              ref={ref}
              type="radio"
              className="checked:accent-primary w-6 h-6"
              value={option.value}
              {...props}
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
});

export default Radio;
