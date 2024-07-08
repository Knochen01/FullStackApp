"use client";

import Link from "next/link";
import styles from "./authlinks.module.css";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <span className={styles.links} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <button className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          {status === "false" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
