import styles from "./banner.module.css";

import Image from "next/image";

function Banner() {
    return (
        <main className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                    <h1>
                        Desbrave o <span className={styles.brasil}>Brasil</span>
                    </h1>
                </div>
                <div className={styles.bannerImage}>
                    <Image
                        src="/images/cataratas.png"
                        alt="Cataratas do Iguaçu"
                        width={600}
                        height={400}
                        className={styles.catarratasImg}
                    />
                </div>
            </div>
        </main>
    )
}

export default Banner;