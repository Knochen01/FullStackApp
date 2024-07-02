import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.post}>
      <div className={styles.imageWrapper}>
        <Image src={"/p1.jpeg"} fill alt="image" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.details}>
          <span className={styles.date}> 11.02.2023 -&nbsp; </span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <h1 className={styles.textTitle}>
          Lorem ipsum dolor sit amet consectetu.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quaerat,
          dolorem sunt numquam tempora perferendis sit sapiente veniam!
          Recusandae nam beatae esse voluptas ad quas repellendus explicabo
          laudantium molestias a!
        </p>
        <Link href={"/"} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}
