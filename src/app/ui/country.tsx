"use client";

import Image from "next/image";
import { fetchCountryData } from "../lib/data";

const CountryWrapper = async ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const getCountryData = await fetchCountryData();
  return (
    <div
      id="card-container"
      className="flex flex-col items-center w-full gap-10 lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-between"
    >
      {getCountryData
        .slice((currentPage - 1) * 8, currentPage * 8)
        .map((dataObj: any) => (
          <div
            key={dataObj.name.common}
            className="relative z-0 flex flex-col justify-center items-start w-4/5 bg-DarkBlueDM rounded-md drop-shadow-lg lg:w-1/5"
          >
            <div
              id="flag"
              className="flex rounded-t-md items-stretch w-full h-full max-w-96"
            >
              <Image
                src={dataObj.flags.svg}
                width={500}
                height={400}
                alt={dataObj.flags.alt}
                className="rounded-t-md object-cover aspect-[3/2]"
              />
            </div>
            <div
              id="desc"
              className="flex flex-col items-start justify-center w-full p-4 gap-2"
            >
              <h2 id="dataObj-name" className="mb-2 text-base font-bold">
                {dataObj.name.common}
              </h2>
              <h3 id="population" className="font-medium text-sm">
                Population:{" "}
                <span className="font-light">{dataObj.population}</span>
              </h3>
              <h3 id="region" className="font-medium text-sm">
                Region: <span className="font-light">{dataObj.region}</span>
              </h3>
              <h3 id="capital" className="font-medium text-sm">
                Capital: <span className="font-light">{dataObj.capital}</span>
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryWrapper;
