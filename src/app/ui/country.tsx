import Image from "next/image";
import { fetchCountryData } from "../lib/data";
import CountryCard from "./component/card";

const CountryWrapper = async ({
  currentPage,
  query,
  filter,
}: {
  currentPage: number;
  query: string;
  filter?: string;
}) => {
  const getCountryData = await fetchCountryData({ query, filter });
  return (
    <div
      id="card-container"
      className="flex flex-col items-center w-full gap-10 lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-between"
    >
      {getCountryData == null ? (
        <p className="text-2xl font-bold w-full text-center">
          No country found.
        </p>
      ) : (
        getCountryData
          .slice((currentPage - 1) * 8, currentPage * 8)
          .map((dataObj: any) => (
            <CountryCard
              id={dataObj.name.common}
              flagImage={dataObj.flags.svg}
              flagAlt={dataObj.flags.alt}
              name={dataObj.name.common}
              population={dataObj.population}
              region={dataObj.region}
              capital={dataObj.capital}
            />
          ))
      )}
    </div>
  );
};

export default CountryWrapper;
