"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Filter = () => {
  const [active, setActive] = useState(false);
  const [region, setRegion] = useState<string | null>();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (region) {
      params.set("filter", region);
    } else {
      params.delete("filter");
    }
    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleFilter();
  }, [region]);
  return (
    <div
      id="region-filter"
      className=" relative flex justify-between w-3/5 bg-DarkBlueDM rounded-lg drop-shadow-md lg:w-1/5"
    >
      <button
        className="appearance-none flex flex-row justify-between w-full text-sm items-center px-5 py-4"
        onClick={() => setActive(!active)}
      >
        <p>{region != null ? region : "Filter by Region"}</p>
        {active == true ? (
          <FaChevronUp size={10} />
        ) : (
          <FaChevronDown size={10} />
        )}
      </button>
      {active && (
        <ul className="absolute inline-block w-full left-0 top-14 bg-DarkBlueDM text-sm rounded-lg z-20">
          {region != null && (
            <li
              className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
              onClick={() => {
                setRegion(null);
                setActive(false);
              }}
            >
              Clear
            </li>
          )}
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Africa");
              setActive(false);
            }}
          >
            Africa
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Americas");
              setActive(false);
            }}
          >
            Americas
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Asia");
              setActive(false);
            }}
          >
            Asia
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Europe");
              setActive(false);
            }}
          >
            Europe
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM lg:hover:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Oceania");
              setActive(false);
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
