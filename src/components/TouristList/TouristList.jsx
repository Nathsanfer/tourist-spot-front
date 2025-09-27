"use client";
import TouristCard from "../TouristCard/TouristCard.jsx";
import styles from "./touristList.module.css";

function TouristList({ spots, loading, error, region = null }) {
  if (loading) return <p>Carregando pontos turísticos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!spots.length) return <p>Nenhum ponto turístico encontrado.</p>;

  // Filtrar spots por região se a prop region for fornecida
  const filteredSpots = region 
    ? spots.filter(spot => spot.region === region)
    : spots;

  if (!filteredSpots.length) return <p>Nenhum ponto turístico encontrado para a região {region}.</p>;

  return (
    <section className={styles.cardsSection}>
      <div className={styles.cardsContainer}>
        {filteredSpots.map((spot) => (
          <TouristCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  );
}

export default TouristList;