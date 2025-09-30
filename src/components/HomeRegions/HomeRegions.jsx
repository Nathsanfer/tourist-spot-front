"use client";

import Link from "next/link";
import styles from "./HomeRegions.module.css";

export default function HomeRegions() {
  const regions = [
    {
      name: "Norte",
      description: "Amazônia e suas maravilhas naturais",
      image: "/images/norte/image2.png",
      highlights: ["Floresta Amazônica", "Rios Majestosos", "Biodiversidade Única"],
      color: "#2d5a2d"
    },
    {
      name: "Nordeste", 
      description: "Praias paradisíacas e cultura vibrante",
      image: "/images/nordeste/image2.png",
      highlights: ["Praias Deslumbrantes", "Cultura Rica", "Sol o Ano Todo"],
      color: "#1e4d72"
    },
    {
      name: "Centro-Oeste",
      description: "Pantanal e cerrado exuberantes", 
      image: "/images/centro-oeste/image4.png",
      highlights: ["Pantanal", "Cerrado", "Vida Selvagem"],
      color: "#2d5a2d"
    },
    {
      name: "Sudeste",
      description: "Diversidade entre montanhas e praias",
      image: "/images/sudeste/image4.png", 
      highlights: ["Cidades Históricas", "Montanhas", "Praias Urbanas"],
      color: "#1e4d72"
    },
    {
      name: "Sul",
      description: "Charme europeu e natureza preservada",
      image: "/images/sul/image3.png",
      highlights: ["Serra Gaúcha", "Cultura Germânica", "Vinícolas"],
      color: "#5d4e75"
    }
  ];

  return (
    <section className={styles.regions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Explore as 5 Regiões do Brasil</h2>
          <p className={styles.subtitle}>
            Cada região possui suas próprias belezas, culturas e experiências únicas. 
            Descubra qual será sua próxima aventura!
          </p>
        </div>
        
        <div className={styles.regionsGrid}>
          {regions.map((region, index) => (
            <div 
              key={region.name} 
              className={`${styles.regionCard} ${styles[`position${index + 1}`]}`}
              style={{ '--region-color': region.color }}
            >
              <div className={styles.regionImage}>
                <img 
                  src={region.image} 
                  alt={`Região ${region.name} - ${region.description}`}
                  loading="lazy"
                />
                <div className={styles.regionOverlay}>
                  <div className={styles.regionContent}>
                    <h3 className={styles.regionName}>{region.name}</h3>
                    <p className={styles.regionDescription}>{region.description}</p>
                    
                    <div className={styles.regionHighlights}>
                      {region.highlights.map((highlight, i) => (
                        <span key={i} className={styles.highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/pontosTuristicos?regiao=${region.name.toLowerCase()}`} 
                      className={styles.exploreButton}
                    >
                      Explorar {region.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.regionsCTA}>
          <h3 className={styles.ctaTitle}>Pronto para começar sua jornada?</h3>
          <p className={styles.ctaDescription}>
            Explore todos os destinos organizados por região e comece a planejar sua aventura dos sonhos.
          </p>
          <Link href="/pontosTuristicos" className={styles.ctaButton}>
            Ver Todos os Destinos
          </Link>
        </div>
      </div>
    </section>
  );
}