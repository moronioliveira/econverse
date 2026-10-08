import React from 'react';
import styles from './PartnersBanner.module.scss';
import bannerImg from '../../assets/banner2.png'; // 1. Importe a imagem aqui

interface BannerCard {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  bgImage: string;
}

const partnersData: BannerCard[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    bgImage: bannerImg, 
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    bgImage: bannerImg,
  },
];

export const PartnersBanner: React.FC = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        {partnersData.map((banner) => (
          <div
            key={banner.id}
            className={styles.bannerCard}
            style={{ backgroundImage: `url(${banner.bgImage})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
              <button type="button" className={styles.ctaButton}>
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};