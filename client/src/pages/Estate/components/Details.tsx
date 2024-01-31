import { FC } from "react";
import { MdClose, MdCheck } from "react-icons/md";

import { Details } from "@/types";

type Props = {
  details: Details;
};

const Details: FC<Props> = ({ details }) => {
  return (
    <section className="bg-bgColor-soft rounded-lg border border-borderColor p-4">
      <h3 className="text-2xl font-semibold mb-3">Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {Object.entries(details).map(([key, value]) => {
          const formattedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
          return typeof value === "boolean" ? (
            <div key={key} className="capitalize text-xl w-full flex items-center col-span-1">
              {formattedKey}
              {value ? (
                <MdCheck className="text-3xl ml-1 text-[#4BB543]" />
              ) : (
                <MdClose className="text-3xl ml-1 text-primary" />
              )}
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Details;
