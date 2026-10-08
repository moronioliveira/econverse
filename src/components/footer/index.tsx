import React from 'react';
import styles from './Footer.module.scss';
import logoImg from '../../assets/logo.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* 1. Faixa de Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterText}>
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>

          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputsGroup}>
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      {/* 2. Conteúdo Principal do Footer */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          {/* Lado Esquerdo: Brand info */}
          <div className={styles.brandInfo}>
            <img src={logoImg} alt="Econverse Logo" className={styles.logo} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" aria-label="Facebook">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                </div>
          </div>

          <div className={styles.divider} />

          {/* Lado Direito: Navegação */}
          <div className={styles.navColumns}>
            <div className={styles.column}>
              <h4>Institucional</h4>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Ajuda</h4>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Termos</h4>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Rodapé Inferior */}
      <div className={styles.copyrightBar}>
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};