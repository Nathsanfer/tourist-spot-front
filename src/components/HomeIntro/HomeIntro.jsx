"use client";

import Link from "next/link";
import styles from "./HomeIntro.module.css";
import { FaHeart, FaMapMarkedAlt, FaUsers, FaStar } from "react-icons/fa";

export default function HomeIntro() {
  return (
    <section id="intro-section" className={styles.intro}>
      <div className={styles.container}>
        {/* Apresentação Principal */}
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Bem-vindo ao seu guia de sonhos pelo Brasil
            </h2>
            <p className={styles.description}>
              Somos apaixonados pelas belezas naturais e culturais do Brasil. Este site nasceu 
              do sonho de conectar pessoas que, assim como nós, têm uma vontade imensa de 
              descobrir os tesouros escondidos do nosso país.
            </p>
            <p className={styles.description}>
              Cada destino aqui catalogado foi cuidadosamente pesquisado para inspirar 
              sua próxima aventura. Queremos ser seu companheiro na jornada de planejar 
              e realizar os sonhos de viagem pelo Brasil.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <FaHeart className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Paixão Genuína</h4>
                  <p className={styles.featureDescription}>
                    Cada local é pesquisado com amor e dedicação
                  </p>
                </div>
              </div>
              
              <div className={styles.feature}>
                <FaMapMarkedAlt className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Organização por Região</h4>
                  <p className={styles.featureDescription}>
                    Explore as 5 regiões brasileiras de forma estruturada
                  </p>
                </div>
              </div>
              
              <div className={styles.feature}>
                <FaUsers className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Comunidade de Sonhadores</h4>
                  <p className={styles.featureDescription}>
                    Conecte-se com outros apaixonados pelo Brasil
                  </p>
                </div>
              </div>
              
              <div className={styles.feature}>
                <FaStar className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Avaliações Detalhadas</h4>
                  <p className={styles.featureDescription}>
                    Informações confiáveis para suas decisões
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/sobre" className={styles.learnMoreButton}>
              Conheça Nossa História
            </Link>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageGrid}>
              <img src="/images/sudeste/image4.png" alt="Paisagem brasileira" className={styles.gridImage} />
              <img src="/images/norte/image1.png" alt="Cultura brasileira" className={styles.gridImage} />
              <img src="/images/hero3.png" alt="Cataratas" className={styles.gridImage} />
            </div>
            
            <div className={styles.imageStats}>
              <div className={styles.imageStat}>
                <span className={styles.imageStatNumber}>100%</span>
                <span className={styles.imageStatLabel}>Brasileiro</span>
              </div>
              <div className={styles.imageStat}>
                <span className={styles.imageStatNumber}>24/7</span>
                <span className={styles.imageStatLabel}>Disponível</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção de Missão */}
        <div className={styles.missionSection}>
          <h3 className={styles.missionTitle}>Nossa Missão</h3>
          <p className={styles.missionText}>
            "Inspirar brasileiros a descobrirem as maravilhas do nosso país, oferecendo 
            informações confiáveis e organizadas para que cada pessoa possa planejar 
            e realizar seus sonhos de viagem pelo Brasil."
          </p>
          <div className={styles.missionAuthor}>
            <img 
              src="https://avatars.githubusercontent.com/u/158168917?v=4" 
              alt="Nathalia Santos" 
              className={styles.authorImage}
            />
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Nathalia Santos Ferreira</span>
              <span className={styles.authorRole}>Fundadora & Sonhadora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}