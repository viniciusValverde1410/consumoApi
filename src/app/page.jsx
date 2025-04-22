import FilmList from "../components/filmList";
import styles from "./page.module.css";
import StarShipList from "../components/starShipList";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <StarShipList />
        <FilmList />
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido durante o curso de Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
}