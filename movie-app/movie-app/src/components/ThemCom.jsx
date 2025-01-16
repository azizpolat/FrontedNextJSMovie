"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const ThemCom = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themaMode = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && themaMode === "dark" ? (
        <CiLight onClick={() => setTheme("light")} className="cursor-pointer" size={25} />
      ) : (
        <CiDark onClick={() => setTheme("dark")} className="cursor-pointer" size={25} />
      )}
    </div>
  );
};

export default ThemCom;
