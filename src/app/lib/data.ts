import { unstable_noStore as noStore } from "next/cache";

export const fetchCountryData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
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
