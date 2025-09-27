"use client";

import { useEffect, useState } from "react";

import Header from "../../../components/Header/Header.jsx";
import Banner from "../../../components/Banner/Banner.jsx";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";
import TouristList from "../../../components/TouristList/TouristList.jsx";
import RegionBanner from "../../../components/RegionBanner/RegionBanner.jsx";

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
        <p>Carregando pontos turísticos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <Banner />
        <SearchBar />
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      
      {uniqueRegions.map((region) => {
        const config = regionConfigs[region] || {
          subtitle: `O melhor da região ${region}`,
          description: `Explore as belezas e atrações únicas da região ${region}.`,
          highlight: `Descubra os encantos e pontos turísticos da região ${region}.`,
          leftImage: "/images/hero1.png",
          leftImageAlt: `Paisagem da região ${region}`,
          topDestinationImage: "/images/hero2.png",
          topDestinationImageAlt: `Top destino da região ${region}`,
          highlightImage: "/images/hero3.png",
          highlightImageAlt: `Destaque da região ${region}`,
          tallImage: "/images/hero4.png",
          tallImageAlt: `Vista da região ${region}`,
          highlights: ["Belezas Naturais", "Cultura Local", "Gastronomia Regional", "Aventuras Únicas"],
          stats: [
            { icon: "🗺️", number: "N/A", label: "Estados" },
            { icon: "🌡️", number: "N/A", label: "Média anual" },
            { icon: "📍", number: "N/A", label: "Pontos turísticos" },
            { icon: "⭐", number: "N/A", label: "Avaliações" }
          ]
        };
        
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
