import styles from "./cardlist.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

export default function Cardlist() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "lime" }}>CardListComponent</h1>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
