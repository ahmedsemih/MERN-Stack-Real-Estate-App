const Loader = () => {
  return (
    <div>
      <div className="mb-4 border border-borderColor xl:h-[640px] lg:h-[540px] h-[200px] sm:h-[320px] md:h-[480px] w-full bg-bgColor-soft rounded-lg animate-pulse p-4">
        <div className="w-full h-full animate-pulse rounded-lg bg-borderColor"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4">
          <div className="p-4 bg-bgColor-soft rounded-lg border border-borderColor animate-pulse flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <div className="w-96 h-9 rounded-lg bg-borderColor animate-pulse"></div>
              <div className="bg-borderColor rounded-full w-9 h-9 animate-pulse"></div>
            </div>
            <div className="w-44 bg-borderColor rounded-lg animate-pulse h-9"></div>
            <div className="w-52 bg-borderColor rounded-lg animate-pulse h-7 mt-4 mb-3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 w-full md:w-[200px] lg:w-[300px] h-52 animate-pulse rounded-lg bg-borderColor"></div>
              <div className="col-span-1 w-full md:w-[200px] lg:w-[300px] h-52 animate-pulse rounded-lg bg-borderColor"></div>
            </div>
          </div>
          <div className="p-4 bg-bgColor-soft rounded-lg border border-borderColor animate-pulse h-auto w-full">
            <div className="w-44 h-9 mb-4 rounded-lg bg-borderColor animate-pulse"></div>
            <div className="w-full h-20 rounded-lg bg-borderColor animate-pulse"></div>
          </div>
          <div className="p-4 bg-bgColor-soft rounded-lg border border-borderColor animate-pulse h-auto w-full">
            <div className="w-44 h-9 mb-4 rounded-lg bg-borderColor animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="col-span-1 w-[200px] md:w-[120px] lg:w-[200px] h-36 animate-pulse rounded-lg bg-borderColor"></div>
              <div className="col-span-1 w-[200px] md:w-[120px] lg:w-[200px] h-36  animate-pulse rounded-lg bg-borderColor"></div>
              <div className="col-span-1 w-[200px] md:w-[120px] lg:w-[200px] h-36  animate-pulse rounded-lg bg-borderColor"></div>
            </div>
          </div>
          <div className="p-4 bg-bgColor-soft rounded-lg border border-borderColor animate-pulse h-auto w-full">
            <div className="w-44 h-9 mb-4 rounded-lg bg-borderColor animate-pulse"></div>
            <div className="w-full h-32 rounded-lg bg-borderColor animate-pulse"></div>
          </div>
        </div>
        <div className="col-span-1 bg-bgColor-soft rounded-lg p-4 border border-borderColor animate-pulse h-[440px] flex flex-col justify-between">
          <div className="rounded-full mt-8 bg-borderColor animate-pulse w-[96px] h-[96px] mx-auto"></div>
          <div className="w-32 mx-auto bg-borderColor rounded-lg animate-pulse mt-4 h-5 mb-2"></div>
          <div className="w-40 mx-auto bg-borderColor rounded-lg animate-pulse h-4 mb-1"></div>
          <div className="w-40 mx-auto bg-borderColor rounded-lg animate-pulse mt-2 h-5 mb-3"></div>
          <div className="mt-auto flex flex-col gap-2">
            <div className="w-full h-10 bg-borderColor rounded-lg animate-pulse"></div>
            <div className="w-full h-10 bg-borderColor rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
