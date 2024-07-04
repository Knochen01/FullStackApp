import Cardlist from "@/components/CardList/CardList";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
