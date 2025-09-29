"use client";

import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre Nathalia Santos</h1>
          <p className={styles.heroSubtitle}>
            Sonhadora apaixonada pelo Brasil e suas belezas inexploradas
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Destinos dos Sonhos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Regiões para Explorar</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Vontade de Descobrir</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <img 
          src="/images/norte/image2.png" 
          alt="Paisagem brasileira" 
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}