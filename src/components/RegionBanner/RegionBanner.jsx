import styles from "./regionBanner.module.css";
import Image from "next/image";

function RegionBanner() {
    return (
        <section className={styles.container}>
            <div className={styles.highlights}>
                <p className={styles.item}>Praias Paradisíacas</p>
                <p className={styles.item}>Cultura Vibrante</p>
                <p className={styles.item}>Gastronomia Única</p>
                <p className={styles.item}>Aventura e Natureza</p>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Região Nordeste</h1>
                    <Image
                        src="/images/hero3.png"
                        alt="Região Nordeste"
                        width={350}
                        height={400}
                        className={styles.img}
                    />
                </div>
                <div className={styles.right}>
                    <p className={styles.text}>Explore as belezas naturais, a cultura vibrante e a deliciosa gastronomia da região Nordeste do Brasil.</p>
                    <Image
                        src="/images/hero1.png"
                        alt="Região Nordeste"
                        width={480}
                        height={260}
                        className={styles.img}
                    />
                    <p className={styles.textHighlight}>Conheça lugares incríveis como as praias de Jericoacoara e a Chapada dos Veadeiros.</p>
                    <div className={styles.buttonContainer}>
                        <p>Saiba Mais</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegionBanner;