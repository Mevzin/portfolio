import CardProject from "../CardProject";
import styles from "./styles.module.scss";

export default function CardProjects() {
  return (
    <div id="projects" className={styles.containerCard}>
      <h1>Projects</h1>
      <div className={styles.contentCard}>
        <CardProject
          imageUrl="/assets/Homeignews.png"
          title="Ignews"
          codeUrl="https://github.com/Mevzin/ignews"
          languages={["nextjs", "typescript", "scss"]}
        />
        <CardProject
          title="Todo List"
          codeUrl="https://github.com/Mevzin/todo-reactjs"
          languages={["react", "typescript"]}
        />
        <CardProject
          imageUrl="/assets/goFinances.png"
          title="GoFinances"
          codeUrl="https://github.com/Mevzin/gofinances"
          languages={["react", "typescript", "styled-components", "android"]}
        />
        <CardProject
          title="dt Money"
          codeUrl="https://github.com/Mevzin/dt-money"
          languages={["react", "typescript", "styled-components"]}
        />
        <CardProject
          title="Conecta Dev"
          codeUrl="https://github.com/Mevzin/reactjs-conectadev"
          languages={["react", "javascript"]}
        />
        <CardProject
          imageUrl="/assets/insta.png"
          title="Clone Instagram"
          codeUrl="https://github.com/Mevzin/instagram-dio"
          languages={["html", "css"]}
          viewUrl="https://mevzin.github.io/instagram-dio/"
        />
      </div>
      <a href="https://github.com/mevzin" target="blank">
        View more projects
      </a>
    </div>
  );
}
