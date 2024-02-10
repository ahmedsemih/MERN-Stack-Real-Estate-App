import moment from "moment";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Estate } from "@/types";
import formatPrice from "@/utils/formatPrice";
import generateSlug from "@/utils/generateSlug";
import { EditButton, FavoriteButton } from "../ui";

const DetailedCard = ({ estate }: { estate: Estate }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    const slug = generateSlug(estate.title);
    navigate(`/estate/${slug}/${estate._id}`);
  };

  return (
    <div className="border border-borderColor rounded-lg bg-bgColor-soft w-full cursor-pointer md:h-[200px] sm:h-[400px] h-[500px] flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full h-1/2 md:h-full relative">
        <img
          onClick={handleClickCard}
          className="w-full h-full object-cover content-center rounded-l-lg"
          src={estate.images[0]}
          alt={estate.title}
        />
        <FavoriteButton estateId={estate._id} className="left-2 right-auto" />
        <EditButton
          estateId={estate._id}
          sellerId={estate.seller._id}
          className="bottom-2 top-auto"
        />
      </div>
      <div
        onClick={handleClickCard}
        className="p-4 w-full md:h-auto h-1/2 flex flex-col gap-2"
      >
        <div className="flex justify-between w-full h-auto">
          <span className="text-2xl font-semibold">
            {formatPrice(estate.price)}
          </span>
          <span className="text-lg text-textColor-soft hidden md:block">
            {moment(Number(estate.updatedAt)).format("DD.MM.YYYY")}
          </span>
        </div>
        <p className="sm:text-2xl text-xl h-auto font-medium">{estate.title}</p>
        <div className="flex flex-col justify-between h-full">
          <div className="flex text-sm sm:text-lg items-center flex-wrap gap-x-2">
            <span className="border-r border-borderColor pr-2 capitalize">
              {estate.detailedType.name} for {estate.category}
            </span>
            <span
              className={estate?.details && "border-r border-borderColor pr-2"}
            >
              {estate.size} m<sup>2</sup>
            </span>
            {estate.details && (
              <>
                <span className="border-r border-borderColor pr-2">
                  {estate.details.roomAndSaloon}
                </span>
                <span className="border-r border-borderColor pr-2 capitalize">
                  {estate.details.locatedFloor != 0
                    ? `${estate.details.locatedFloor}. floor`
                    : ""}
                </span>
                <span className="capitalize">
                  {estate.details.buildingYear}
                </span>
              </>
            )}
          </div>
          <div className="text-textColor-soft text-lg flex items-center gap-1">
            <MdLocationPin />
            <span>{estate.location.district.name}, </span>
            <span>{estate.location.province.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
