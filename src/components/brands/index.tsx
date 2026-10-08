import React from 'react';
import styles from './Brands.module.scss';
import logoImg from '../../assets/logo.svg';

const brandsList = [1, 2, 3, 4, 5];

export const Brands: React.FC = () => {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.container}>
        <h2>Navegue por marcas</h2>

        <div className={styles.brandsList}>
          {brandsList.map((item) => (
            <div key={item} className={styles.brandCard}>
              <img src={logoImg} alt="Logo Econverse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};