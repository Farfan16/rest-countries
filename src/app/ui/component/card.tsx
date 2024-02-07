import React from "react";
import Image from "next/image";

const CountryCard = ({
  id,
  flagImage,
  flagAlt,
  name,
  population,
  region,
  capital,
}: {
  id: string;
  flagImage: string;
  flagAlt: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}) => {
  return (
    <div
      key={id}
      className="relative z-0 flex flex-col justify-center items-start w-4/5 bg-DarkBlueDM rounded-md drop-shadow-lg lg:w-1/5"
    >
      <div
        id="flag"
        className="flex rounded-t-md items-stretch w-full h-full max-w-96"
      >
        <Image
          src={flagImage}
          width={500}
          height={400}
          alt={flagAlt}
          className="rounded-t-md object-cover aspect-[3/2]"
        />
      </div>
      <div
        id="desc"
        className="flex flex-col items-start justify-center w-full p-4 gap-2"
      >
        <h2 id="dataObj-name" className="mb-2 text-base font-bold">
          {name}
        </h2>
        <h3 id="population" className="font-medium text-sm">
          Population: <span className="font-light">{population}</span>
        </h3>
        <h3 id="region" className="font-medium text-sm">
          Region: <span className="font-light">{region}</span>
        </h3>
        <h3 id="capital" className="font-medium text-sm">
          Capital: <span className="font-light">{capital}</span>
        </h3>
      </div>
    </div>
  );
};

export default CountryCard;
