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

export default function PontosTuristicos() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div>
        <Header />
        <Banner />
        <SearchBar />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '400px',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <Spin size="large" />
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            margin: 0,
            fontFamily: 'var(--font-comfortaa)'
          }}>
            Carregando pontos turísticos...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <Banner />
        <SearchBar />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '400px',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ 
            fontSize: '48px',
            color: '#ff4d4f'
          }}>
            ⚠️
          </div>
          <p style={{ 
            fontSize: '16px', 
            color: '#ff4d4f', 
            margin: 0,
            fontFamily: 'var(--font-comfortaa)',
            textAlign: 'center'
          }}>
            Erro ao carregar pontos turísticos: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      
      {uniqueRegions.map((region) => {
        const config = regionConfigs[region];
        
        if (!config) {
          console.warn(`Configuração não encontrada para a região: ${region}`);
          return null;
        }
        
        return (
          <div key={region}>
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
          </div>
        );
      })}
    </div>
  );
}
