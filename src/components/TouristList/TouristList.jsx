"use client";
import TouristCard from "../TouristCard/TouristCard.jsx";
import styles from "./touristList.module.css";

function TouristList({ spots, loading, error }) {
  if (loading) return <p>Carregando pontos turísticos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!spots.length) return <p>Nenhum ponto turístico encontrado.</p>;

  return (
    <section className={styles.cardsSection}>
      <div className={styles.cardsContainer}>
        {spots.map((spot) => (
          <TouristCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  );
}

export default TouristList;