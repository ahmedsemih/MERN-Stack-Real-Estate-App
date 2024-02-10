import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Estate } from "@/types";
import { Info } from "./components";
import { GET_USER } from "@/graphql/queries/users";
import { Error, FeedRenderer } from "@/components/common";
import { GET_ESTATES_BY_SELLER } from "@/graphql/queries/estates";

const LISTING_PER_PAGE = 12;

const SellerPage = () => {
  const params = useParams();
  const [page, setPage] = useState<number>(0);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, { variables: { _id: params.id } });

  const {
    error: estateError,
  } = useQuery(GET_ESTATES_BY_SELLER, {
    variables: {
      sellerId: params.id,
      limit: LISTING_PER_PAGE,
      offset: LISTING_PER_PAGE * page,
    }, onCompleted: ({ estatesBySeller }) => {
      setEstates((prev) => [...prev, ...estatesBySeller]);
      setHasMore(estatesBySeller?.length === LISTING_PER_PAGE);
      page === 0 && setFirstLoading(false);
    }
  });

  if (userError) 
  return <Error message="Whoops! An error occurred while fetching seller informations." />

  return (
    <div className="flex flex-col mt-8 w-full gap-4">
      <Info user={userData?.user} loading={userLoading} />
      <div className="py-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold capitalize">
          {userData?.user.name}'s Listings
          {` (${estates.length ?? 0})`}
        </h1>
        <FeedRenderer
          cardType="grid"
          estates={estates}
          loading={firstLoading}
          infiniteScroll={{ setPage, hasMore }}
          error={estateError}
          errorMessage="Whoops! An error occurred while fetching listings of this seller."
          emptyMessage="This seller has no listings yet."
        />
      </div>
    </div>
  );
};

export default SellerPage;
