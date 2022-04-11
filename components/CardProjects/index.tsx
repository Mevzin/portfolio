import CardProject from '../CardProject';
import styles from './styles.module.scss'

export default function CardProjects() {

  return (
    <div className={styles.containerCard}>
      <h1>Projects</h1>
      <div className={styles.contentCard}>
        <CardProject 
          title="Ignews"
          codeUrl="https://github.com/Mevzin/ignews"
          languages={['react', 'typescript',]}
          viewUrl="aa"
        />
      </div>
    </div>
  );
}