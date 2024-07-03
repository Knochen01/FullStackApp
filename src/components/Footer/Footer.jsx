import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.imageWrapper}>
          <div className={styles.logo}>
            <Image src={"/logo.png"} alt="logo" fill className={styles.image} />
          </div>
          <h1 className={styles.title}>MariansBLOG</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          deleniti, quidem molestias illum assumenda totam velit recusandae
          eveniet commodi quo quis expedita autem ducimus vel fugit enim beatae
          iste et!
        </p>
        <div className={styles.social}>
          <Image src={"/tiktok.png"} alt="tiktok" width={18} height={18} />
          <Image src={"/facebook.png"} alt="facebook" width={18} height={18} />
          <Image src={"/youtube.png"} alt="youtube" width={18} height={18} />
          <Image
            src={"/instagram.png"}
            alt="instagram"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.leftWrapper}>
          <h3 className={styles.linkTitle}>Links</h3>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className={styles.leftWrapper}>
          <h3 className={styles.linkTitle}>Tags</h3>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.leftWrapper}>
          <h3 className={styles.linkTitle}>Social</h3>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
}
