import { FC } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

type Props = {
  message?: string;
  hideLink?: boolean;
};

const Error: FC<Props> = ({ message, hideLink }) => {
  return (
    <div className="h-[52vh] flex justify-center items-center">
      <div>
        <p className="text-2xl">
          {message ?? "Whoops! An error occurred."}
        </p>
        {!hideLink && (
          <Link
            to="/"
            className="flex items-center text-2xl mt-4 gap-4 hover:text-primary transition-all duration-200"
          >
            <MdArrowBack />
            <span>Back to Home</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Error;
