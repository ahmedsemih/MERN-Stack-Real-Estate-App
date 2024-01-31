import { useQuery } from "@apollo/client";
import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import {
  Carousel,
  Description,
  Details,
  Info,
  Loader,
  Location,
  SellerInfo,
} from "./components";
import { GET_ESTATE } from "@/graphql/queries/estates";

const Estate = () => {
  const location = useLocation();

  const { data, loading, error } = useQuery(GET_ESTATE, {
    variables: { _id: location.state._id },
  });

  if (loading) 
  return <Loader />;

  if (error)
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <div>
          <p className="text-2xl">
            Whoops! An error occurred while fetching this listing.
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

  return (
    <div>
      <Carousel images={data.estate.images} title={data.estate.title} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4">
          <Info estate={data.estate} />
          <Description description={data.estate.description} />
          {data.estate.details && <Details details={data.estate.details} />}
          <Location location={data.estate.location} />
        </div>
        <SellerInfo seller={data.estate.seller} />
      </div>
    </div>
  );
};

export default Estate;
