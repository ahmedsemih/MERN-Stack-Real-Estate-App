import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";

import { Estate } from "@/types";
import { TableError, TableLoader } from ".";
import { BasicButton } from "@/components/ui";
import formatPrice from "@/utils/formatPrice";
import { GET_ESTATES } from "@/graphql/queries/estates";
import { UPDATE_ESTATE } from "@/graphql/mutations/estates";

const EstateTable = () => {
  const { data, loading, error } = useQuery(GET_ESTATES);
  
  const [changeStatus, { loading: updateLoading }] = useMutation(
    UPDATE_ESTATE,
    {
      onCompleted: () => toast.success("Estate deleted successfully."),
      onError: () => toast.error("Estate couldn't be deleted."),
    }
  );

  const handleDelete = (estateId: string) => {
    changeStatus({ variables: { _id: estateId, status: false } });
  };

  if (loading) return <TableLoader />;

  if (error)
    return (
      <TableError message="Whoops! An error occurred while fetching estates." />
    );

  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4 w-full h-[90vh] md:h-[50vh] overflow-auto">
      <table className="table-auto w-full min-w-[1000px]">
        <thead className="text-2xl">
          <tr className="text-start py-2">
            <th>ID</th>
            <th>Title</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Type</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.estates.map((estate: Estate) => (
            <tr className="border-t border-borderColor" key={estate._id}>
              <td className="p-2">{estate._id}</td>
              <td className="p-2 border-l border-borderColor">
                {estate.title}
              </td>
              <td
                title={estate.seller._id}
                className="p-2 border-l border-borderColor"
              >
                {estate.seller.name}
              </td>
              <td className="p-2 border-l border-borderColor">
                {estate.category}
              </td>
              <td className="p-2 border-l border-borderColor">
                {estate.detailedType.name}
              </td>
              <td className="p-2 border-l border-borderColor">
                {formatPrice(estate.price)}
              </td>
              <td className="p-2 border-l border-borderColor">
                <BasicButton
                  onClick={() => handleDelete(estate._id)}
                  loading={updateLoading}
                  radius="small"
                >
                  Delete
                </BasicButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstateTable;
