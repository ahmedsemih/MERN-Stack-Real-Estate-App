import Cookies from "js-cookie";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { Notification } from "@/types";
import { Error } from "@/components/common";
import { useAuthStore } from "@/store/authStore";
import { Loader, NotificationCard } from "./components";
import { GET_NOTIFICATIONS_BY_USER } from "@/graphql/queries/notifications";

const NotificationPage = () => {
  const user = useAuthStore((state) => state.user);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [fetchNotifications, { data, loading, error }] = useLazyQuery(
    GET_NOTIFICATIONS_BY_USER,
    {
      variables: { userId: user?._id },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    fetchNotifications();
    setIsFirst(false);
    return () => {
      if (!isFirst)
        Cookies.set("lastSeen", Date.now().toString(), {
          sameSite: "lax",
          expires: new Date("Fri, 31 Dec 9999 21:10:10 GMT"),
        });
    };
  }, [isFirst]);

  if (loading && isFirst) return <Loader />;

  if (error)
    return (
      <Error message="Whoops! An error occurred while fetching your notifications." />
    );

  return (
    <div className="w-full min-h-[48vh] flex flex-col gap-4 my-8">
      <h1 className="text-3xl font-semibold">
        Notifications {`(${data?.notificationsByUser.length ?? 0})`}
      </h1>
      {data?.notificationsByUser.length > 0 ? (
        data?.notificationsByUser.map((notification: Notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
            fetchNotifications={fetchNotifications}
            lastSeen={Cookies.get("lastSeen") || "1"}
          />
        ))
      ) : (
        <p className="text-xl">There are no notifications to see.</p>
      )}
    </div>
  );
};

export default NotificationPage;
