import { Suspense } from "react";
import CountryWrapper from "./ui/country";
import Filter from "./ui/filter";
import Search from "./ui/search";
import { CardSkeleton } from "./ui/skeleton";
import Pagination from "./ui/pagination";
import { fetchDataPages } from "./lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string; filter?: string };
}) {
  const query = searchParams?.query || "";
  const filter = searchParams?.filter || "";
  const totalPages = await fetchDataPages({ query, filter });
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 py-6 pt-28 lg:pt-24 lg:px-16 bg-VeryLightGrayLM dark:bg-VeryDarkBlueDM">
      <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <Search placeholder="Search for a country..." />
        <div className="relative z-10 flex justify-start w-full lg:justify-end">
          <Filter />
        </div>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <CountryWrapper
          currentPage={currentPage}
          query={query}
          filter={filter}
        />
      </Suspense>
      {totalPages != null && <Pagination totalPages={Number(totalPages)} />}
    </main>
  );
}
