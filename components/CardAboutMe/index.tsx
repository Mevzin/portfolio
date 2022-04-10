import styles from "./styles.module.scss";

export default function CardAboutMe() {
  return (
    <div className={styles.containerCard}>
      <div className={styles.contentCard}>
        <h1> About me </h1>
        <p>
          {" "}
          Tive meu primeiro contato com programação em 2015 quando tinha meus 15
          anos e estava ingressando no ensino médio, como a maioria das pessoas
          começam em desenvolvimento web também iniciei copiando códigos html e
          css de alguns sites e ficava super feliz quando funcionava. Em 2018
          entrei para a faculdade de analise e desenvolvimento de sistemas na
          Universidade Vale do Salgado e no decorrer do curso aprendi muitas
          coisas novas e também inúmeras possibilidades para o mundo web ...
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}
