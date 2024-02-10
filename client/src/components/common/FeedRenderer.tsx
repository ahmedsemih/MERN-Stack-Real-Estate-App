import { ApolloError } from "@apollo/client";
import { Dispatch, FC, SetStateAction } from "react";

import { Estate } from "@/types";
import { Feed, FeedLoader } from ".";

type RendererProps = {
  cardType: "grid" | "detailed";
  loading: boolean;
  error?: ApolloError;
  errorMessage?: string;
  emptyMessage?: string;
  estates: Estate[];
  infiniteScroll?: {
    hasMore: boolean;
    setPage: Dispatch<SetStateAction<number>>;
  };
};

const FeedRenderer: FC<RendererProps> = ({
  cardType,
  loading,
  error,
  errorMessage,
  emptyMessage,
  estates,
  infiniteScroll,
}) => {
  if (loading) return <FeedLoader type={cardType} />;

  if (error)
    return (
      <p className="text-2xl mt-4">{errorMessage ?? "Whoops! An error occurred."}</p>
    );

  if (estates.length > 0)
    return (
      <Feed
        infiniteScroll={infiniteScroll}
        estates={estates}
        isGrid={cardType === "grid"}
      />
    );

  return <p className="text-2xl  mt-4">{emptyMessage ?? "There is no listing."}</p>;
};

export default FeedRenderer;
