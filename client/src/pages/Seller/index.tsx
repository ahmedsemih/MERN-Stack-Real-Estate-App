import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Info } from "./components";
import { Error, FeedRenderer } from "@/components/common";
import { GET_USER } from "@/graphql/queries/users";
import { GET_ESTATES_BY_SELLER } from "@/graphql/queries/estates";

const LISTING_PER_PAGE = 12;

const SellerPage = () => {
  const params = useParams();
  const [page, setPage] = useState<number>(0);

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, { variables: { _id: params.id } });

  const {
    data: estateData,
    loading: estateLoading,
    error: estateError,
  } = useQuery(GET_ESTATES_BY_SELLER, {
    variables: {
      sellerId: params.id,
      limit: LISTING_PER_PAGE,
      offset: LISTING_PER_PAGE * page,
    },
  });

  if (userError) 
  return <Error message="Whoops! An error occurred while fetching seller informations." />

  return (
    <div className="flex flex-col mt-8 w-full gap-4">
      <Info user={userData?.user} loading={userLoading} />
      <div className="py-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold capitalize">
          {userData?.user.name}'s Listings
          {` (${estateData?.estatesBySeller.length ?? 0})`}
        </h1>
        <FeedRenderer
          cardType="grid"
          estates={estateData?.estatesBySeller}
          loading={estateLoading}
          infiniteScroll={{ page, setPage, listingPerPage: LISTING_PER_PAGE }}
          error={estateError}
          errorMessage="Whoops! An error occurred while fetching listings of this seller."
          emptyMessage="This seller has no listings yet."
        />
      </div>
    </div>
  );
};

export default SellerPage;
