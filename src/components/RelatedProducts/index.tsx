import React, { useState, useEffect } from 'react';
import type { Product, ApiResponse } from '../../types/product';
import { CATEGORIES_LIST } from '../../mocks/categories';
import { ProductCard } from '../productCard';
import { ProductModal } from '../productModal';
import styles from './RelatedProducts.module.scss';

interface RelatedProductsProps {
  showCategoryTabs?: boolean;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  showCategoryTabs = true,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<string>('CELULAR');
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api.json');
        const data: ApiResponse = await response.json();

        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.relatedProductsSection}>
      <div className={styles.container}>
        
        <div className={styles.headerTitle}>
          <div className={styles.line} />
          <h2>Produtos relacionados</h2>
          <div className={styles.line} />
        </div>

        
        {showCategoryTabs ? (
          <ul className={styles.tabsList}>
            {CATEGORIES_LIST.map((category) => (
              <li
                key={category}
                className={`${styles.tabItem} ${
                  activeTab === category ? styles.activeTab : ''
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.seeAllContainer}>
            <a href="#" className={styles.seeAllLink}>
              Ver todos
            </a>
          </div>
        )}

        
        {loading ? (
          <div className={styles.loading}>Carregando produtos...</div>
        ) : (
          <div className={styles.carouselContainer}>
            <button
              className={`${styles.arrowButton} ${styles.leftArrow}`}
              aria-label="Anterior"
            >
              &#10094;
            </button>

            <div className={styles.productsGrid}>
              {products.slice(0, 4).map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onSelectProduct={(item) => setSelectedProduct(item)}
                />
              ))}
            </div>

            <button
              className={`${styles.arrowButton} ${styles.rightArrow}`}
              aria-label="Próximo"
            >
              &#10095;
            </button>
          </div>
        )}
      </div>

      
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};