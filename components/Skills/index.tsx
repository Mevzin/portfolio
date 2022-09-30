import React from "react";
import styles from "./styles.module.scss";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSass,
  SiReact,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1>My Skills</h1>
      <div className={styles.skills}>
        <div className={styles.htmlSet}>
          <SiHtml5 />
        </div>
        <div className={styles.cssSet}>
          <SiCss3 />
        </div>
        <div className={styles.javascriptSet}>
          <SiJavascript />
        </div>
        <div className={styles.typescriptSet}>
          <SiTypescript />
        </div>
        <div className={styles.reactSet}>
          <SiReact />
        </div>
        <div className={styles.nodeSet}>
          <SiNodedotjs />
        </div>
      </div>
    </div>
  );
}
