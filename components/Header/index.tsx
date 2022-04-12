import styles from "./styles.module.scss";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const logo = "<Thiago Torres/>";
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav(navState: boolean) {
    setMobileNav(navState);
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <h1>{logo}</h1>
      </div>
      <div className={styles.navButtons}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="#about">
          <a>Sobre</a>
        </Link>
        <Link href="#skills">
          <a>Skills</a>
        </Link>
        <Link href="#projects">
          <a>Projetos</a>
        </Link>
        <Link href="#contactme">
          <a>Contato</a>
        </Link>
        <Link href="https://github.com/mevzin">
          <a target="blank">Repositórios</a>
        </Link>
      </div>
      <div className={styles.mobileNav}>
        <AiOutlineMenu onClick={() => handleMobileNav(!mobileNav)} />
        {mobileNav && (
          <div className={styles.mobileNavContainer}>
            <AiOutlineCloseCircle onClick={() => handleMobileNav(!mobileNav)} />
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="#about">
              <a>Sobre</a>
            </Link>
            <Link href="#skills">
              <a>Skills</a>
            </Link>
            <Link href="#projects">
              <a>Projetos</a>
            </Link>
            <Link href="#contactme">
              <a>Entre em contato</a>
            </Link>
            <Link href="https://github.com/mevzin">
              <a target="blank">Repositórios</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
