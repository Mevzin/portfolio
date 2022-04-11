import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <h1>Thiago Torres</h1>
      </div>
      <div className={styles.navButtons}>
        <a className={styles.active} href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#skills">Skills</a>
        <a href="#">Repositories</a>
      </div>
    </div>
  );
}
