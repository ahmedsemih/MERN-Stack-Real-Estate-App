import { useQuery } from "@apollo/client";

import { useAuthStore } from "@/store/authStore";
import { FeedRenderer } from "@/components/common";
import { GET_ESTATES_BY_SELLER } from "@/graphql/queries/estates";

const ListingsPage = () => {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery(GET_ESTATES_BY_SELLER, {
    variables: { sellerId: user?._id },
    fetchPolicy: 'no-cache'
  });

  return (
    <div className="min-h-[44vh] my-8">
      <h1 className="text-3xl font-semibold mb-4">
        Your Listings ({data?.estatesBySeller.length ?? 0})
      </h1>
      <FeedRenderer
        cardType="grid"
        loading={loading}
        error={error}
        errorMessage="Whoops! An error occurred while fetching your listing."
        emptyMessage="You don't have any listings yet."
        estates={data?.estatesBySeller}
      />
    </div>
  );
};

export default ListingsPage;
