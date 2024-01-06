import { FC, ReactNode } from "react";
import Loader from '/assets/rolling-loader.svg';

type Props = {
  variant?: "contained" | "outlined";
  radius?: "small" | "large";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading: boolean;
  children: ReactNode;
  onClick?: VoidFunction;
};

const BasicButton: FC<Props> = ({
  variant = "contained",
  radius = "large",
  type,
  className,
  disabled,
  loading,
  children,
  onClick,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || loading}
      className={
        `min-h-[40px] font-semibold py-2 px-4 transition-all duration-200 flex items-center justify-center hover:bg-secondary outline-1 focus:bg-secondary outline-none disabled:opacity-80 disabled:bg-secondary
          ${
            variant === "contained"
              ? `bg-primary text-white border-none`
              : `border-2 border-primary bg-transparent hover:border-secondary text-primary hover:text-white`
          } 
          ${radius === "small" ? "rounded-lg " : "rounded-2xl "} ` + className
      }
    >
      {loading ? <img className="w-6" src={Loader} alt="loader" /> : children}
    </button>
  );
};

export default BasicButton;
