"use client";

import Link from "next/link";
import styles from "./HomeHero.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function HomeHero() {
  const scrollToNext = () => {
    document.getElementById('intro-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.imageContainer}>
          <img src="/images/centro-oeste/image3.png" alt="Brasil" className={styles.heroImage} />
          <img src="/images/sudeste/image2.png" alt="Brasil" className={styles.heroImage} />
          <img src="/images/sul/image1.png" alt="Brasil" className={styles.heroImage} />
        </div>
      </div>
      
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <div className={styles.logoSection}>
            <h1 className={styles.siteName}>Brasil Turístico</h1>
            <div className={styles.tagline}>Descubra as maravilhas do nosso país</div>
          </div>
          
          <div className={styles.mainContent}>
            <h2 className={styles.heroTitle}>
              Explore o <span className={styles.highlight}>Brasil</span> dos seus sonhos
            </h2>
            <p className={styles.heroDescription}>
              Descubra destinos incríveis, paisagens de tirar o fôlego e experiências 
              únicas em cada região do Brasil. Sua próxima aventura começa aqui.
            </p>
            
            <div className={styles.heroButtons}>
              <Link href="/pontosTuristicos" className={styles.primaryButton}>
                Explorar Destinos
              </Link>
              <Link href="/sobre" className={styles.secondaryButton}>
                Conhecer História
              </Link>
            </div>
            
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>Regiões</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Destinos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Sonhos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button className={styles.scrollButton} onClick={scrollToNext}>
        <FaChevronDown className={styles.scrollIcon} />
      </button>
    </section>
  );
}