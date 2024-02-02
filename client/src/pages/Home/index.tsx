import { useState } from "react";
import { useQuery } from "@apollo/client";

import { Estate } from "@/types";
import WelcomeSection from "./components/Welcome";
import { FeedRenderer } from "@/components/common";
import { GET_ESTATES_SORTED_BY_DATE } from "@/graphql/queries/estates";

const LISTING_PER_PAGE = 12;

const HomePage = () => {
  const [page, setPage] = useState<number>(0);
  const [estates, setEstates] = useState<Estate[]>([]);

  const { loading, error } = useQuery(GET_ESTATES_SORTED_BY_DATE, {
    variables: {
      desc: true,
      limit: LISTING_PER_PAGE,
      offset: page * LISTING_PER_PAGE,
    },
    onCompleted: ({ estatesSortedByDate }) => {
      setEstates((prev) => [...prev, ...estatesSortedByDate]);
    },
  });

  return (
    <div>
      <WelcomeSection />
      <div className="lg:h-[calc(66.66vh-96px)] h-[calc(100vh-80px)] w-full"></div>
      <h2 className="text-3xl mt-8 mb-2 font-semibold">Newest Listings</h2>
      <FeedRenderer
        cardType="grid"
        estates={estates}
        loading={loading}
        error={error}
        errorMessage="Whoops! An error occurred while fetching the listings."
        infiniteScroll={{ listingPerPage: LISTING_PER_PAGE, page, setPage }}
      />
    </div>
  );
};

export default HomePage;
