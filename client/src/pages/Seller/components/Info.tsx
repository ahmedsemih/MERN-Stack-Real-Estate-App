import { FC } from "react";
import moment from "moment";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdVerified } from "react-icons/md";

import { User } from "@/types";
import InfoLoader from "./InfoLoader";

type Props = {
  user: User;
  loading?: boolean;
};

const Info: FC<Props> = ({ user, loading }) => {
  if (loading) return <InfoLoader />

  return (
    <section className="w-full rounded-lg bg-bgColor-soft border border-borderColor px-4 py-8 flex-col gap-4">
      <div className="flex items-center gap-4 flex-col">
        <img
          className="rounded-full border border-borderColor w-[128px] h-[128px] object-cover content-center "
          src={user.image}
          alt={user.name}
          width={100}
          height={100}
        />
        <div className="mb-4">
          <p className="text-2xl font-semibold text-center">{user.name}</p>
          <p className="text-sm text-textColor-soft text-center">
            {moment(Number(user.createdAt)).format("DD.MM.YYYY")}
          </p>
          {user.verified && (
            <div className="flex items-center gap-1 text-lg mt-1">
              <MdVerified />
              <span className="capitalize">verified seller</span>
            </div>
          )}
        </div>
      </div>
      <hr className="border-borderColor mt-2 mb-6" />
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-3">
          <MdEmail />
          <p className="text-xl text-center">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt />
          <p className="text-xl text-center">{user.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
