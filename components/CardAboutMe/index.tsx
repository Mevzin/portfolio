import styles from "./styles.module.scss";

export default function CardAboutMe() {
  return (
    <div className={styles.containerCard}>
      <div className={styles.contentCard}>
        <h1> About me </h1>
        <p>
          {" "}
          Ola meu nome é Thiago Torres, tenho 22 anos
          moro em Iguatu CE, trabalho com front end há 3 anos
          sou formado em Analise e Desenvolvimento de sistemas
          pela Universidade Vale do Salgado e estou sempre em busca
          de aprender mais e evoluir tanto como pessoa quanto como dev!
        </p>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
