'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./starShipList.module.css";
import Loading from "../loading/index.jsx";

export default function StarShipList() {
    const url = "https://api.jikan.moe/v4/anime";

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilms =  async () => {
            try{
                setLoading(true);
                const response = await axios.get(url);
                setFilms(response.data.data);
                setLoading(false)
            }catch(error){
                console.log("Erro ao buscar filmes na API");
                setError("Não foi possível carregar os filmes.");
                setLoading(false);
            };
        };
        fetchFilms();
    }, [] );
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Filmes do Studio Ghibli</h1>

            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className={styles.filmGrid}>
                    {films.map((film) => (
                        <div key={film.mal_id} className={styles.filmCard}>
                            <div className={styles.imageContainer}>
                                <img src={film.images.jpg.image_url} alt={film.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.filmTitle}>{film.title}</h2>
                                <p className={styles.director}>Titulo em Japonês: {film.title_japanese}</p>
                                <p className={styles.year}>{film.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}            
        </div>
    );
}