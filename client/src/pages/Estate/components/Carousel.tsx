import { FC, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type Props = {
  images: string[];
  title: string;
};

const Carousel: FC<Props> = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleClickNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClickPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleClickBubble = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative rounded-lg border border-borderColor xl:h-[640px] lg:h-[540px] h-[200px] sm:h-[320px] md:h-[480px] mb-4 bg-bgColor-soft flex flex-nowrap overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full scale-105">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full mx-auto h-full rounded-lg blur-xl top-0 left-0 ${
              index === currentImage ? "block" : "hidden"
            }`}
            src={image}
            alt={title}
          />
        ))}
      </div>
      <div className="absolute left-0 top-0 z-20 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-auto mx-auto h-full ${
              index === currentImage ? "block" : "hidden"
            }`}
            src={image}
            alt={title}
          />
        ))}
      </div>
      {images?.length > 1 && (
        <>
          <button
            onClick={handleClickPrevious}
            className="absolute md:left-8 left-2 top-[45%] text-4xl opacity-50 hover:opacity-100 duration-200 transition-all cursor-pointer z-20 text-white hover:scale-110"
          >
            <FaArrowCircleLeft />
          </button>
          <button
            onClick={handleClickNext}
            className="absolute md:right-8 right-2 top-[45%] text-4xl opacity-50 hover:opacity-100 duration-200 transition-all cursor-pointer z-20 text-white hover:scale-110"
          >
            <FaArrowCircleRight />
          </button>
          <div className="absolute md:bottom-4 bottom-2 justify-center gap-2 flex z-30 w-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClickBubble(index)}
                className={`w-4 h-4 rounded-full cursor-pointer bg-white hover:scale-125 ${
                  index === currentImage
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
