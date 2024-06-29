"use client";

import { useContext } from "react";
import styles from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContextProvider";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  // console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src={"/moon.png"} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 1, backgroundColor: "white" }
            : { left: 1, backgroundColor: "#0f172a" }
        }
      ></div>
      <Image src={"/sun.png"} alt="" width={14} height={14} />
    </div>
  );
};
export default ThemeToggle;
