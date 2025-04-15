import styles from "./filmList.module.css";

const FilmList = () => {
  const films = [
    {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      director: "Hayao Miyazaki",
      release_date: "1986",
      rt_score: "95",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    },
    {
      id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
      title: "Grave of the Fireflies",
      original_title: "火垂るの墓",
      director: "Isao Takahata",
      release_date: "1988",
      rt_score: "97",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
    },
    {
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      original_title: "となりのトトロ",
      director: "Hayao Miyazaki",
      release_date: "1988",
      rt_score: "93",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    },
    {
      id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      title: "Kiki's Delivery Service",
      original_title: "魔女の宅急便",
      director: "Hayao Miyazaki",
      release_date: "1989",
      rt_score: "96",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    },
    {
      id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      title: "Only Yesterday",
      original_title: "おもひでぽろぽろ",
      director: "Isao Takahata",
      release_date: "1991",
      rt_score: "100",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
    },
    {
      id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      title: "Porco Rosso",
      original_title: "紅の豚",
      director: "Hayao Miyazaki",
      release_date: "1992",
      rt_score: "94",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Filmes do Studio Ghibli</h1>
      <div className={styles.filmGrid}>
        {films.map((film) => (
          <div key={film.id} className={styles.filmCard}>
            <div className={styles.imageContainer}>
              <img src={film.image} alt={film.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.filmTitle}>{film.title}</h2>
              <p className={styles.director}>Diretor: {film.director}</p>
              <p className={styles.year}>{film.release_date}</p>
              <div className={styles.rating}>
                <span className={styles.score}>{film.rt_score}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmList;