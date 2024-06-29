import styles from "./featured.module.css";
import Image from "next/image";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Marian here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={"/p1.jpeg"}
            alt="image"
            // width={300}
            // height={300}
            fill
          />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.textTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            ab molestias architecto ex assumenda numquam sunt dolor labore
            cupiditate! Maxime blanditiis nobis id ipsum in sed perspiciatis
            magni eos?
          </p>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
}
