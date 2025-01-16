"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
