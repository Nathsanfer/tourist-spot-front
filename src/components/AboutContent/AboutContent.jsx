"use client";

import styles from "./AboutContent.module.css";
import { FaHeart, FaMapMarkedAlt, FaCamera, FaPen } from "react-icons/fa";

export default function AboutContent() {
  return (
    <div className={styles.container}>
      {/* Seção Sobre Mim */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Minha Paixão pelo Brasil</h2>
            <p className={styles.paragraph}>
              Olá! Sou Nathalia Santos Ferreira, uma brasileira apaixonada pelas belezas naturais e culturais do nosso país. 
              Desde pequena, sempre tive fascínio pelas paisagens exuberantes, pela rica diversidade cultural e pelos 
              sabores únicos que o Brasil oferece, mesmo ainda não tendo tido a oportunidade de conhecer todos esses lugares pessoalmente.
            </p>
            <p className={styles.paragraph}>
              Criado com amor e dedicação, este site é fruto da minha paixão e do meu sonho de um dia explorar cada 
              cantinho deste país incrível. Cada destino aqui catalogado representa um lugar que está na minha lista 
              de sonhos, pesquisado com carinho e descrito com a emoção de quem verdadeiramente se encanta com as maravilhas brasileiras.
            </p>
            <p className={styles.paragraph}>
              Meu objetivo é conectar pessoas que, assim como eu, têm uma vontade imensa de descobrir os tesouros 
              do Brasil. Desde as praias paradisíacas do Nordeste até as majestosas cachoeiras do Centro-Oeste, 
              passando pela imponente Amazônia e as charmosas cidades históricas do Sudeste e Sul - todos lugares que espero conhecer!
            </p>
          </div>
          <div className={styles.imageContent}>
            <img 
              src="https://avatars.githubusercontent.com/u/158168917?v=4" 
              alt="Nathalia Santos Ferreira" 
              className={styles.profileImage}
            />
            <div className={styles.imageCaption}>
              <p>Nathalia Santos Ferreira</p>
              <span>Sonhadora & Criadora de Conteúdo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meus Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <FaHeart className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Paixão Genuína</h3>
            <p className={styles.valueDescription}>
              Cada destino é pesquisado com amor e curiosidade genuína, sonhando sempre em conhecer sua essência local.
            </p>
          </div>
          <div className={styles.valueCard}>
            <FaMapMarkedAlt className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Exploração Responsável</h3>
            <p className={styles.valueDescription}>
              Promovo o turismo consciente, respeitando a natureza e as comunidades locais.
            </p>
          </div>
          <div className={styles.valueCard}>
            <FaCamera className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Pesquisa Cuidadosa</h3>
            <p className={styles.valueDescription}>
              Cada local é cuidadosamente pesquisado, com informações confiáveis para futuros viajantes.
            </p>
          </div>
          <div className={styles.valueCard}>
            <FaPen className={styles.valueIcon} />
            <h3 className={styles.valueTitle}>Conteúdo Original</h3>
            <p className={styles.valueDescription}>
              Cada descrição é escrita com base em sonhos de viagem e pesquisa aprofundada sobre cada destino.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Benefícios do Site</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>📋</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Planejamento Facilitado</h4>
              <p className={styles.timelineDescription}>
                Encontre informações detalhadas sobre destinos organizadas por região para planejar sua viagem dos sonhos.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>🗺️</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Exploração por Região</h4>
              <p className={styles.timelineDescription}>
                Descubra as cinco regiões do Brasil com suas características únicas e pontos turísticos mais incríveis.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>💡</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Inspiração Constante</h4>
              <p className={styles.timelineDescription}>
                Desperte sua vontade de viajar com conteúdo inspirador sobre as belezas naturais e culturais do Brasil.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>🤝</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Comunidade de Sonhadores</h4>
              <p className={styles.timelineDescription}>
                Conecte-se com outros brasileiros apaixonados por turismo e compartilhe a mesma vontade de explorar.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>⭐</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Avaliações e Dicas</h4>
              <p className={styles.timelineDescription}>
                Consulte avaliações detalhadas e dicas valiosas para cada destino, ajudando na escolha dos melhores locais.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>📱</div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Acesso Fácil e Rápido</h4>
              <p className={styles.timelineDescription}>
                Interface intuitiva e responsiva que funciona perfeitamente em qualquer dispositivo, onde quer que você esteja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle}>Minha Missão</h2>
          <p className={styles.missionText}>
            "Conectar pessoas que, assim como eu, sonham em conhecer as maravilhas do Brasil. Quero inspirar 
            outros brasileiros a descobrirem as belezas do nosso país e planejarem suas próximas aventuras. 
            Acredito que este site pode ser o primeiro passo para realizar nossos sonhos de viagem."
          </p>
          <div className={styles.missionSignature}>
            <span>- Nathalia Santos Ferreira</span>
          </div>
        </div>
      </section>
    </div>
  );
}