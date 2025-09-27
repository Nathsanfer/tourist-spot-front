"use client";

import { useEffect, useState } from "react";

import Header from "../../../components/Header/Header.jsx";
import Banner from "../../../components/Banner/Banner.jsx";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";
import TouristList from "../../../components/TouristList/TouristList.jsx";
import RegionBanner from "../../../components/RegionBanner/RegionBanner.jsx";

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

  return (
    <div>

      <Header />
      <Banner />
      <SearchBar />
      <RegionBanner />
      <TouristList spots={spots} loading={loading} error={error} />
      <RegionBanner />
    </div>
  );
}
