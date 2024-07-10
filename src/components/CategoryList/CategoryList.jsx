import Link from "next/link";
import styles from "./categorylist.module.css";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const Categorylist = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 style={{ color: "lime" }}>CategoryList Component</h1>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blog?category=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            {item.image && (
              <Image
                src={`${item.img}`}
                alt={""}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categorylist;
