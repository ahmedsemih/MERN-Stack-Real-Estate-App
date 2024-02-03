const Loader = () => {
  return (
    <div className="flex flex-col gap-4 min-h-[52vh] justify-center">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-bgColor-soft rounded-lg p-4 flex flex-col w-full animate-pulse">
          <div className="h-9 mb-4 sm:w-1/2 w-full bg-borderColor rounded-lg"></div>
          <div className="flex gap-8 flex-col sm:flex-row sm:items-center items-start">
            <div className="rounded-full border border-borderColor bg-borderColor w-36 h-36"></div>
            <div className="flex flex-col gap-4 w-2/3">
              <div className="w-full flex flex-col gap-2">
                <div className="h-6 sm:w-1/2 w-2/3 bg-borderColor rounded-lg"></div>
                <div className="h-6 sm:w-1/2 w-2/3 bg-borderColor rounded-lg"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-6 sm:w-1/2 w-2/3 bg-borderColor rounded-lg"></div>
                <div className="h-6 sm:w-1/2 w-2/3 bg-borderColor rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bgColor-soft rounded-lg p-4 w-full flex flex-col gap-4 animate-pulse">
          <div className="h-9 sm:w-1/2 w-full bg-borderColor rounded-lg animate-pulse"></div>
          <div className="w-full">
            <div className="w-32 h-6 mb-1 bg-borderColor animate-pulse rounded-lg"></div>
            <div className="bg-borderColor rounded-lg border-borderColor border-2 h-10 w-full animate-pulse"></div>
          </div>
          <div className="w-full">
            <div className="w-32 h-6 mb-1 bg-borderColor animate-pulse rounded-lg"></div>
            <div className="bg-borderColor rounded-lg border-borderColor border-2 h-10 w-full animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="flex ml-auto items-center lg:w-1/4 md:w-1/3 sm:w-1/2 w-full gap-4 animate-pulse px-4">
        <div className="h-11 w-1/2 bg-borderColor animate-pulse rounded-lg"></div>
        <div className="h-11 w-1/2 bg-borderColor animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default Loader;
