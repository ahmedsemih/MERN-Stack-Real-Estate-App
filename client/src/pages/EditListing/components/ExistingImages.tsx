import { FC, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import { EstateInputs } from "..";
import { BasicButton } from "@/components/ui";

type Props = {
  images: string[];
  setValue: UseFormSetValue<EstateInputs>;
};

const ExistingImages: FC<Props> = ({ images, setValue }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [imageUrls, setImageUrls] = useState<string[]>(images);

  const handleClickPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setCurrentImage((prev) => (prev + 1 === imageUrls.length ? 0 : prev + 1));
  };

  const handleDelete = (selectedImage: string) => {
    const newImages = imageUrls.filter((image) => image !== selectedImage);
    setValue("imageUrls", newImages);
    setCurrentImage(newImages.length - 1);
    setImageUrls(newImages);
  };

  return (
    <div>
      <p className="my-1 text-xl font-semibold">
        Existing Images {`(${imageUrls.length})`}
      </p>
      <div className="bg-borderColor rounded-lg pt-2">
        <div className="relative w-full h-[200px]">
          <img
            className="w-auto mx-auto h-full object-cover content-center"
            src={imageUrls[currentImage]}
            alt={`image-${currentImage}`}
          />
          <button
            type="button"
            onClick={handleClickPrevious}
            className="absolute left-2 top-[45%] text-4xl opacity-100 cursor-pointer z-20 text-primary hover:scale-110"
          >
            <FaArrowCircleLeft />
          </button>
          <button
            type="button"
            onClick={handleClickNext}
            className="absolute right-2 top-[45%] text-4xl opacity-100 cursor-pointer z-20 text-primary hover:scale-110"
          >
            <FaArrowCircleRight />
          </button>
        </div>
        <BasicButton
          disabled={imageUrls.length === 1}
          onClick={() => handleDelete(imageUrls[currentImage])}
          radius="small"
          className="w-full mt-2"
        >
          Delete
        </BasicButton>
      </div>
    </div>
  );
};

export default ExistingImages;
