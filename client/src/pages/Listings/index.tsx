import { FC } from "react";
import { ApolloError, useQuery } from "@apollo/client";

import { Estate } from "@/types";
import { useAuthStore } from "@/store/authStore";
import { Feed, FeedLoader } from "@/components/common";
import { GET_ESTATES_BY_SELLER } from "@/graphql/queries/estates";

type RendererProps = {
  loading: boolean;
  error?: ApolloError;
  estates: Estate[];
};

const Listings = () => {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery(GET_ESTATES_BY_SELLER, {
    variables: { sellerId: user?._id },
  });

  return (
    <div className="min-h-[44vh] my-8">
      <h1 className="text-3xl font-semibold mb-4">
        Your Listings ({data?.estatesBySeller.length ?? 0}){" "}
      </h1>
      <ContentRenderer
        loading={loading}
        error={error}
        estates={data?.estatesBySeller}
      />
    </div>
  );
};

const ContentRenderer: FC<RendererProps> = ({ loading, error, estates }) => {
  if (loading) return <FeedLoader type="detailed" />;

  if (error)
    return (
      <p className="text-2xl">
        Whoops! An error occurred while fetching your listing.
      </p>
    );

  if (estates.length > 0) return <Feed estates={estates} />;

  return <p className="text-2xl">You don't have any listings yet.</p>;
};

export default Listings;
