import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

import {
  Carousel,
  Description,
  Details,
  Info,
  Location,
  SellerInfo,
} from "./components";
import { GET_ESTATE } from "@/graphql/queries/estates";

const Estate = () => {
  const location = useLocation();

  const { data, loading, error } = useQuery(GET_ESTATE, {
    variables: { _id: location.state._id },
  });

  if (loading) return <div>
    <div></div>
    <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="col-span-1 bg-bgColor-soft rounded-lg p-4 border border-borderColor md:h-[440px] flex flex-col justify-between">

        </div>
      </div>
  </div>;
  if (error) return <div>Error</div>;

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
