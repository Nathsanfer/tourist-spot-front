"use client";

import { useEffect, useState } from "react";
import { Spin } from "antd";
import styles from "./TouristSpotDetail.module.css";
import HeroArticle from "@/components/HeroArticle/HeroArticle.jsx";

export default function TouristSpotDetail({ spotId }) {
  const [spot, setSpot] = useState(null);
  const [relatedSpots, setRelatedSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Buscar detalhes do ponto turístico atual
        const spotRes = await fetch(`http://localhost:5000/pontos-turisticos/${spotId}`);
        if (!spotRes.ok) throw new Error("Erro ao buscar detalhes do ponto turístico");
        const spotData = await spotRes.json();
        setSpot(spotData);

        // Buscar pontos turísticos relacionados
        const allSpotsRes = await fetch("http://localhost:5000/pontos-turisticos");
        if (allSpotsRes.ok) {
          const allSpotsData = await allSpotsRes.json();
          
          // Primeiro, pegar pontos da mesma região
          const sameRegion = allSpotsData
            .filter(relatedSpot => 
              relatedSpot.region === spotData.region && 
              relatedSpot.id !== spotData.id
            );
          
          // Se não tiver 12 da mesma região, completar com outros
          let related = [...sameRegion];
          
          if (related.length < 12) {
            const otherRegions = allSpotsData
              .filter(relatedSpot => 
                relatedSpot.region !== spotData.region && 
                relatedSpot.id !== spotData.id
              );
            
            // Adicionar pontos de outras regiões até completar 12
            related = [...related, ...otherRegions].slice(0, 6);
          } else {
            related = related.slice(0, 12);
          }
          
          console.log('Total related spots:', related.length);
          setRelatedSpots(related);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (spotId) {
      fetchData();
    }
  }, [spotId]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#f5f5f5'
      }}>
        <Spin 
          size="large" 
          style={{ 
            transform: 'scale(2)',
            marginBottom: '20px'
          }} 
        />
        <p style={{ 
          fontSize: '18px', 
          color: '#666', 
          margin: 0,
          fontFamily: 'var(--font-comfortaa)',
          fontWeight: '500'
        }}>
          Carregando detalhes do ponto turístico...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ 
          fontSize: '48px',
          color: '#ff4d4f'
        }}>
          ⚠️
        </div>
        <p style={{ 
          fontSize: '18px', 
          color: '#ff4d4f', 
          margin: 0,
          fontFamily: 'var(--font-comfortaa)',
          fontWeight: '500',
          textAlign: 'center'
        }}>
          Erro ao carregar detalhes: {error}
        </p>
      </div>
    );
  }

  if (!spot) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ 
          fontSize: '48px',
          color: '#faad14'
        }}>
          🔍
        </div>
        <p style={{ 
          fontSize: '18px', 
          color: '#666', 
          margin: 0,
          fontFamily: 'var(--font-comfortaa)',
          fontWeight: '500',
          textAlign: 'center'
        }}>
          Ponto turístico não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div>
      <HeroArticle spot={spot} />
      
      <main className={styles.container}>
        {spot.sections && spot.sections.length > 0 && (
          <section>
            <div className={styles.sectionsContainer}>
              {spot.sections.map((section) => (
                <article 
                  key={section.id}
                  className={styles.sectionCard}
                >
                  <h2 className={styles.sectionTitle}>
                    {section.title}
                  </h2>
                  
                  <div className={`${styles.sectionContent} ${section.imageUrl ? styles.sectionContentWithImage : styles.sectionContentNoImage}`}>
                    <div>
                      <p className={styles.sectionText}>
                        {section.text}
                      </p>
                    </div>
                    
                    {section.imageUrl && (
                      <div className={styles.sectionImageContainer}>
                        <img
                          src={section.imageUrl}
                          alt={section.title}
                          className={styles.sectionImage}
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className={styles.verticalDivider}></div>

        <div className={styles.infoContainer}>
          {/* Rating Section */}
          <div className={styles.ratingSection}>
            <div className={styles.starsContainer}>
              {Array.from({ length: 5 }, (_, index) => {
                const rating = parseFloat(spot.rating) || 0;
                const starPosition = index + 1;
                
                if (rating >= starPosition) {
                  // Estrela cheia
                  return (
                    <span key={index} className={`${styles.star} ${styles.starFull}`}>
                      ★
                    </span>
                  );
                } else if (rating >= starPosition - 0.5) {
                  // Meia estrela
                  return (
                    <span key={index} className={`${styles.star} ${styles.starHalf}`}>
                      ★
                    </span>
                  );
                } else {
                  // Estrela vazia - não renderizar nada ou renderizar vazia
                  return null;
                }
              }).filter(Boolean)}
              <span className={styles.ratingNumber}>({spot.rating})</span>
            </div>
          </div>

          {/* Author Section */}
          <div className={styles.authorSection}>
            <h3 className={styles.authorTitle}>Autora</h3>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Nathalia Santos Ferreira</span>
              <div className={styles.authorAvatar}>
                <img 
                  src="https://avatars.githubusercontent.com/u/158168917?v=4" 
                  alt="Nathalia Santos Ferreira"
                  className={styles.avatarImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex'; 
                  }}
                />
                <div className={styles.avatarFallback} style={{display: 'none'}}>
                  N
                </div>
              </div>
            </div>
          </div>

          {/* Publication Date Section */}
          <div className={styles.dateSection}>
            <h3 className={styles.dateTitle}>Data da publicação</h3>
            <span className={styles.dateValue}>
              {spot.createdAt ? new Date(spot.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit', 
                year: 'numeric'
              }) : 'Data não disponível'}
            </span>
          </div>

          {/* Related Spots Section */}
          {relatedSpots.length > 0 && (
            <div className={styles.relatedSection}>
              <h3 className={styles.relatedTitle}>Encontre mais...</h3>
              <div className={styles.relatedCards}>
                {relatedSpots.map((relatedSpot) => (
                  <div
                    key={relatedSpot.id}
                    className={styles.relatedCard}
                    onClick={() => window.location.href = `/pontosTuristicos/${relatedSpot.id}`}
                  >
                    <img
                      src={relatedSpot.imageUrl || "/images/fallback.png"}
                      alt={relatedSpot.name}
                      className={styles.relatedCardImage}
                    />
                    <div className={styles.relatedCardContent}>
                      <h4 className={styles.relatedCardTitle}>{relatedSpot.name}</h4>
                      <span className={styles.relatedCardRegion}>{relatedSpot.region}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className={styles.seeMoreButton}>
                Veja mais
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}