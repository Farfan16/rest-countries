import CountryWrapper from "./ui/country";
import Filter from "./ui/filter";
import Search from "./ui/search";
import { CardSkeleton } from "./ui/skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 pt-6 lg:px-16">
      <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <Search />
        <div className="relative z-10 flex justify-start w-full lg:justify-end">
          <Filter />
        </div>
      </div>
      <CountryWrapper />
    </main>
  );
}
