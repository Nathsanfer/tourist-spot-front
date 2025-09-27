import styles from "./RegionBanner.module.css";
import Image from "next/image";

function RegionBanner({ 
    regionName, 
    regionSubtitle,
    regionDescription,
    regionHighlight,
    leftImage,
    leftImageAlt,
    topDestinationImage,
    topDestinationImageAlt,
    highlightImage,
    highlightImageAlt,
    tallImage,
    tallImageAlt,
    highlights,
    stats
}) {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.containerInfo}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>Região {regionName}</h1>
                        <p className={styles.subtitle}>{regionSubtitle}</p>
                        <Image
                            src={leftImage}
                            alt={`${leftImageAlt} ${regionName}`}
                            width={340}
                            height={380}
                            className={styles.imgLeft}
                        />
                    </div>
                    <div className={styles.right}>
                        <p className={styles.text}>{regionDescription}</p>
                        <div className={styles.mediaRow}>
                            <div className={styles.mediaCard}>
                                <span className={styles.mediaBadge}>Top destinos</span>
                                <Image
                                    src={topDestinationImage}
                                    alt={topDestinationImageAlt}
                                    width={460}
                                    height={250}
                                    className={styles.imgRight}
                                />
                            </div>
                            <div className={styles.mediaCard}>
                                <span className={styles.mediaBadge}>Em alta</span>
                                <Image
                                    src={highlightImage}
                                    alt={highlightImageAlt}
                                    width={460}
                                    height={250}
                                    className={styles.imgRight}
                                />
                            </div>
                        </div>
                        <p className={styles.textHighlight}>{regionHighlight}</p>
                        <div className={styles.highlights}>
                            {highlights.map((highlight, index) => (
                                <p key={index} className={styles.item}>{highlight}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.stats}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.stat}>
                                <span className={styles.statIcon} aria-hidden>{stat.icon}</span>
                                <h3 className={styles.statNumber}>{stat.number}</h3>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.tallWrapper}>
                        <Image
                            src={tallImage}
                            alt={tallImageAlt}
                            width={160}
                            height={480}
                            className={styles.imgTall}
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default RegionBanner;