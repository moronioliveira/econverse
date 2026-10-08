import React from 'react';
import styles from './Banner.module.scss';

export const Banner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <article className={styles.content}>
          <h1 className={styles.title}>
            Venha conhecer nossas <br /> promoções
          </h1>
          <p className={styles.subtitle}>
            <span>50% Off</span> nos produtos
          </p>
          <button type="button" className={styles.actionButton}>
            Ver produto
          </button>
        </article>
      </div>
    </section>
  );
};