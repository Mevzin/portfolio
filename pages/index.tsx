/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import CardAboutMe from "../components/CardAboutMe";
import CardProjects from "../components/CardProjects";
import ContactMe from "../components/ContactMe";
import ProgressBarSkills from "../components/ProgressBarSkills/inde";
import Skills from "../components/Skills";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home" className={styles.bannerContainer}>
        <div className={styles.text}>
          <h1>
            Olá meu nome é
            <span> Thiago Torres </span>
            e sou desenvolvedor Front End
          </h1>
        </div>
        <img src="/assets/profile.png" alt="Profile photo" />
      </div >
      <CardAboutMe />
      <Skills />
      {/* <div id="skills" className={styles.skillsContainer}>
        <h1>Skills</h1>
        <div className={styles.skillsContent}>
          <div className={styles.left}>
            <ProgressBarSkills
              title="HTML"
              value={98}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Css"
              value={96}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Javascript"
              value={96}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="React Js"
              value={90}
              color="var(--purple-900)"
            />
          </div>
          <div className={styles.right}>
            <ProgressBarSkills
              title="React Nt"
              value={98}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Node Js"
              value={90}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Typescript"
              value={96}
              color="var(--purple-900)"
            />
            <ProgressBarSkills
              title="Styled Comp."
              value={98}
              color="var(--purple-900)"
            />
          </div>
        </div>
      </div> */}
        <CardProjects />
        <ContactMe />
    </div>
  );
}
