import React from "react";
import Image from "next/image";
import { fetchUrlAlpha } from "@/app/lib/data";
import Link from "next/link";

const Detail = async ({ code }: { code: string }) => {
  const data = await fetchUrlAlpha({ code: code });
  const countryData = data[0];
  const nativeName = Object.keys(countryData.name.nativeName)[0];
  const currencyCode = Object.keys(countryData.currencies)[0];
  const countryLanguage = Object.values(countryData.languages);

  const countryBordersChecker = () => {
    if (typeof countryData.borders != "undefined") {
      const countryBorders = Object.values(countryData.borders);
      return countryBorders;
    } else {
      return [];
    }
  };
  const countryBorders = countryBordersChecker();

  const getCountryBorderName = async () => {
    let countryArr: { countryName: string; countryCode: string }[] = [];
    if (countryBorders.length > 0) {
      await Promise.all(
        countryBorders.map(async (countryCode: any) => {
          const fetchAlphaCode = await fetchUrlAlpha({ code: countryCode });
          if (fetchAlphaCode) {
            const countryName = fetchAlphaCode[0].name.common;
            const countryCode = fetchAlphaCode[0].cca3;
            countryArr.push({ countryName, countryCode });
          }
        })
      );
    }
    return countryArr;
  };

  const countryBordersData = await getCountryBorderName();
  return (
    <div className="flex flex-col md:flex-row md:mt-14 w-full gap-10">
      <div className="max-w-full w-full h-fit  mt-14 md:mt-0">
        <Image
          src={countryData.flags.svg}
          alt={
            typeof countryData.flags.alt != "undefined"
              ? countryData.flags.alt
              : `Flag of ${countryData.name.common}`
          }
          width={400}
          height={300}
        />
      </div>
      <div
        id="country-desc"
        className="flex flex-col justify-start items-start w-full h-full gap-10"
      >
        <h1 className="text-2xl font-bold">{countryData.name.common}</h1>
        <div
          id="main-desc"
          className="flex flex-col md:flex-row justify-start items-start w-full gap-2"
        >
          <div
            id="first-part"
            className="flex flex-col w-full gap-2 md:w-1/2 md-flex-row"
          >
            <p className="font-semibold">
              Native Name:{" "}
              <span className="font-light">
                {countryData.name.nativeName[nativeName].common}
              </span>
            </p>
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">{countryData.population}</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{countryData.region}</span>
            </p>
            <p className="font-semibold">
              Sub Region:{" "}
              <span className="font-light">{countryData.subregion}</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="font-light">{countryData.capital}</span>
            </p>
          </div>
          <div
            id="second-part"
            className="flex flex-col justify-start items-start w-full md:w-1/2 gap-2"
          >
            <p className="font-semibold">
              Top Level Domain:{" "}
              <span className="font-light">{countryData.tld}</span>
            </p>
            <p className="font-semibold">
              Currencies:{" "}
              <span className="font-light">
                {countryData.currencies[currencyCode].name}
              </span>
            </p>
            <p className="font-semibold">
              Languages:{" "}
              <span className="font-light">{countryLanguage.join(", ")}</span>
            </p>
          </div>
        </div>
        <div
          id="border-countries"
          className="flex flex-col md:items-center md:flex-row w-full gap-6"
        >
          <h2 className="text-xl">Border Countries:</h2>
          <div className="flex flex-row flex-wrap gap-2 w-fit">
            {countryBorders.length > 0 ? (
              countryBordersData.map((country: any, index: number) => (
                <Link
                  key={index}
                  href={`/detail/${country.countryCode}`}
                  className="inline-flex flex-wrap items-center bg-White hover:bg-VeryLightGrayLM active:bg-DarkGrayLM dark:bg-DarkBlueDM hover:dark:bg-VeryDarkBlueDM active:dark:bg-VeryDarkBlueLM px-4 py-2 text-sm rounded shadow"
                >
                  <p>{country.countryName}</p>
                </Link>
              ))
            ) : (
              <p>No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
