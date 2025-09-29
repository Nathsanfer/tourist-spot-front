"use client";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import AboutHero from "../../../components/AboutHero/AboutHero.jsx";
import AboutContent from "../../../components/AboutContent/AboutContent.jsx";
import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.page}>
      <Header />
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  );
}
