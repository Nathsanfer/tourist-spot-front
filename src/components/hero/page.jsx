import styles from "./hero.module.css";

import Image from "next/image";

function Hero() {
  return (
    <main className={styles.heroContainer}>
        <section className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Conheça e explore<span className={styles.lineBreak}></span>
              lugares mágicos<span className={styles.lineBreak}></span>
              do <span className={styles.brasil}>Brasil</span>!!
            </h1>
            <p className={styles.heroDescription}>
              Monte sua bagagem e embarque nessa aventura. Venha conosco viajar pelo Brasil afora em busca de paisagens deslumbrantes e lugares incríveis para conhecer
            </p>
            <button className={styles.heroButton}>
              Venha explorar com a gente!
            </button>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.heroTopImages}>
              <Image src="/images/hero1.png" alt="Cristo Redentor" width={380} height={260} className={styles.heroImg} />
              <Image src="/images/hero4.png" alt="Avião" width={320} height={200} className={`${styles.heroImg} ${styles.aviaoImg}`} />
            </div>
            <div className={styles.heroBottomImages}>
              <Image src="/images/hero2.png" alt="Cataratas do Iguaçu" width={380} height={220} className={styles.heroImg} />
              <Image src="/images/hero3.png" alt="Cachoeira" width={290} height={220} className={styles.heroImg} />
            </div>
          </div>
        </section>
      </main>
  )
}

export default Hero;