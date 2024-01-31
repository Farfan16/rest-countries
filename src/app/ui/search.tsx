"use client";

import React from "react";
import { SlMagnifier } from "react-icons/sl";

const Search = () => {
  const handleSearch = (word: string) => {
    console.log(word);
  };
  return (
    <div className="flex flex-row justify-start items-center gap-6 w-full px-10 py-4 bg-DarkBlueDM rounded-md drop-shadow-md lg:w-1/2 lg:px-8">
      <SlMagnifier />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent focus:outline-none text-sm w-full"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
