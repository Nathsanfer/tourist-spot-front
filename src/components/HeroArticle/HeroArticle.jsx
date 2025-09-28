import styles from "./HeroArticle.module.css";

function HeroArticle({ spot }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <img
          src={spot.imageUrl || "/images/fallback.png"}
          alt={spot.name}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <span className={styles.regionBadge}>{spot.region}</span>
          <h1 className={styles.heroTitle}>{spot.name}</h1>
        </div>
      </div>
    </section>
  );
}

export default HeroArticle;
