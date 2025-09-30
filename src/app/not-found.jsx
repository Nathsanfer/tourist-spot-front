"use client";

import Link from "next/link";
import styles from "./not-found.module.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { FaHome, FaMap, FaSearch, FaChevronRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Header />
      
      <section className={styles.notFoundHero}>
        <div className={styles.heroBackground}>
          <div className={styles.imageContainer}>
            <img src="/images/hero1.png" alt="Brasil" className={styles.heroImage} />
            <img src="/images/cataratas.png" alt="Brasil" className={styles.heroImage} />
            <img src="/images/hero3.png" alt="Brasil" className={styles.heroImage} />
          </div>
        </div>
        
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.errorCode}>404</div>
            <h1 className={styles.errorTitle}>
              Oops! Página não <span className={styles.highlight}>encontrada</span>
            </h1>
            <p className={styles.errorDescription}>
              Parece que você se perdeu em nossa jornada pelo Brasil. 
              Mas não se preocupe, vamos te ajudar a encontrar o caminho certo!
            </p>
            
            <div className={styles.suggestionGrid}>
              <div className={styles.suggestionCard}>
                <FaHome className={styles.suggestionIcon} />
                <h3>Voltar ao Início</h3>
                <p>Retorne à nossa página principal e explore os destinos mais incríveis do Brasil</p>
                <Link href="/" className={styles.suggestionButton}>
                  Ir para Home <FaChevronRight />
                </Link>
              </div>
              
              <div className={styles.suggestionCard}>
                <FaMap className={styles.suggestionIcon} />
                <h3>Pontos Turísticos</h3>
                <p>Descubra lugares extraordinários em todas as regiões do nosso país</p>
                <Link href="/pontosTuristicos" className={styles.suggestionButton}>
                  Explorar Destinos <FaChevronRight />
                </Link>
              </div>
              
              <div className={styles.suggestionCard}>
                <FaSearch className={styles.suggestionIcon} />
                <h3>Sobre o Projeto</h3>
                <p>Conheça mais sobre nossa missão de promover o turismo brasileiro</p>
                <Link href="/sobre" className={styles.suggestionButton}>
                  Conhecer Mais <FaChevronRight />
                </Link>
              </div>
            </div>
            
            <div className={styles.helpText}>
              <p>Precisa de ajuda? Entre em contato conosco!</p>
              <Link href="/contato" className={styles.contactLink}>
                Falar Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}