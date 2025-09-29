"use client";

import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import ContactHero from "../../../components/ContactHero/ContactHero.jsx";
import ContactContent from "../../../components/ContactContent/ContactContent.jsx";
import styles from "./contato.module.css";

export default function Contato() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </div>
  );
}
