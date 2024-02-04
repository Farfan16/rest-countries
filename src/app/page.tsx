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
  searchParams?: { page?: string; query?: string };
}) {
  const query = searchParams?.query || "";
  const totalPages = await fetchDataPages({ query });
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 pt-6 lg:px-16">
      <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <Search placeholder="Search for a country..." />
        <div className="relative z-10 flex justify-start w-full lg:justify-end">
          <Filter />
        </div>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <CountryWrapper
          currentPage={currentPage}
          totalPages={Number(totalPages)}
          query={query}
        />
      </Suspense>
      <Pagination totalPages={Number(totalPages)} />
    </main>
  );
}
