import React from 'react';
import styles from './Categories.module.scss';
import tecIcon from '../../assets/icons/tec.svg';
import supermarketIcon from '../../assets/icons/supermarket.svg';
import drinksIcon from '../../assets/icons/drinks.svg';
import toolsIcon from '../../assets/icons/ferramentas 1.svg';
import healthIcon from '../../assets/icons/cuidados-de-saude 1.svg';
import sportsIcon from '../../assets/icons/corrida 1.svg';
import fashionIcon from '../../assets/icons/fashion.svg';

interface CategoryItem {
  id: number;
  name: string;
  icon: string;
  active?: boolean;
}

const categoriesData: CategoryItem[] = [
  { id: 1, name: 'Tecnologia', icon: tecIcon, active: true },
  { id: 2, name: 'Supermercado', icon: supermarketIcon },
  { id: 3, name: 'Bebidas', icon: drinksIcon },
  { id: 4, name: 'Ferramentas', icon: toolsIcon },
  { id: 5, name: 'Saúde', icon: healthIcon },
  { id: 6, name: 'Esportes e Fitness', icon: sportsIcon },
  { id: 7, name: 'Moda', icon: fashionIcon },
];

export const Categories: React.FC = () => {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${
                category.active ? styles.active : ''
              }`}
            >
              <div className={styles.iconBox}>
                <img src={category.icon} alt={category.name} />
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};