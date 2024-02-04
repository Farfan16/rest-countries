import { unstable_noStore as noStore } from "next/cache";

export const fetchCountryData = async ({ query }: { query?: string }) => {
  noStore();
  try {
    if (query != "") {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,flags,population,region,capital`
      );
      const data = await res.json();
      const countryData = data.map((dataCountry: any) => ({ ...dataCountry }));
      return countryData;
    }
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    );
    if (res.status != 200) {
      console.log("Fetching failed", res.status);
    }
    const data = await res.json();
    const countryData = data.map((dataCountry: any) => ({ ...dataCountry }));
    return countryData;
  } catch (error) {
    console.log("There's an error: ", error);
  }
};

export const fetchDataPages = async ({ query }: { query?: string }) => {
  noStore();
  try {
    if (query != "") {
      const count = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,flags,population,region,capital`
      );
      const countPages = await count.json();
      const totalPages = Math.ceil(Number(countPages.length / 8));
      return totalPages;
    }
    const count = await fetch("https://restcountries.com/v3.1/all");
    if (count.status != 200) {
      console.log("Fetching failed", count.status);
    }
    const countPages = await count.json();
    const totalPages = Math.ceil(Number(countPages.length / 8));
    return totalPages;
  } catch (error) {
    console.log(error);
  }
};
