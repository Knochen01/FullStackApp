import Image from "next/image";
import styles from "./user.module.css";

export default function User({ data }) {
  const userImage = data?.user?.image || "/p1.jpeg";
  const userName = data?.user?.name || "John Doe";
  const userDate = data?.createdAt?.substring(0, 10) || "25 April 2023";

  return (
    <div className={styles.container}>
      <div className={styles.authorAndDate}>
        <div className={styles.avatar}>
          <Image
            src={userImage}
            alt="User avatar"
            fill
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.user}>
          <span>{userName}</span>
          <span>{userDate}</span>
        </div>
      </div>
    </div>
  );
}
