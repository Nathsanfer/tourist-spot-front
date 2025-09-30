"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Spin } from "antd";
import styles from "./HomeTopSpots.module.css";
import { FaStar, FaMapMarkerAlt, FaEye } from "react-icons/fa";

export default function HomeTopSpots() {
  const [topSpots, setTopSpots] = useState([]);
  const [topSpotDetails, setTopSpotDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTopSpots() {
      try {
        const res = await fetch("http://localhost:5000/pontos-turisticos");
        if (!res.ok) throw new Error("Erro ao buscar pontos turísticos");
        const data = await res.json();
        
        // Ordenar por rating e pegar os top 6
        const sortedSpots = data
          .filter(spot => spot.rating && parseFloat(spot.rating) > 0)
          .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
          .slice(0, 6);
        
        setTopSpots(sortedSpots);

        // Buscar detalhes completos do ponto turístico com maior nota
        if (sortedSpots.length > 0) {
          const topSpotId = sortedSpots[0].id;
          const detailRes = await fetch(`http://localhost:5000/pontos-turisticos/${topSpotId}`);
          if (detailRes.ok) {
            const detailData = await detailRes.json();
            setTopSpotDetails(detailData);
          }
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTopSpots();
  }, []);

  const renderStars = (rating) => {
    const numRating = parseFloat(rating) || 0;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (numRating >= i) {
        stars.push(<FaStar key={i} className={styles.starFull} />);
      } else if (numRating >= i - 0.5) {
        stars.push(<FaStar key={i} className={styles.starHalf} />);
      } else {
        stars.push(<FaStar key={i} className={styles.starEmpty} />);
      }
    }
    
    return stars;
  };

  if (loading) {
    return (
      <section className={styles.topSpots}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Destinos Mais Bem Avaliados</h2>
          </div>
          <div className={styles.loadingContainer}>
            <Spin size="large" />
            <p>Carregando os melhores destinos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.topSpots}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Destinos Mais Bem Avaliados</h2>
          </div>
          <div className={styles.errorContainer}>
            <p>Erro ao carregar destinos: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.topSpots}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Destinos Mais Bem Avaliados</h2>
          <p className={styles.subtitle}>
            Descubra os lugares que conquistaram o coração dos visitantes com as melhores avaliações
          </p>
        </div>

        <div className={styles.spotsGrid}>
          {topSpots.map((spot, index) => (
            <Link 
              key={spot.id} 
              href={`/pontosTuristicos/${spot.id}`}
              className={`${styles.spotCard} ${index === 0 ? styles.featured : ''}`}
            >
              <div className={styles.spotImage}>
                <img src={spot.imageUrl || "/images/fallback.png"} alt={spot.name} />
                <div className={styles.spotRank}>#{index + 1}</div>
                <div className={styles.spotOverlay}>
                  <div className={styles.overlayContent}>
                    <FaEye className={styles.viewIcon} />
                    <span>Ver Detalhes</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.spotContent}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{spot.name}</h3>
                  <div className={styles.spotLocation}>
                    <FaMapMarkerAlt className={styles.locationIcon} />
                    <span>{spot.region}</span>
                  </div>
                </div>
                
                <p className={styles.spotDescription}>
                  {spot.description ? 
                    spot.description.substring(0, 100) + "..." : 
                    "Descubra este destino incrível e suas belezas únicas."
                  }
                </p>
                
                <div className={styles.spotRating}>
                  <div className={styles.stars}>
                    {renderStars(spot.rating)}
                  </div>
                  <span className={styles.ratingValue}>({spot.rating})</span>
                </div>

                {/* Mostrar informações extras apenas para o card com maior nota */}
                {index === 0 && topSpotDetails && topSpotDetails.sections && topSpotDetails.sections.length > 0 && (
                  <div className={styles.extraInfo}>
                    <div className={styles.extraInfoHeader}>
                      <h4 className={styles.extraInfoTitle}>Destaques especiais</h4>
                    </div>
                    <div className={styles.sectionsPreview}>
                      {topSpotDetails.sections.slice(0, 2).map((section, sectionIndex) => (
                        <div key={section.id} className={styles.sectionPreview}>
                          <h5 className={styles.sectionPreviewTitle}>{section.title}</h5>
                          <p className={styles.sectionPreviewText}>
                            {section.text.substring(0, 120)}...
                          </p>
                        </div>
                      ))}
                      {topSpotDetails.sections.length > 2 && (
                        <div className={styles.moreInfoIndicator}>
                          +{topSpotDetails.sections.length - 2} seções adicionais
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.seeMoreSection}>
          <h3 className={styles.seeMoreTitle}>Quer ver mais destinos incríveis?</h3>
          <p className={styles.seeMoreDescription}>
            Explore nossa coleção completa de pontos turísticos organizados por região
          </p>
          <Link href="/pontosTuristicos" className={styles.seeMoreButton}>
            Ver Todos os Destinos
          </Link>
        </div>
      </div>
    </section>
  );
}