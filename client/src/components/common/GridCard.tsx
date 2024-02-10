import moment from "moment";
import { useNavigate } from "react-router-dom";

import { Estate } from "@/types";
import formatPrice from "@/utils/formatPrice";
import generateSlug from "@/utils/generateSlug";
import { FavoriteButton, EditButton } from "../ui";

const GridCard = ({ estate }: { estate: Estate }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    const slug = generateSlug(estate.title);
    navigate(`/estate/${slug}/${estate._id}`);
  };

  return (
    <div className="w-full cursor-pointer h-[400px] border border-borderColor bg-bgColor-soft rounded-lg">
      <div className="w-full h-1/2 rounded-t-lg relative">
        <img
          onClick={handleClickCard}
          className="w-full h-full object-cover content-center rounded-t-lg"
          src={estate.images[0]}
          alt={estate.title}
        />
        <FavoriteButton estateId={estate._id} />
        <EditButton estateId={estate._id} sellerId={estate.seller._id} />
      </div>
      <div
        onClick={handleClickCard}
        className="py-4 px-2 h-1/2 flex flex-col justify-between"
      >
        <div>
          <p className="text-2xl font-semibold">{formatPrice(estate.price)}</p>
          <div>
            <span className="capitalize inline-block mr-1">
              {estate.detailedType.name} for {estate.category},
            </span>
            <span className="inline-block mr-1">
              {estate.size} m<sup>2</sup>
              {estate.details && ","}
            </span>
            <span className="inline-block">
              {estate.details &&
                `${estate.details?.roomAndSaloon}${
                  estate.details.locatedFloor != 0
                    ? ` , ${estate.details.locatedFloor}. Floor`
                    : ''
                }`}
            </span>
          </div>
        </div>
        <p className="text-textColor-soft">
          {estate.location.district.name}, {estate.location.province.name}
        </p>
        <div className="text-textColor-soft">
          <span>{moment(Number(estate.updatedAt)).format("DD.MM.YYYY")}</span>
          <span className="mx-2">-</span>
          <span className="capitalize">
            {moment(Number(estate.updatedAt)).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
