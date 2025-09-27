"use client";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Encontre pontos turísticos..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>
    </section>
  );
}
