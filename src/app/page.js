import Featured from "../components/Featured/Featured";
import styles from "./page.module.css";

import Categorylist from "../components/CategoryList/CategoryList";
import Cardlist from "../components/CardList/CardList";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
