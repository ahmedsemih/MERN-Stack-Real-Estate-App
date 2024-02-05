import { FC } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { BasicButton } from "@/components/ui";
import { UPDATE_ESTATE } from "@/graphql/mutations/estates";

type Props = {
  _id: string;
  saveLoading?: boolean;
};

const Buttons: FC<Props> = ({ _id, saveLoading }) => {
  const navigate = useNavigate();
  const [deleteEstate, { loading: deleteLoading }] = useMutation(
    UPDATE_ESTATE,
    {
      onCompleted: () => {
        toast.success("Listing deleted successfully.");
        setTimeout(() => {
          navigate("/listings");
        }, 2000);
      },
      onError: () => toast.error("Listing couldn't be deleted."),
    }
  );

  const handleDelete = () => {
    deleteEstate({ variables: { _id, status: false } });
  };

  return (
    <div className="w-full md:w-1/2 ml-auto flex sm:flex-row flex-col gap-2 md:pl-2">
      <BasicButton
        type="submit"
        radius="small"
        variant="contained"
        disabled={deleteLoading}
        loading={saveLoading}
        className="w-full"
      >
        Save
      </BasicButton>
      <BasicButton
        onClick={handleDelete}
        type="button"
        radius="small"
        variant="outlined"
        loading={deleteLoading}
        disabled={saveLoading}
        className="w-full"
      >
        Delete
      </BasicButton>
    </div>
  );
};

export default Buttons;
