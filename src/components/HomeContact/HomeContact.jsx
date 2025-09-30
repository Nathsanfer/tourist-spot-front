"use client";

import Link from "next/link";
import styles from "./HomeContact.module.css";
import { FaEnvelope, FaComments, FaHeart, FaArrowRight } from "react-icons/fa";

export default function HomeContact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Vamos Conversar Sobre Seus Sonhos de Viagem?</h2>
            <p className={styles.description}>
              Tem alguma dúvida sobre um destino? Quer compartilhar uma experiência incrível? 
              Ou simplesmente quer conversar sobre as belezas do Brasil? 
            </p>
            <p className={styles.description}>
              Adoraria conhecer seus sonhos de viagem e ajudar no que for possível. 
              Cada conversa é uma oportunidade de descobrir novos lugares juntos!
            </p>
            
            <div className={styles.contactReasons}>
              <div className={styles.reason}>
                <FaComments className={styles.reasonIcon} />
                <div className={styles.reasonText}>
                  <h4 className={styles.reasonTitle}>Tire suas dúvidas</h4>
                  <p className={styles.reasonDescription}>
                    Informações sobre destinos, dicas de planejamento e muito mais
                  </p>
                </div>
              </div>
              
              <div className={styles.reason}>
                <FaHeart className={styles.reasonIcon} />
                <div className={styles.reasonText}>
                  <h4 className={styles.reasonTitle}>Compartilhe experiências</h4>
                  <p className={styles.reasonDescription}>
                    Conte sobre lugares que visitou ou que sonha em conhecer
                  </p>
                </div>
              </div>
              
              <div className={styles.reason}>
                <FaEnvelope className={styles.reasonIcon} />
                <div className={styles.reasonText}>
                  <h4 className={styles.reasonTitle}>Sugira destinos</h4>
                  <p className={styles.reasonDescription}>
                    Ajude a expandir nossa coleção com lugares incríveis
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.contactActions}>
              <Link href="/contato" className={styles.primaryContactButton}>
                <FaEnvelope className={styles.buttonIcon} />
                Entrar em Contato
                <FaArrowRight className={styles.arrowIcon} />
              </Link>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email:</span>
                  <span className={styles.contactValue}>nathaliasantos@email.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Resposta:</span>
                  <span className={styles.contactValue}>24-48 horas</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="https://avatars.githubusercontent.com/u/158168917?v=4" 
                alt="Nathalia Santos" 
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay}>
                <h3 className={styles.overlayTitle}>Nathalia Santos</h3>
                <p className={styles.overlaySubtitle}>Sonhadora & Criadora</p>
                <div className={styles.overlayStats}>
                  <div className={styles.overlayStat}>
                    <span className={styles.statNumber}>100+</span>
                    <span className={styles.statLabel}>Sonhos</span>
                  </div>
                  <div className={styles.overlayStat}>
                    <span className={styles.statNumber}>5</span>
                    <span className={styles.statLabel}>Regiões</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.decorativeElements}>
              <div className={styles.decorativeCard}>
                <FaHeart className={styles.decorativeIcon} />
                <span className={styles.decorativeText}>Apaixonada pelo Brasil</span>
              </div>
              <div className={styles.decorativeCard}>
                <FaComments className={styles.decorativeIcon} />
                <span className={styles.decorativeText}>Sempre disponível para conversar</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Pronto para começar uma conversa?</h3>
            <p className={styles.ctaDescription}>
              Clique no botão abaixo e me conte sobre seus sonhos de viagem pelo Brasil!
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Vamos Conversar!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}