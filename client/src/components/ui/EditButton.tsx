import { FC } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";

type Props = {
    sellerId: string;
    estateId: string;
    className?: string;
}

const EditButton:FC<Props> = ({ sellerId, estateId, className }) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const handleClick = () => {
    navigate('/edit', { state: { estateId } });
  };

  if (user?._id === sellerId)
    return (
      <button
        onClick={handleClick}
        className={
          "absolute p-2 bg-bgColor-soft hover:text-textColor-soft top-2 left-2 z-30 text-4xl rounded-full transition-all duration-200 " +
          className
        }
      >
        <MdEdit />
      </button>
    );
};

export default EditButton;
