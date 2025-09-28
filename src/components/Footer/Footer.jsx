import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.inner}>
                <div className={styles.container}>
                    {/* Logo e Nome */}
                    <div className={styles.brand}>
                        <h2 className={styles.brandName}>Explorer’s Paradise</h2>
                    </div>

                    {/* Redes Sociais */}
                    <div className={styles.socialMedia}>
                        <a href="#" className={styles.socialLink} title="Siga no Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className={styles.socialLink} title="Conheça nosso canal no YouTube">
                            <FaYoutube size={24} />
                        </a>
                        <a href="#" className={styles.socialLink} title="Curta nossa página no Facebook">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Divisor */}
                <div className={styles.divider}></div>

                {/* Conteúdo Principal */}
                <div className={styles.content}>
                    <p className={styles.description}>
                        Descubra as belezas do Brasil! Este site foi criado para quem busca conhecer os destinos mais incríveis 
                        do nosso país. Aqui você encontra informações detalhadas sobre pontos turísticos de todas as regiões, 
                        organizadas de forma simples e acessível. Seja para planejar sua próxima viagem ou simplesmente se inspirar, 
                        sempre haverá um destino extraordinário esperando por você.
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>@2025</p>
            </div>
        </footer>
    );
};

export default Footer;