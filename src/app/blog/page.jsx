import Cardlist from "../../components/CardList/CardList";
import styles from "./page.module.css";
import Menu from "../../components/Menu/Menu";

export default function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <Cardlist page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
}
