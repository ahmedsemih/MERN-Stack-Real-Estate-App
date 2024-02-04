const InfoLoader = () => {
  return (
    <div className="w-full rounded-lg bg-bgColor-soft px-4 py-8 flex-col gap-4 animate-pulse border border-borderColor">
      <div className="flex items-center gap-4 flex-col">
        <div
          className="rounded-full bg-borderColor w-[128px] h-[128px]"
        />
        <div className="mb-4">
          <div className="bg-borderColor rounded-lg w-44 h-8 mb-1"></div>
          <div className="bg-borderColor rounded-md w-44 h-4"></div>
        </div>
      </div>
      <hr className="border-borderColor mt-2 mb-6" />
      <div className="flex flex-col gap-2 items-center">
        <div className="sm:w-60 w-full h-7 bg-borderColor rounded-lg">
        </div>
        <div className="sm:w-60 w-full h-7 bg-borderColor rounded-lg">
        </div>
      </div>
    </div>
  )
}

export default InfoLoader