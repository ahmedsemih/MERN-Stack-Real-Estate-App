import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

const Searchbar = ({ onWelcome }: { onWelcome: boolean }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search && search.trim() !== "") return navigate(`/search?q=${search}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form
      className="lg:w-1/2 w-full lg:min-w-[400px] md:min-w-[300px] rounded-xl flex items-center text-xl text-black"
      onSubmit={handleSubmit}
    >
      <input
        className={`w-full p-2 border-none outline-none rounded-l-xl indent-2 ${
          onWelcome ? "bg-white" : "bg-bgColor-soft text-textColor"
        }`}
        placeholder="Search for a location or listing title..."
        type="text"
        onChange={handleChange}
      />
      <button
        className={`p-3 rounded-r-xl hover:opacity-80 transition-opacity duration-200 ${
          onWelcome ? "bg-white" : "bg-bgColor-soft text-textColor-soft"
        }`}
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Searchbar;
