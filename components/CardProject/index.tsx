import styles from "./styles.module.scss";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiSass,
  SiReact,
  SiAngularjs,
} from "react-icons/si";

import { VscGithub } from "react-icons/vsc";

interface IProjectProps {
  imageUrl?: string;
  title?: string;
  viewUrl?: string;
  codeUrl?: string;
  languages: string[];
}

export default function CardProject({
  imageUrl,
  title,
  codeUrl,
  languages,
  viewUrl,
}: IProjectProps) {
  
  function iconValid(iconName: string) {
    switch (iconName) {
      case "react":
        return <SiReact />;
      case "angular":
        return <SiAngularjs />;
      case "javascript":
        return <SiJavascript />;
      case "typescript":
        return <SiTypescript />;
      case "nodejs":
        return <SiNodedotjs />;
      case "scss":
        return <SiSass />;
      case "html":
        return <SiHtml5 />;
    }
  }

  return (
    <div className={styles.containerCard}>
      {imageUrl ? <img src="/assets/HomeIgnews.png" alt="ignews" /> : <VscGithub />}
      <div className={styles.footerCard}>
        <div className={styles.actionsCard}>
          <h1>Ignews</h1>
          <div className={styles.buttonsAction}>
            {codeUrl ? <a href={codeUrl} target="blank">Code</a> : null}
            {viewUrl ? <a href={viewUrl} target="blank">View</a> : null}
          </div>
        </div>
        <div className={styles.languagesIcons}>
          {languages.map((language) =>  iconValid(language) )}
        </div>
      </div>
    </div>
  );
}
