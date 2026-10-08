import React, { useState } from 'react';
import type { Product } from '../../types/product';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const formatCurrency = (value: number) => {
    return (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.modalInfo}>
            <h3 className={styles.modalTitle}>{product.productName}</h3>

            <p className={styles.modalPrice}>
              {formatCurrency(product.price)}
            </p>

            <p className={styles.modalDescription}>
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>

            <a href="#" className={styles.modalDetailLink}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.actionRow}>
              <div className={styles.quantitySelector}>
                <button type="button" onClick={handleDecrement}>
                  -
                </button>
                <span>{String(quantity).padStart(2, '0')}</span>
                <button type="button" onClick={handleIncrement}>
                  +
                </button>
              </div>

              <button type="button" className={styles.buyButton}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};