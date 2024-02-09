import { unstable_noStore as noStore } from "next/cache";

const fetchUrlAll = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,flags,population,region,capital"
  );
  if (res.status != 200) {
    console.log("Fetching failed", res.status);
  }
  const data = await res.json();
  return data;
};

const fetchUrlName = async ({ query }: { query: string | undefined }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${query}?fields=cca3,name,flags,population,region,capital`
  );
  if (res.status != 200) {
    console.log("Error code: ", res.status);
    return null;
  }
  const data = await res.json();
  return data;
};

export const fetchUrlAlpha = async ({ code }: { code: string }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (res.status != 200) {
    console.log("Error code: ", res.status);
    return null;
  }
  const data = await res.json();
  return data;
};

export const fetchCountryData = async ({
  query,
  filter,
}: {
  query?: string;
  filter?: string;
}) => {
  noStore();
  try {
    if (query != "") {
      const data = await fetchUrlName({ query });
      const countryData = data.map((dataCountry: any) => ({ ...dataCountry }));
      if (filter) {
        const filteredData = countryData.filter(
          (country: any) => country.region == `${filter}`
        );
        return filteredData;
      }
      return countryData;
    }
    const data = await fetchUrlAll();
    const countryData = data.map((dataCountry: any) => ({ ...dataCountry }));
    if (filter) {
      const filteredData = countryData.filter(
        (country: any) => country.region == `${filter}`
      );
      return filteredData;
    }
    return countryData;
  } catch (error) {
    console.log("There's an error: ", error);
  }
};

export const fetchDataPages = async ({
  query,
  filter,
}: {
  query?: string;
  filter?: string;
}) => {
  noStore();
  try {
    if (query != "") {
      const countPages = await fetchUrlName({ query });
      if (filter) {
        const filteredCountPages = countPages.filter(
          (country: any) => country.region == `${filter}`
        );
        const totalFilterPages = Math.ceil(
          Number(filteredCountPages.length / 8)
        );
        return totalFilterPages;
      }
      const totalPages = Math.ceil(Number(countPages.length / 8));
      return totalPages;
    }
    const countPages = await fetchUrlAll();
    if (filter) {
      const filteredCountPages = countPages.filter(
        (country: any) => country.region == `${filter}`
      );
      const totalFilterPages = Math.ceil(Number(filteredCountPages.length / 8));
      return totalFilterPages;
    }
    const totalPages = Math.ceil(Number(countPages.length / 8));
    return totalPages;
  } catch (error) {
    console.log(error);
  }
};
