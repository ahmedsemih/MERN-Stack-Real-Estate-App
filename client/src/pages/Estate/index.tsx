import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import {
  Carousel,
  Description,
  Details,
  Info,
  Loader,
  Location,
  SellerInfo,
} from "./components";
import { Error } from "@/components/common";
import { GET_ESTATE } from "@/graphql/queries/estates";

const EstatePage = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_ESTATE, {
    variables: { _id: params.id },
  });

  if (loading) 
  return <Loader />;

  if (error)
    return <Error message="Whoops! An error occurred while fetching this listing." />

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

export default EstatePage;
