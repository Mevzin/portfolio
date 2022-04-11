import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>
        © 2022 <a href="https://github.com/mevzin" target="blank">Mevzin</a>.
      </p>
    </div>
  );
}
