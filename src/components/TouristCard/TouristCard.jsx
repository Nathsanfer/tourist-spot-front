"use client";
import styles from "./touristCard.module.css";

function TouristCard({ spot }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src={spot.imageUrl || "/images/fallback.png"}
          alt={spot.name}
          width={280}
          height={180}
          className={styles.cardImg}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <span className={styles.cardRegion}>{spot.region}</span>
          <span className={styles.cardDate}>
            {spot.createdAt ? spot.createdAt.slice(0, 10) : ""}
          </span>
        </div>
        <h3 className={styles.cardTitle}>{spot.name}</h3>
      </div>
    </div>
  );
}

export default TouristCard;
