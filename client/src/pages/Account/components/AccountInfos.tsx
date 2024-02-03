import { FC } from "react";
import moment from "moment";

import { ProfileImage } from ".";

type Props = {
  name: string;
  createdAt: string;
  image: string;
};

const AccountInfos: FC<Props> = ({ name, createdAt, image }) => {
  return (
    <section className="bg-bgColor-soft rounded-lg p-4 flex flex-col w-full">
      <h1 className="text-3xl font-semibold mb-4">Account Informations</h1>
      <div className="flex gap-8 flex-col sm:flex-row sm:items-center items-start">
        <ProfileImage image={image} />
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xl text-textColor font-semibold">Fullname</p>
            <p className="text-xl">{name}</p>
          </div>
          <div>
            <p className="text-xl text-textColor font-semibold">Join Date</p>
            <p className="text-xl">
              {moment(Number(createdAt)).format("DD.MM.YYYY")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountInfos;
