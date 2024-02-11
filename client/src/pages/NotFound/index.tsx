import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="h-[52vh] flex justify-center items-center">
      <div>
        <h1 className="text-5xl mb-4">404 - Not Found</h1>
        <p className="text-2xl mb-16">
          Sorry, the page you were looking for was not found.
        </p>
        <Link
          to="/"
          className="flex items-center text-2xl mt-4 gap-4 hover:text-primary transition-all duration-200"
        >
          <MdArrowBack />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
