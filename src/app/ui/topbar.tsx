import React from "react";
import { FaMoon } from "react-icons/fa";
import ThemeSwitcher from "./themeSwitcher";

const Topbar = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full py-8 px-4 bg-white text-VeryDarkBlueLM dark:bg-DarkBlueDM dark:text-White drop-shadow-lg lg:px-16 lg:py-5">
      <h1 className="text-base font-bold">Where in the world?</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Topbar;
