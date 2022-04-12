import styles from "./styles.module.scss";

export default function CardAboutMe() {
  return (
    <div id="about" className={styles.containerCard}>
      <div className={styles.contentCard}>
        <h1> Sobre </h1>
        <p>
          {" "}
          Ola meu nome é Thiago Torres, tenho 22 anos
          moro em Iguatu CE, trabalho com front end há 3 anos
          sou formado em Analise e Desenvolvimento de sistemas
          pela Universidade Vale do Salgado e estou sempre em busca
          de aprender mais e evoluir tanto como pessoa quanto como dev!
        </p>
        <a href="https://www.linkedin.com/in/thiagotorresmev/" target="blank">LinkedIn</a>
      </div>
    </div>
  );
}
