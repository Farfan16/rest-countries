import React from "react";
import Image from "next/image";
import { fetchUrlAlpha } from "@/app/lib/data";

const Detail = async () => {
  const url = `https://restcountries.com/v3.1/name/iceland`;
  const res = await fetch(url);
  const data = await res.json();
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
    let countryArr: string[] = [];
    if (countryBorders.length > 0) {
      await Promise.all(
        countryBorders.map(async (countryCode: any) => {
          const fetchAlphaCode = await fetchUrlAlpha({ code: countryCode });
          if (fetchAlphaCode) {
            const countryName = fetchAlphaCode[0].name.common;
            countryArr.push(countryName);
          }
        })
      );
    }
    return countryArr;
  };

  const countryBordersName = await getCountryBorderName();
  console.log(countryBordersName);

  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-full h-fit mt-14">
        <Image
          src={countryData.flags.svg}
          alt={countryData.flags.alt}
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
          className="flex flex-col justify-start items-start w-full gap-2"
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
          id="additional-desc"
          className="flex flex-col justify-start items-start w-full gap-2"
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
      <div id="border-countries" className="flex flex-col w-full gap-6">
        <h2 className="text-xl">Border Countries:</h2>
        <div className="flex flex-row flex-wrap gap-2 w-full">
          {countryBorders.length > 0 ? (
            countryBordersName.map((country: any, index: number) => (
              <div
                key={index}
                className="inline-flex flex-wrap items-center bg-DarkBlueDM px-4 py-2 text-sm rounded shadow"
              >
                <p>{country}</p>
              </div>
            ))
          ) : (
            <p>No border countries</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
