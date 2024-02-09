import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Detail from "./ui/detail";

const Page = () => {
  return (
    <main className="px-5 py-8 flex flex-col min-h-screen justify-start items-start">
      <div className="flex h-fit w-full justify-start">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 py-2 px-8 bg-DarkBlueDM rounded shadow-md active:bg-VeryDarkBlueDM"
        >
          <FaArrowLeftLong />
          <p className="text-base font-light text-white">Back</p>
        </Link>
      </div>
      <Detail />
    </main>
  );
};

export default Page;
