"use client";

import styles from "./page.module.css";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import HomeHero from "../components/HomeHero/HomeHero.jsx";
import HomeIntro from "../components/HomeIntro/HomeIntro.jsx";
import HomeRegions from "../components/HomeRegions/HomeRegions.jsx";
import HomeTopSpots from "../components/HomeTopSpots/HomeTopSpots.jsx";
import HomeContact from "../components/HomeContact/HomeContact.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HomeHero />
      <HomeIntro />
      <HomeRegions />
      <HomeTopSpots />
      <HomeContact />
      <Footer />
    </div>
  );
}
