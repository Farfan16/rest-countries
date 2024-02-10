"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "../lib/util";
import clsx from "clsx";
import Link from "next/link";

const PaginationArrow = ({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled: boolean;
}) => {
  const className = clsx("cursor-pointer text-VeryDarkBlueLM dark:text-white", {
    "pointer-events-none !text-DarkGrayLM dark:!text-DarkBlueDM": isDisabled,
    "hover:text-DarkGrayLM hover:dark:text-DarkBlueDM": !isDisabled,
    "mr-2 lg:mr-4": direction === "left",
    "ml-2 lg:ml-4": direction === "right",
  });

  const icon = direction === "left" ? <FaArrowLeft /> : <FaArrowRight />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
};

const PaginationNumber = ({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single";
}) => {
  const className = clsx(
    "mx-1 p-2 border bg-White text-VeryDarkBlueLM dark:bg-DarkBlueDM dark:text-White",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 !bg-DarkGrayLM !text-VeryLightGrayLM dark:!text-DarkBlueDM dark:!border-white dark:!bg-white":
        isActive,
      "hover:dark:bg-VeryDarkBlueDM active:hover:dark:bg-VeryDarkBlueDM":
        !isActive && position !== "middle",
      "text-VeryDarkBlueLM": position === "middle",
    }
  );
  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
};

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="inline-flex items-center">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      {allPages.map((page, index) => {
        let position: "first" | "last" | "middle" | "single" | undefined;

        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={index}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
