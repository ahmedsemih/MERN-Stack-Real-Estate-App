import { BiLoaderAlt } from "react-icons/bi";
import { Dispatch, FC, SetStateAction } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Estate } from "@/types";
import { GridCard, DetailedCard } from ".";

type Props = {
  estates: Estate[];
  isGrid?: boolean;
  infiniteScroll?: {
    listingPerPage: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
  };
};

const Feed: FC<Props> = ({ estates, isGrid, infiniteScroll }) => {
  if (infiniteScroll) {
    const { listingPerPage, page, setPage } = infiniteScroll;

    return (
      <InfiniteScroll
        className={`h-full w-full py-4 ${
          isGrid
            ? "grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
            : "flex flex-col gap-4"
        }`}
        dataLength={estates.length}
        hasMore={estates.length <= listingPerPage && page !== 0}
        next={() => setPage((prev) => prev + 1)}
        loader={<Loader />}
      >
        {estates?.map((estate: Estate) => {
          return isGrid ? (
            <GridCard key={estate._id} estate={estate} />
          ) : (
            <DetailedCard key={estate._id} estate={estate} />
          );
        })}
      </InfiniteScroll>
    );
  }

  return (
    <div
      className={`h-full w-full py-4 ${
        isGrid
          ? "grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
          : "flex flex-col gap-4"
      }`}
    >
      {estates?.map((estate: Estate) => {
        return isGrid ? (
          <GridCard key={estate._id} estate={estate} />
        ) : (
          <DetailedCard key={estate._id} estate={estate} />
        );
      })}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-full col-span-4 mt-4">
      <BiLoaderAlt className="w-8 h-8 text-textColor-soft mx-auto animate-spin" />
    </div>
  );
};

export default Feed;
