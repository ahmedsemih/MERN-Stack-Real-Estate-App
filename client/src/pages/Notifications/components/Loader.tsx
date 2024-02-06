const Loader = () => {
  const placeholders = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className="w-full min-h-[52vh] flex flex-col gap-4 animate-pulse my-8">
      <div className="h-9 w-60 bg-borderColor rounded-lg"></div>
      {placeholders.map((number) => (
        <div
          key={number}
          className="rounded-lg bg-bgColor-soft border border-borderColor p-4 w-full flex flex-col gap-4"
        >
          <div className="flex sm:flex-row flex-col-reverse items-start justify-between gap-4 mb-1">
            <div className="md:h-8 sm:h-16 h-32 xl:w-1/2 md:w-2/3 w-full rounded-lg bg-borderColor"></div>
            <div className="h-8 w-8 rounded-lg bg-borderColor ml-auto"></div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center justify-between gap-2 md:text-xl text-lg">
            <div className="h-7 xl:w-1/3 md:w-1/2 w-full rounded-lg bg-borderColor md:block hidden"></div>
            <div className="h-7 sm:w-32 w-1/2 ml-auto rounded-lg bg-borderColor"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
