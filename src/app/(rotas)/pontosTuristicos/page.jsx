import styles from "./pontosTuristicos.module.css";
import Image from "next/image";

import Header from "../../../components/header/page.jsx";
import Banner from "../../../components/banner/page.jsx";

export default function PontosTuristicos() {
    return (
        <div>

            <Header />

            <Banner />

            <section className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Encontre pontos turísticos..."
                            className={styles.searchInput}
                        />
                        <button className={styles.searchButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.filterButtons}>
                        <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
                        <button className={styles.filterBtn}>Norte</button>
                        <button className={styles.filterBtn}>Nordeste</button>
                        <button className={styles.filterBtn}>Centro-Oeste</button>
                        <button className={styles.filterBtn}>Sudeste</button>
                        <button className={styles.filterBtn}>Sul</button>
                    </div>
                </div>
            </section>

            <section className={styles.cardsSection}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/hero1.png"
                                alt="Cidade Histórica de Olinda"
                                width={280}
                                height={180}
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardRegion}>Nordeste</span>
                                <span className={styles.cardDate}>05/09/2025</span>
                            </div>
                            <h3 className={styles.cardTitle}>Cidade Histórica de Olinda</h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/hero1.png"
                                alt="Cidade Histórica de Olinda"
                                width={280}
                                height={180}
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardRegion}>Nordeste</span>
                                <span className={styles.cardDate}>05/09/2025</span>
                            </div>
                            <h3 className={styles.cardTitle}>Cidade Histórica de Olinda</h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/hero1.png"
                                alt="Cidade Histórica de Olinda"
                                width={280}
                                height={180}
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardRegion}>Nordeste</span>
                                <span className={styles.cardDate}>05/09/2025</span>
                            </div>
                            <h3 className={styles.cardTitle}>Cidade Histórica de Olinda</h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/hero1.png"
                                alt="Cidade Histórica de Olinda"
                                width={280}
                                height={180}
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardRegion}>Nordeste</span>
                                <span className={styles.cardDate}>05/09/2025</span>
                            </div>
                            <h3 className={styles.cardTitle}>Cidade Histórica de Olinda</h3>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
