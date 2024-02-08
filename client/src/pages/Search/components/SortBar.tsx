import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { SORT_OPTIONS } from "@/utils/constants";

const SortBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (event: FormEvent<HTMLSelectElement>) => {
    searchParams.delete("sortBy");
    searchParams.set("sortBy", event.currentTarget.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full p-2 bg-bgColor-soft border border-borderColor rounded-lg flex flex-col md:flex-row justify-between items-center">
      <p className="sm:text-xl text-lg md:pl-2 font-semibold text-textColor-soft">
        {searchParams.get("q")
          ? `Results for "${searchParams.get("q")}"`
          : `Results`}
      </p>
      <select
        className="p-2 bg-borderColor rounded-lg border border-borderColor"
        value={searchParams.get("sortBy") || "date-desc"}
        onChange={handleChange}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;
