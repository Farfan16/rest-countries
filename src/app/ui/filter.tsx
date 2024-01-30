"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filter = () => {
  const [active, setActive] = useState(false);
  const [region, setRegion] = useState<string | null>();
  return (
    <div
      id="region-filter"
      className=" relative flex justify-between w-3/5 bg-DarkBlueDM rounded-lg"
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
        <ul className="absolute inline-block w-full left-0 top-14 bg-DarkBlueDM text-sm rounded-lg">
          {region != null && (
            <li
              className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
              onClick={() => {
                setRegion(null);
                setActive(false);
              }}
            >
              Clear
            </li>
          )}
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Africa");
              setActive(false);
            }}
          >
            Africa
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("America");
              setActive(false);
            }}
          >
            America
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Asia");
              setActive(false);
            }}
          >
            Asia
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
            onClick={() => {
              setRegion("Europe");
              setActive(false);
            }}
          >
            Europe
          </li>
          <li
            className="cursor-pointer px-5 py-2 active:bg-VeryDarkBlueDM"
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
