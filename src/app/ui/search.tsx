import React from "react";
import { SlMagnifier } from "react-icons/sl";

const Search = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-6 w-full px-10 py-4 bg-DarkBlueDM rounded-md">
      <SlMagnifier />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent focus:outline-none text-sm"
      />
    </div>
  );
};

export default Search;
