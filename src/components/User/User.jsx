import Image from "next/image";
import styles from "./user.module.css";

export default function User() {
  return (
    <div className={styles.container}>
      <div className={styles.authorAndDate}>
        <div className={styles.avatar}>
          <Image
            src={"/p1.jpeg"}
            alt="image"
            fill
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.user}>
          <span>William Randolph</span>
          <span>25 April 2023</span>
        </div>
      </div>
    </div>
  );
}
