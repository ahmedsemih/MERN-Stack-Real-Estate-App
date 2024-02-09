const TableError = ({ message }: { message: string }) => {
  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4 w-full h-[90vh] md:h-[50vh] overflow-auto">
      <div className="w-full h-full min-w-[800px] flex items-center justify-center">
        <p className="text-2xl">{message}</p>
      </div>
    </div>
  );
};

export default TableError;
