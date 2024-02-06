import { unstable_noStore as noStore } from "next/cache";

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
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,flags,population,region,capital`
      );
      if (res.status != 200) {
        console.log("Error code: ", res.status);
        return null;
      }
      const data = await res.json();
      const countryData = data.map((dataCountry: any) => ({ ...dataCountry }));
      if (filter) {
        const filteredData = countryData.filter(
          (country: any) => country.region == `${filter}`
        );
        return filteredData;
      }
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

// export const fetchTest = async () => {
//   noStore();
//   try {
//     const res = await fetch(
//       "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
//     );
//     if (res.status != 200) {
//       console.log("Fetching failed", res.status);
//     }
//     const data = await res.json();
//     // const countryData = data.;
//     return data;
//   } catch (error) {
//     console.log("There's an error: ", error);
//   }
// };

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
      const count = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,flags,population,region,capital`
      );
      if (count.status != 200) {
        return null;
      }
      const countPages = await count.json();
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
    const count = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    );
    if (count.status != 200) {
      console.log("Fetching failed", count.status);
    }
    const countPages = await count.json();
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
