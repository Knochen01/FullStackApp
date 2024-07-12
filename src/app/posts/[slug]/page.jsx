import Menu from "../../../components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import User from "../../../components/User/User";
import Comments from "../../../components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>{data?.catSlug || "Default Title"}</h1>
          <User data={data} />
        </div>
        <div className={styles.rightSide}>
          <Image
            src={data?.img || "/p1.jpeg"}
            alt="image"
            fill
            className={styles.rightImage}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
