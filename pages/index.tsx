/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import CardAboutMe from "../components/CardAboutMe";
import ProgressBarSkills from "../components/ProgressBarSkills/inde";
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
      <CardAboutMe />
      <div id="skills" className={styles.skillsContainer}>
        <h1>Skills</h1>
        <div className={styles.skillsContent}>
          <div className={styles.left}>
            <ProgressBarSkills 
              title="HTML" 
              value={29} 
              color="var(--purple-900)" 
            />
            <ProgressBarSkills 
              title="Css" 
              value={29} 
              color="var(--purple-900)" 
            />
            <ProgressBarSkills
              title="Javascript"
              value={29}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="React Js"
              value={29}
              color="var(--purple-900)"
            />
          </div>
          <div className={styles.right}>
            <ProgressBarSkills
              title="React Nt"
              value={29}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Node Js"
              value={29}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Typescript"
              value={29}
              color="var(--purple-900)"
            />       
            <ProgressBarSkills
              title="Styled Comp."
              value={29}
              color="var(--purple-900)"
          /> 
          </div>
        </div>
       <ProgressBarSkills
          title="Sass"
          value={29}
          color="var(--purple-900)"
       />
      </div>
    </div>
  );
}
