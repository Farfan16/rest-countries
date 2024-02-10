import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Detail from "./ui/detail";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <main className="px-5 py-8 lg:p-16 flex flex-col min-h-screen justify-start items-start text-VeryDarkBlueLM bg-VeryLightGrayLM dark:bg-VeryDarkBlueDM dark:text-White">
      <div className="flex h-fit w-full justify-start">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 py-2 px-8 bg-white text-VeryDarkBlueLM hover:bg-VeryLightGrayLM active:bg-DarkGrayLM dark:bg-DarkBlueDM dark:text-White rounded shadow-md hover:dark:bg-VeryDarkBlueDM active:dark:bg-VeryDarkBlueLM"
        >
          <FaArrowLeftLong />
          <p className="text-base font-light">Back</p>
        </Link>
      </div>
      <Detail code={id} />
    </main>
  );
};

export default Page;
