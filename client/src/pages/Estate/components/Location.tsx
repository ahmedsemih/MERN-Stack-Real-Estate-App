import { FC } from "react";
import { Location } from "@/types";

type Props = {
  location: Location;
};

const Location: FC<Props> = ({ location }) => {
  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4">
      <h3 className="text-2xl font-semibold mb-3">Location</h3>
      <div className="flex flex-col gap-2">
        <p className="text-xl">
          Province:<strong className="ml-1">{location.province.name}</strong>
        </p>
        <p className="text-xl">
          District:<strong className="ml-1">{location.district.name}</strong>
        </p>
        <p className="text-xl">
          Address:<strong className="ml-1">{location.address}</strong>
        </p>
      </div>
    </div>
  );
};

export default Location;
