import styles from "./RegionBanner.module.css";
import Image from "next/image";

function RegionBanner() {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.containerInfo}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>Região Nordeste</h1>
                        <p className={styles.subtitle}>O melhor do Nordeste em um só lugar</p>
                        <Image
                            src="/images/hero3.png"
                            alt="Região Nordeste"
                            width={340}
                            height={380}
                            className={styles.imgLeft}
                        />
                    </div>
                    <div className={styles.right}>
                        <p className={styles.text}>Explore as belezas naturais, a cultura vibrante e a deliciosa gastronomia da região Nordeste do Brasil.</p>
                        {/* Duas imagens lado a lado */}
                        <div className={styles.mediaRow}>
                            <div className={styles.mediaCard}>
                                <span className={styles.mediaBadge}>Top destinos</span>
                                <Image
                                    src="/images/hero1.png"
                                    alt="Praia no Nordeste"
                                    width={460}
                                    height={250}
                                    className={styles.imgRight}
                                />
                            </div>
                            <div className={styles.mediaCard}>
                                <span className={styles.mediaBadge}>Em alta</span>
                                <Image
                                    src="/images/hero2.png"
                                    alt="Paisagem do Nordeste"
                                    width={460}
                                    height={250}
                                    className={styles.imgRight}
                                />
                            </div>
                        </div>
                        <p className={styles.textHighlight}>Conheça lugares incríveis como as praias de Jericoacoara e a Chapada dos Veadeiros.</p>
                        <div className={styles.highlights}>
                            <p className={styles.item}>Praias Paradisíacas</p>
                            <p className={styles.item}>Cultura Vibrante</p>
                            <p className={styles.item}>Gastronomia Única</p>
                            <p className={styles.item}>Aventura e Natureza</p>
                        </div>
                        {/* CTA removido conforme solicitação */}
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statIcon} aria-hidden>🏖️</span>
                            <h3 className={styles.statNumber}>+300</h3>
                            <p className={styles.statLabel}>Praias catalogadas</p>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statIcon} aria-hidden>🗺️</span>
                            <h3 className={styles.statNumber}>9</h3>
                            <p className={styles.statLabel}>Estados</p>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statIcon} aria-hidden>🌡️</span>
                            <h3 className={styles.statNumber}>24ºC</h3>
                            <p className={styles.statLabel}>Média anual</p>
                        </div>
                        {/* Novos stats */}
                        <div className={styles.stat}>
                            <span className={styles.statIcon} aria-hidden>📍</span>
                            <h3 className={styles.statNumber}>1.2k+</h3>
                            <p className={styles.statLabel}>Pontos turísticos</p>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statIcon} aria-hidden>⭐</span>
                            <h3 className={styles.statNumber}>2.5k+</h3>
                            <p className={styles.statLabel}>Avaliações</p>
                        </div>
                    </div>
                    {/* Imagem vertical adicionada após a seção de stats */}
                    <div className={styles.tallWrapper}>
                        <Image
                            src="/images/hero5.png"
                            alt="Imagem vertical de destaque"
                            width={160}
                            height={480}
                            className={styles.imgTall}
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default RegionBanner;