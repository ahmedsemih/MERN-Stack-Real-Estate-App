const TableLoader = () => {
  const placeholders = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4 w-full h-[90vh] md:h-[50vh] overflow-auto">
      <div className="w-full h-full min-w-[800px] overflow-auto flex flex-col gap-2">
        <div className="w-full h-8 bg-borderColor rounded-lg animate-pulse"></div>
        <div className="flex flex-col gap-1">
          {placeholders.map((number) => (
            <div key={number} className="flex gap-1">
              <div className="w-full bg-borderColor rounded-lg animate-pulse h-12"></div>
              <div className="w-full bg-borderColor rounded-lg animate-pulse h-12"></div>
              <div className="w-full bg-borderColor rounded-lg animate-pulse h-12"></div>
              <div className="w-full bg-borderColor rounded-lg animate-pulse h-12"></div>
              <div className="w-full bg-borderColor rounded-lg animate-pulse h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableLoader;
