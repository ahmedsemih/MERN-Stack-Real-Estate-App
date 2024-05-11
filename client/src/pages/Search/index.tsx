import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { Estate } from "@/types";
import {
  GET_ESTATES_BY_FILTER,
  GET_ESTATES_BY_SEARCH,
} from "@/graphql/queries/estates";
import { Filters, SortBar } from "./components";
import { FeedRenderer } from "@/components/common";

const LISTING_PER_PAGE = 12;

const SearchPage = () => {
  const [searchParams] = useSearchParams({ sortBy: "date-desc" });
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [fetchEstates, { error: filterError }] = useLazyQuery(
    GET_ESTATES_BY_FILTER,
    {
      onCompleted: ({ estatesByFilter }) => {
        page === 0 && setEstates([]);

        setHasMore(estatesByFilter === LISTING_PER_PAGE);
        setEstates((prev) => [...prev, ...estatesByFilter]);
        setLoading(false);
      },
    }
  );

  const [fetchEstatesBySearch, { error: searchError }] = useLazyQuery(
    GET_ESTATES_BY_SEARCH,
    {
      onCompleted: ({ estatesBySearch }) => {
        page === 0 && setEstates([]);

        setHasMore(estatesBySearch?.length === LISTING_PER_PAGE);
        setEstates((prev) => [...prev, ...estatesBySearch]);
        setLoading(false);
      },
    }
  );

  useEffect(() => {
    const search = searchParams.get("q");
    const sort = searchParams.get("sortBy");
    const splittedSort = sort?.split("-");

    if (page === 0)
    setLoading(true);
    
    if (search)
      fetchEstatesBySearch({
        variables: {
          search,
          sortBy: splittedSort![0],
          order: splittedSort![1],
          limit: LISTING_PER_PAGE,
          offset: LISTING_PER_PAGE * page,
        },
      });
    else
      fetchEstates({
        variables: {
          category: searchParams.get("category") || "sale",
          type: searchParams.get("type") || undefined,
          detailedType: searchParams.get("detailedType") || undefined,
          province: searchParams.get("province") || undefined,
          district: searchParams.get("district") || undefined,
          minPrice: Number(searchParams.get("minPrice")) || 0,
          maxPrice: Number(searchParams.get("maxPrice")) || 1000000000,
          minSize: Number(searchParams.get("minSize")) || 0,
          maxSize: Number(searchParams.get("maxSize")) || 1000000000,
          sortBy: splittedSort![0] || "date",
          order: splittedSort![1] || "desc",
          limit: LISTING_PER_PAGE,
          offset: LISTING_PER_PAGE * page,
        },
      });

  }, [searchParams, page, estates.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-4">
      <div className="col-span-1 w-full h-fit sticky top-4 z-40">
        <Filters setEstates={setEstates} />
      </div>
      <div className="col-span-2 flex flex-col">
        <SortBar />
        <FeedRenderer
          cardType="detailed"
          estates={estates}
          loading={loading}
          error={filterError || searchError}
          errorMessage="Whoops! An error occurred while fetching estates."
          emptyMessage="We couldn't find any estates matching with your search."
          infiniteScroll={{ hasMore, setPage }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
