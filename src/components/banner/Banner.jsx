import styles from "./banner.module.css";

import Image from "next/image";

function Banner() {
    return (
        <main className={styles.bannerContainer}>
            <Image
                src="/images/cataratas.png"
                alt="Cataratas do Iguaçu"
                fill
                className={styles.catarratasImg}
            />
            <div className={styles.bannerText}>
                <h1>
                    Desbrave o <span className={styles.brasil}>Brasil</span>
                </h1>
            </div>
        </main>
    )
}

export default Banner;