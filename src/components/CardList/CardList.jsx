import styles from "./cardlist.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

const getData = async (page, category) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts?page=${page}&category=${category || ""}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Failed to fetch data inside Cardlist");

    const data = await response.json();
    // console.log("-------------------------", data);
    return data;
  } catch (error) {
    console.error("Error fetching data inside Cardlist:", error);
    throw error;
  }
};

const Cardlist = async ({ page, category }) => {
  const { posts, count } = await getData(page, category);
  const POST_PER_PAGE = 2;

  const previous = POST_PER_PAGE * (page - 1) > 0;
  const next = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 style={{ color: "lime" }}>CardListComponent</h1>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.wrapper}>
        {posts?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <Pagination page={page} previous={previous} next={next} />
    </div>
  );
};
export default Cardlist;
