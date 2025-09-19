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

        <div className={styles.filterButtons}>
          <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
          <button className={styles.filterBtn}>Norte</button>
          <button className={styles.filterBtn}>Nordeste</button>
          <button className={styles.filterBtn}>Centro-Oeste</button>
          <button className={styles.filterBtn}>Sudeste</button>
          <button className={styles.filterBtn}>Sul</button>
        </div>
      </div>
    </section>
  );
}
