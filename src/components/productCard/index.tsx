import React from 'react';
import type { Product } from '../../types/product';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
}) => {
  const formatCurrency = (value: number) => {
    return (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const oldPrice = product.price * 1.1;
  const installmentValue = product.price / 2;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.photo} alt={product.productName} />
      </div>

      <p className={styles.description}>{product.descriptionShort}</p>

      <span className={styles.oldPrice}>{formatCurrency(oldPrice)}</span>
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
        onClick={() => onSelectProduct(product)}
      >
        COMPRAR
      </button>
    </div>
  );
};