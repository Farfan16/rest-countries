"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.log("Not found");
  }, []);
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="font-bold text-xl">404 Not Found</h2>
      <p className="font-semibold text-base">
        Could not find country you search for.
      </p>
      <Link href="/" className="px-6 py-2 bg-DarkBlueDM rounded text-center">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
