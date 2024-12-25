import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className=" group w-full flex relative search-bar group items-center gap-2 justify-between px-4 border border-input  rounded-xl md:w-[40%] bg-main">
      <input
        className="py-2 text-base w-full bg-transparent text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray-400"
        type="text"
        name=""
        id=""
      />
      <SearchIcon className="cursor-pointer duration-200 group-hover:text-rose-400" />
    </div>
  );
};

export default Search;
