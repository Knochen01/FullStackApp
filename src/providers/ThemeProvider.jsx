"use client";

import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext, useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}
