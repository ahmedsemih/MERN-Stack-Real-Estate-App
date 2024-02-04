import { useQuery } from "@apollo/client";

import { useAuthStore } from "@/store/authStore";
import { FeedRenderer } from "@/components/common";
import { GET_FAVORITES } from "@/graphql/queries/users";

const FavoritesPage = () => {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery(GET_FAVORITES, {
    variables: { _id: user?._id }, fetchPolicy: 'no-cache'
  });

  return (
    <div className="min-h-[44vh] my-8">
      <h1 className="text-3xl font-semibold mb-4">
        Your Favorites ({data?.favorites.length ?? 0})
      </h1>
      <FeedRenderer
        cardType="grid"
        loading={loading}
        error={error}
        errorMessage="Whoops! An error occurred while fetching your favorites."
        emptyMessage="You don't have any favorite yet."
        estates={data?.favorites}
      />
    </div>
  );
};

export default FavoritesPage;
