import styles from "./styles.module.scss";

export default function CardAboutMe() {
  return (
    <div id="about" className={styles.containerCard}>
      <div className={styles.contentCard}>
        <h1> Sobre </h1>
        <p>
          {" "}
          Ola meu nome é Thiago Torres, tenho 22 anos
          moro em Iguatu CE, sou formado em analise e desenvolvimento
          de sistemas pela Universidade Vale do Salgado e trabalho com
          front end há 3 anos e com back end a menos de 1 ano. Estou
          sempre buscando aprender e melhorar minhas habilidades para
          evoluir tanto como pessoa como também dev.
        </p>
        <a href="https://www.linkedin.com/in/thiagotorresmev/" target="blank">LinkedIn</a>
      </div>
    </div>
  );
}
