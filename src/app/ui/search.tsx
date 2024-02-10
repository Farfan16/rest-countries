"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((word: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (word) {
      params.set("query", word);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  });
  return (
    <div className="flex flex-row justify-start items-center gap-6 w-full px-10 py-4 bg-white text-DarkGrayLM dark:bg-DarkBlueDM dark:text-White rounded-md drop-shadow-md lg:w-1/2 lg:px-8">
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
