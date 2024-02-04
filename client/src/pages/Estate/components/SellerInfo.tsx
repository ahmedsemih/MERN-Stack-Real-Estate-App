import moment from "moment";
import { FC, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdVerified, MdEmail } from "react-icons/md";

import { BasicButton } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import generateSlug from "@/utils/generateSlug";

type Props = {
  seller: {
    _id: string;
    name: string;
    phone: string;
    email: string;
    image: string;
    verified: boolean;
    createdAt: string;
  };
};

const SellerInfo: FC<Props> = ({ seller }) => {
  const navigate = useNavigate();
  const [isPhoneOpen, setIsPhoneOpen] = useState<boolean>(false);
  const [isEmailOpen, setIsEmailOpen] = useState<boolean>(false);

  const handleClickSeller = () => {
    const sellerSlug = generateSlug(seller.name);
    navigate(`/seller/${sellerSlug}/${seller._id}`);
  };

  return (
    <aside className="col-span-1 bg-bgColor-soft rounded-lg p-4 border border-borderColor md:h-[440px] flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-2 pt-8">
        <img
          className="rounded-full border border-borderColor w-[96px] h-[96px] cursor-pointer object-cover content-center "
          src={seller.image}
          alt={seller.name}
          width={128}
          height={128}
          onClick={handleClickSeller}
        />
        <div>
          <p className="font-semibold text-xl text-center">{seller.name}</p>
          <p className="text-textColor-soft text-sm">
            Joined at {moment(Number(seller.createdAt)).format("MMM, YYYY")}
          </p>
        </div>
        {seller.verified && (
          <div className="flex items-center gap-1 text-lg mt-1">
            <MdVerified />
            <span className="capitalize">verified seller</span>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <button
          title={`See ${seller.name}'s Other Listings`}
          className="hover:text-primary transition-colors duration-200 py-2"
          onClick={handleClickSeller}
        >
          See Other Listings
        </button>

        <BasicButton
          radius="small"
          type="button"
          onClick={() => setIsPhoneOpen((prev) => !prev)}
        >
          <FaPhoneAlt className="mr-1" />
          {isPhoneOpen ? (
            seller.phone
          ) : (
            <span className="capitalize">show phone number</span>
          )}
        </BasicButton>
        <BasicButton
          variant="outlined"
          radius="small"
          type="button"
          onClick={() => setIsEmailOpen((prev) => !prev)}
        >
          <MdEmail className="mr-1" />
          {isEmailOpen ? (
            seller.email
          ) : (
            <span className="capitalize">show email address</span>
          )}
        </BasicButton>
      </div>
    </aside>
  );
};

export default SellerInfo;
