import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <h1>Thiago Torres</h1>
      </div>
      <div className={styles.navButtons}>
        <ActiveLink activeClassName={styles.active} href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="#">
          <a>Projects</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="#">
          <a>About</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="#skills">
          <a>Skills</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="#">
          <a>Repositories</a>
        </ActiveLink>
      </div>
    </div>
  );
}
