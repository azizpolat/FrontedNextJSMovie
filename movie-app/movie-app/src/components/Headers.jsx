"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import MenuItem from "./MenuItem";
import ThemCom from "./ThemCom";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "About",
      url: "/about",
    },

    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchFun = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-10 h-20 p-5 ">
      <Link href="/" className="bg-amber-600 p-3 rounded-lg text-2xl  font-bold  ">
        MovieApp
      </Link>
      <div className="flex flex-1 items-center gap-2 border rounded-lg p-3">
        <input
          value={keyword}
          onKeyDown={searchFun}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama Yapabilirsiniz ..."
          type="text"
          className="outline-none flex-1 bg-transparent"
        />
        <IoSearch size={25} />
      </div>
      <ThemCom />
      {menu.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </div>
  );
};

export default Header;
