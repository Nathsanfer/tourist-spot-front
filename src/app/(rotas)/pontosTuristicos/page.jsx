"use client";

import { useEffect, useState } from "react";

// Importando componente do Ant Design
import { Spin } from "antd";

// Importando os componentes necessários
import Header from "../../../components/Header/Header.jsx";
import Banner from "../../../components/Banner/Banner.jsx";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";
import TouristList from "../../../components/TouristList/TouristList.jsx";
import RegionBanner from "../../../components/RegionBanner/RegionBanner.jsx";

// Importando dados de configuração das regiões
import { regionConfigs } from "../../../data/regionData.jsx";

// Importando estilos
import styles from "./pontosTuristicos.module.css";

export default function PontosTuristicos() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detectar se é mobile para otimizações específicas
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    async function fetchSpots() {
      try {
        const res = await fetch("http://localhost:5000/pontos-turisticos");
        if (!res.ok) throw new Error("Erro ao buscar pontos turísticos");
        const data = await res.json();
        setSpots(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSpots();
  }, []);

  // Definir ordem específica das regiões
  const regionOrder = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];
  
  // Obter regiões únicas dos spots carregados na ordem definida
  const availableRegions = [...new Set(spots.map(spot => spot.region))];
  const uniqueRegions = regionOrder.filter(region => availableRegions.includes(region));

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.headerSection}>
            <Header />
          </div>
          <div className={styles.bannerSection}>
            <Banner />
          </div>
          <div className={styles.searchSection}>
            <SearchBar />
          </div>
          <div className={styles.loadingContainer}>
            <Spin size="large" />
            <p className={styles.loadingText}>
              Carregando pontos turísticos...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.headerSection}>
            <Header />
          </div>
          <div className={styles.bannerSection}>
            <Banner />
          </div>
          <div className={styles.searchSection}>
            <SearchBar />
          </div>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>⚠️</div>
            <p className={styles.errorText}>
              Erro ao carregar pontos turísticos: {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerSection}>
          <Header />
        </div>
        <div className={styles.bannerSection}>
          <Banner />
        </div>
        <div className={styles.searchSection}>
          <SearchBar />
        </div>
        
        <main className={styles.contentSection} role="main">
          {uniqueRegions.map((region, index) => {
            const config = regionConfigs[region];
            
            if (!config) {
              console.warn(`Configuração não encontrada para a região: ${region}`);
              return null;
            }
            
            return (
              <section 
                key={region} 
                className={styles.regionSection}
                aria-label={`Pontos turísticos da região ${region}`}
              >
                <RegionBanner 
                  regionName={region}
                  regionSubtitle={config.subtitle}
                  regionDescription={config.description}
                  regionHighlight={config.highlight}
                  leftImage={config.leftImage}
                  leftImageAlt={config.leftImageAlt}
                  topDestinationImage={config.topDestinationImage}
                  topDestinationImageAlt={config.topDestinationImageAlt}
                  highlightImage={config.highlightImage}
                  highlightImageAlt={config.highlightImageAlt}
                  tallImage={config.tallImage}
                  tallImageAlt={config.tallImageAlt}
                  highlights={config.highlights}
                  stats={config.stats}
                />
                <TouristList 
                  spots={spots}
                  loading={false}
                  error={null}
                  region={region}
                />
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
