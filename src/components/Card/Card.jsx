import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card({ item }) {
  return (
    <div className={styles.post} key={item.id}>
      {item.img && (
        <div className={styles.imageWrapper}>
          <Image
            src={`${item.img}`}
            fill
            alt="image"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textWrapper}>
        <div className={styles.details}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -&nbsp;{" "}
          </span>
          <span className={styles.category}> {item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.catSlug}`}>
          <h1 className={styles.textTitle}>{item.title}</h1>
        </Link>

        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quaerat,
          dolorem sunt numquam tempora perferendis sit sapiente veniam!
          Recusandae nam beatae esse voluptas ad quas repellendus explicabo
          laudantium molestias a!
        </p>
        <Link href={`/posts/${item.catSlug}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}
