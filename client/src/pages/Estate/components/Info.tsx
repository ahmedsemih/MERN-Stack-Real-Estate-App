import { FC } from "react";
import moment from "moment";

import { Estate } from "@/types";
import formatPrice from "@/utils/formatPrice";
import { FavoriteButton, EditButton } from "@/components/ui";

type Props = {
  estate: Estate;
};

const Info: FC<Props> = ({ estate }) => {
  return (
    <section className="w-full bg-bgColor-soft rounded-lg border border-borderColor p-4">
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
        <h1 className="sm:text-3xl text-2xl font-semibold">{estate.title}</h1>
      <p className="text-3xl mt-2 font-semibold block md:hidden">{formatPrice(estate.price)}</p>
        <div className="flex">
          <EditButton
            estateId={estate._id}
            sellerId={estate.seller._id}
            className="relative top-[0px] left-[0px]"
          />
          <FavoriteButton
            className="top-[0px] right-[0px] relative"
            estateId={estate._id}
          />
        </div>
      </div>
      <p className="text-3xl mt-2 font-semibold hidden md:block">{formatPrice(estate.price)}</p>
      <div className="pt-8">
        <h3 className="text-2xl font-semibold mb-3">Estate Informations</h3>
        <div className="text-xl flex md:flex-row flex-col md:gap-4 gap-2">
          <div
            className={`w-full flex ${
              estate.details ? "flex-col gap-2" : "flex-row"
            }`}
          >
            <div className="w-full flex flex-col gap-2">
              <p>
                Last Update:
                <strong className="ml-1">
                  {moment(Number(estate.updatedAt)).format("DD.MM.YYYY")}
                </strong>
              </p>
              <p className="capitalize">
                Status:<strong className="ml-1">{estate.category}</strong>
              </p>
              <p className="capitalize">
                Type:
                <strong className="ml-1">{estate.detailedType.name}</strong>
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>
                Price:
                <strong className="ml-1">{formatPrice(estate.price)}</strong>
              </p>
              <p>
                Size:
                <strong className="ml-1">
                  {estate.size} m<sup>2</sup>
                </strong>
              </p>
              <p>
                Price / m<sup>2</sup>:
                <strong className="ml-1">
                  {formatPrice(Number((estate.price / estate.size).toFixed(2)))}
                </strong>
              </p>
            </div>
          </div>
          {estate.details && (
            <div className="w-full flex gap-2 flex-col">
              <p>
                Rooms:
                <strong className="ml-1">
                  {estate.details?.roomAndSaloon}
                </strong>
              </p>
              <p>
                Floor Location:
                <strong className="ml-1">{estate.details?.locatedFloor}</strong>
              </p>
              <p>
                Total Floor:
                <strong className="ml-1">{estate.details?.floor}</strong>
              </p>
              <p>
                Building Age:
                <strong className="ml-1">
                  {estate.details?.buildingYear
                    ? new Date().getFullYear() -
                      Number(estate.details?.buildingYear)
                    : 0}
                </strong>
              </p>
              <p>
                Bathroom:
                <strong className="ml-1">{estate.details?.bathroom}</strong>
              </p>
              <p>
                Heating Type:
                <strong className="ml-1 capitalize">
                  {estate.details?.heatingType}
                </strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;
