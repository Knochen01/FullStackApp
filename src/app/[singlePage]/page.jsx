import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import User from "@/components/User/User";
import Comments from "@/components/Comments/Comments";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <User />
        </div>
        <div className={styles.rightSide}>
          <Image
            src={"/p1.jpeg"}
            alt="image"
            fill
            className={styles.rightImage}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h3>Header</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur atque totam quae rerum, quasi non culpa error veniam
              placeat corrupti quidem eveniet commodi aut, aperiam maiores
              impedit dolorum id sequi.
            </p>
            <h3>Header</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur atque totam quae rerum, quasi non culpa error veniam
              placeat corrupti quidem eveniet commodi aut, aperiam maiores
              impedit dolorum id sequi.
            </p>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
