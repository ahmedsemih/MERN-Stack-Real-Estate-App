import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";

import { User } from "@/types";
import { Select } from "@/components/form";
import { TableError, TableLoader } from ".";
import { GET_USERS } from "@/graphql/queries/users";
import { CHANGE_ROLE } from "@/graphql/mutations/users";

const UserTable = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  
  const [changeRole, { loading: updateLoading }] = useMutation(CHANGE_ROLE, {
    onCompleted: () => toast.success("User role changed successfully."),
    onError: () => toast.error("User role couldn't be changed."),
  });

  const handleRole = (userId: string, role: string) => {
    changeRole({ variables: { _id: userId, role } });
  };

  if (loading) return <TableLoader />;

  if (error)
    return (
      <TableError message="Whoops! An error occurred while fetching users." />
    );

  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4 w-full h-[90vh] md:h-[50vh] overflow-auto">
      <table className="table-auto w-full min-w-[800px]">
        <thead className="text-2xl">
          <tr className="text-start">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data?.users.map((user: User) => (
            <tr className="border-t border-borderColor" key={user._id}>
              <td className="p-2">{user._id}</td>
              <td className="p-2 border-l border-borderColor">{user.name}</td>
              <td className="p-2 border-l border-borderColor">{user.email}</td>
              <td className="p-2 border-l border-borderColor">{user.phone}</td>
              <td className="p-2 border-l border-borderColor">
                <Select
                  label=""
                  defaultValue={user.role}
                  options={[
                    { name: "User", value: "user" },
                    { name: "Admin", value: "admin" },
                    { name: "Banned", value: "banned" },
                  ]}
                  onChange={(e) => handleRole(user._id, e.currentTarget.value)}
                  disabled={updateLoading}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
