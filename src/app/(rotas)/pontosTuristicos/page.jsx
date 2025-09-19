"use client";

import { useEffect, useState } from "react";
import styles from "./pontosTuristicos.module.css";

import Header from "../../../components/Header/Header.jsx";
import Banner from "../../../components/Banner/Banner.jsx";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";

export default function PontosTuristicos() {
    const [spots, setSpots] = useState([]);   // pontos turísticos
    const [loading, setLoading] = useState(true); // estado de carregamento
    const [error, setError] = useState(null); // erros da API

    useEffect(() => {
        async function fetchSpots() {
            try {
                const res = await fetch("http://localhost:5000/pontos-turisticos");
                if (!res.ok) throw new Error("Erro ao buscar pontos turísticos");
                const data = await res.json();
                setSpots(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchSpots();
    }, []);


return (
    <div>
        <Header />
        <Banner />

        <SearchBar />

        {/* Seção dos cards */}
        <section className={styles.cardsSection}>
            <div className={styles.cardsContainer}>
                {loading && <p>Carregando pontos turísticos...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {!loading && !error && spots.length === 0 && (
                    <p>Nenhum ponto turístico encontrado.</p>
                )}

                {!loading &&
                    !error &&
                    spots.map((spot) => (
                        <div key={spot.id} className={styles.card}>
                            <div className={styles.cardImage}>
                                {/* fallback de imagem */}
                                <img
                                    src={spot.imageUrl || "/images/fallback.png"}
                                    alt={spot.name}
                                    width={280}
                                    height={180}
                                    className={styles.cardImg}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardInfo}>
                                    <span className={styles.cardRegion}>{spot.region}</span>
                                    {/* Mostra a data bruta vinda da API */}
                                    <span className={styles.cardDate}>
                                        {spot.createdAt ? spot.createdAt.slice(0, 10) : ""}
                                    </span>
                                </div>
                                <h3 className={styles.cardTitle}>{spot.name}</h3>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    </div>
);
}
