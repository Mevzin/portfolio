/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from "./home.module.scss";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <section className={styles.text}>
        
          <h1>
            Hi my name is
            <span> Thiago Torres </span>
            and I'm a developer Front End
          </h1>
        </section>
        <img src="/assets/profile.png" alt="Profile photo" />
      </div>
    </div>
  );
}
