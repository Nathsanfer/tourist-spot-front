"use client";

import styles from "./ContactHero.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Entre em Contato</h1>
          <p className={styles.heroSubtitle}>
            Vamos conversar sobre os destinos dos seus sonhos no Brasil
          </p>
          
          <div className={styles.heroInfo}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>nathaliasantos@email.com</span>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infoValue}>Brasil</span>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Resposta</span>
                <span className={styles.infoValue}>24-48 horas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <img 
          src="/images/hero2.png" 
          alt="Paisagem brasileira" 
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}