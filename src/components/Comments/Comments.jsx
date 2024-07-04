import User from "../User/User";
import styles from "./comments.module.css";
import Link from "next/link";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.textAreaWrapper}>
          <textarea
            className={styles.textArea}
            name=""
            id=""
            placeholder="Write a comment...."
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <User />
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          reiciendis saepe in laboriosam ipsum ut? Ab unde consequatur ut
          dignissimos maxime sunt sint explicabo sequi? Assumenda ratione
          temporibus nam velit!
        </p>
        <User />
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          reiciendis saepe in laboriosam ipsum ut? Ab unde consequatur ut
          dignissimos maxime sunt sint explicabo sequi? Assumenda ratione
          temporibus nam velit!
        </p>
        <User />
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          reiciendis saepe in laboriosam ipsum ut? Ab unde consequatur ut
          dignissimos maxime sunt sint explicabo sequi? Assumenda ratione
          temporibus nam velit!
        </p>
        <User />
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          reiciendis saepe in laboriosam ipsum ut? Ab unde consequatur ut
          dignissimos maxime sunt sint explicabo sequi? Assumenda ratione
          temporibus nam velit!
        </p>
      </div>
    </div>
  );
}
