"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "En Popüler",
      url: "top_rated",
    },
    {
      name: "En Son",
      url: "popular",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-lg gap-10 ">
      {tabs.map((item, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tabs.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : "text-orange-600 font-bold text-xl"
          }`}
          href={`/?genre=${item.url}`}
          key={i}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
