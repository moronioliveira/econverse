import React, { useState, useEffect } from 'react';
import styles from './RelatedProducts.module.scss';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ApiResponse {
  success: boolean;
  products: Product[];
}

interface RelatedProductsProps {
  showCategoryTabs?: boolean;
}

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

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

  const formatCurrency = (value: number) => {
    return (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <section className={styles.relatedProductsSection}>
      <div className={styles.container}>
        {/* Título com as linhas decorativas */}
        <div className={styles.headerTitle}>
          <div className={styles.line} />
          <h2>Produtos relacionados</h2>
          <div className={styles.line} />
        </div>

        {/* Exibição condicional: Abas de categorias OU Link "Ver todos" */}
        {showCategoryTabs ? (
          <ul className={styles.tabsList}>
            {categories.map((category) => (
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

        {/* Vitrine de Produtos (Limitada a 1 linha com 4 cards) */}
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
              {products.slice(0, 4).map((product, index) => {
                const oldPrice = product.price * 1.1;
                const installmentValue = product.price / 2;

                return (
                  <div key={index} className={styles.productCard}>
                    <div className={styles.imageContainer}>
                      <img src={product.photo} alt={product.productName} />
                    </div>

                    <p className={styles.description}>
                      {product.descriptionShort}
                    </p>

                    <span className={styles.oldPrice}>
                      {formatCurrency(oldPrice)}
                    </span>
                    <span className={styles.currentPrice}>
                      {formatCurrency(product.price)}
                    </span>

                    <span className={styles.installment}>
                      ou 2x de {formatCurrency(installmentValue)} sem juros
                    </span>

                    <span className={styles.freeShipping}>Frete grátis</span>

                    <button
                      type="button"
                      className={styles.buyButton}
                      onClick={() => setSelectedProduct(product)}
                    >
                      COMPRAR
                    </button>
                  </div>
                );
              })}
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

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <div className={styles.modalBody}>
              <img
                src={selectedProduct.photo}
                alt={selectedProduct.productName}
              />
              <div className={styles.modalInfo}>
                <h3>{selectedProduct.productName}</h3>
                <p className={styles.modalPrice}>
                  {formatCurrency(selectedProduct.price)}
                </p>
                <p className={styles.modalDescription}>
                  {selectedProduct.descriptionShort}
                </p>
                <a href="#" className={styles.modalDetailLink}>
                  Veja mais detalhes do produto &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};