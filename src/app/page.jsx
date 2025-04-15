import FilmList from "../components/filmList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <FilmList />
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido durante o curso de Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
}
