import { FC } from "react";

type Props = {
  type: "grid" | "detailed";
  count?: number;
};

const FeedLoader: FC<Props> = ({ type, count }) => {
  const placeholders = Array.from(
    { length: count ?? 8 },
    (_, index) => index + 1
  );

  if (type === "grid")
    return (
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-4">
        {placeholders.map((number) => (
          <div
            key={number}
            className="w-full cursor-pointer h-[400px] border border-borderColor bg-bgColor-soft animate-pulse rounded-lg shadow-lg"
          >
            <div className="w-full h-1/2 rounded-t-lg relative bg-borderColor"></div>
            <div className="py-4 px-2 h-1/2 flex flex-col justify-between">
              <div className="h-8 w-1/2 bg-borderColor rounded-lg"></div>
              <div className="w-full h-12 bg-borderColor rounded-lg"></div>
              <div className="w-1/2 h-6 bg-borderColor rounded-lg"></div>
              <div className="w-2/3 h-6 bg-borderColor rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full py-4">
      {placeholders.map((number) => (
        <div
          key={number}
          className="animate-pulse border border-borderColor rounded-lg bg-bgColor-soft w-full cursor-pointer md:h-[200px] sm:h-[400px] h-[500px] flex flex-col md:flex-row"
        >
          <div className="md:w-1/3 w-full h-1/2 md:h-full bg-borderColor"></div>
          <div className="p-4 w-full md:h-auto h-1/2 flex flex-col gap-2">
            <div className="flex justify-between w-full h-auto">
              <div className="h-8 lg:w-1/5 sm:w-1/3 w-1/2 rounded-lg bg-borderColor"></div>
              <div className="h-8 lg:w-1/6 w-1/4 rounded-lg bg-borderColor hidden md:block"></div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-2/3 sm:h-8 h-7 bg-borderColor rounded-lg"></div>
            <div className="sm:h-7 w-full lg:w-1/2 md:w-2/3 h-14 bg-borderColor rounded-lg"></div>
            <div className="h-7 xl:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 bg-borderColor rounded-lg mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedLoader;
