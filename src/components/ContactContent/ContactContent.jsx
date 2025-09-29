"use client";

import { useState } from "react";
import styles from "./ContactContent.module.css";
import { FaInstagram, FaYoutube, FaFacebook, FaPaperPlane, FaHeart, FaComments, FaQuestionCircle } from "react-icons/fa";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      {/* Seção Principal */}
      <section className={styles.mainSection}>
        <div className={styles.content}>
          {/* Formulário */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Envie sua Mensagem</h2>
            <p className={styles.sectionDescription}>
              Tem alguma dúvida sobre um destino? Quer compartilhar uma experiência? 
              Ou simplesmente quer conversar sobre as belezas do Brasil? Ficarei feliz em responder!
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Assunto</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre destino</option>
                  <option value="sugestao">Sugestão de lugar</option>
                  <option value="feedback">Feedback do site</option>
                  <option value="colaboracao">Proposta de colaboração</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Conte-me mais sobre sua mensagem..."
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                <FaPaperPlane className={styles.buttonIcon} />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações Laterais */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Vamos Conversar!</h3>
              <p className={styles.infoText}>
                Adoro receber mensagens de pessoas que compartilham a mesma paixão 
                pelo Brasil. Cada conversa é uma oportunidade de descobrir novos lugares 
                e compartilhar sonhos de viagem.
              </p>
              
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Me siga nas redes sociais</h4>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink} title="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialLink} title="YouTube">
                    <FaYoutube />
                  </a>
                  <a href="#" className={styles.socialLink} title="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.reasonsCard}>
              <h3 className={styles.infoTitle}>Por que entrar em contato?</h3>
              <div className={styles.reasonsList}>
                <div className={styles.reasonItem}>
                  <FaQuestionCircle className={styles.reasonIcon} />
                  <div>
                    <h4 className={styles.reasonTitle}>Tire suas dúvidas</h4>
                    <p className={styles.reasonText}>Informações sobre destinos e dicas de viagem</p>
                  </div>
                </div>
                <div className={styles.reasonItem}>
                  <FaHeart className={styles.reasonIcon} />
                  <div>
                    <h4 className={styles.reasonTitle}>Compartilhe experiências</h4>
                    <p className={styles.reasonText}>Conte sobre lugares que visitou</p>
                  </div>
                </div>
                <div className={styles.reasonItem}>
                  <FaComments className={styles.reasonIcon} />
                  <div>
                    <h4 className={styles.reasonTitle}>Sugira novos destinos</h4>
                    <p className={styles.reasonText}>Ajude a expandir nosso catálogo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4 className={styles.faqQuestion}>Como posso sugerir um novo destino?</h4>
            <p className={styles.faqAnswer}>
              Envie uma mensagem com o assunto "Sugestão de lugar" e descreva o destino que gostaria de ver no site.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4 className={styles.faqQuestion}>Vocês organizam viagens?</h4>
            <p className={styles.faqAnswer}>
              Não organizamos viagens, mas fornecemos informações detalhadas para você planejar sua própria aventura.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4 className={styles.faqQuestion}>As informações são atualizadas?</h4>
            <p className={styles.faqAnswer}>
              Sim! Estamos sempre pesquisando e atualizando as informações para manter o conteúdo relevante.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4 className={styles.faqQuestion}>Posso usar as informações comercialmente?</h4>
            <p className={styles.faqAnswer}>
              O conteúdo é para uso pessoal. Para uso comercial, entre em contato para discutirmos os termos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}