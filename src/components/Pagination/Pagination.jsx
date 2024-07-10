"use client";

import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

export default function Pagination({ page, previous, next }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!previous}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!next}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
