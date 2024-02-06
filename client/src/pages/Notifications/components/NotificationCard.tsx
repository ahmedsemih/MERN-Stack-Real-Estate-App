import {
    LazyQueryExecFunction,
    OperationVariables,
    useMutation,
} from "@apollo/client";
import moment from "moment";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FC, MouseEvent, useEffect } from "react";


import { Notification } from "@/types";
import generateSlug from "@/utils/generateSlug";
import { DELETE_NOTIFICATION } from "@/graphql/mutations/notifications";

type Props = {
  notification: Notification;
  lastSeen: string;
  fetchNotifications: LazyQueryExecFunction<unknown, OperationVariables>;
};

const NotificationCard: FC<Props> = ({
  notification,
  lastSeen,
  fetchNotifications,
}) => {
  const navigate = useNavigate();
  const [deleteNotification, { loading }] = useMutation(DELETE_NOTIFICATION, {
    onCompleted: () => fetchNotifications(),
    onError: () => toast.error("Notification couldn't be deleted."),
  });

  useEffect(() => {
    if (
      Number(lastSeen) >
      Number(notification.createdAt) + 1000 * 60 * 60 * 24 * 7
    ) {
      deleteNotification({ variables: { _id: notification._id } });
    }
  }, []);

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    deleteNotification({ variables: { _id: notification._id } });
  };

  const handleNavigate = () => {
    if (loading) return;

    navigate(
      `/estate/${generateSlug(notification.estate.title)}/${
        notification.estate._id
      }`
    );
  };

  return (
    <div
      onClick={handleNavigate}
      className={`cursor-pointer hover:opacity-100 transition-all duration-200 rounded-lg bg-bgColor-soft border border-borderColor p-4 w-full flex flex-col gap-4 ${
        Number(lastSeen) < Number(notification.createdAt)
          ? "opacity-100"
          : "opacity-70"
      }`}
    >
      <div className="flex sm:flex-row flex-col-reverse items-start justify-between gap-4">
        <p className="md:text-2xl sm:text-xl text-lg font-semibold">
          {notification.message}
        </p>
        <button
          className="text-4xl hover:text-textColor-soft hover:scale-110 transition-all duration-200 ml-auto"
          onClick={handleDelete}
          disabled={loading}
        >
          <MdClose />
        </button>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between gap-2  md:text-xl text-lg">
        <p className="hover:underline transition-all duration-200 md:block hidden">
          <span className="block md:inline">Listing: </span>
          {notification.estate.title}
        </p>
        <p className="ml-auto">
          {moment(Number(notification.createdAt)).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
