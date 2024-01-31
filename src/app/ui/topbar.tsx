import React from "react";
import { FaMoon } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full py-8 px-4 bg-DarkBlueDM drop-shadow-lg lg:px-16 lg:py-5">
      <h1 className="text-base font-bold">Where in the world?</h1>
      <div
        id="DarkModeSwitch"
        className="flex flex-row items-center justify-center gap-2"
      >
        <FaMoon size={14} />
        <p className="text-xs font-semibold">Dark Mode</p>
      </div>
    </header>
  );
};

export default Topbar;
