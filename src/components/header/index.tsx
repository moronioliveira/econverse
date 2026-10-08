import React from 'react';
import styles from './Header.module.scss';

import logo from '../../assets/logo.svg';
import escudo from '../../assets/ShieldCheck.svg';
import carro from '../../assets/Truck.svg';
import cartao from '../../assets/CreditCard.svg';
import caixa from '../../assets/Group.svg';
import coracao from '../../assets/Heart.svg';
import usuario from '../../assets/UserCircle.svg';
import carrinho from '../../assets/ShoppingCart.svg';
import lupa from '../../assets/MagnifyingGlass.svg';
import coroa from '../../assets/CrownSimple.svg';

const topBarItems = [
  {
    id: 1,
    icon: escudo,
    alt: 'Escudo de segurança',
    text: <>Compra <span>100% segura</span></>,
  },
  {
    id: 2,
    icon: carro,
    alt: 'Ícone de frete',
    text: <><span>Frete grátis</span> acima de R$ 200</>,
  },
  {
    id: 3,
    icon: cartao,
    alt: 'Ícone de cartão',
    text: <><span>Parcele</span> suas compras</>,
  },
];

const navigationLinks = [
  { id: 1, label: 'TODAS CATEGORIAS', href: '#', active: false },
  { id: 2, label: 'SUPERMERCADO', href: '#', active: false },
  { id: 3, label: 'LIVROS', href: '#', active: false },
  { id: 4, label: 'MODA', href: '#', active: false },
  { id: 5, label: 'LANÇAMENTOS', href: '#', active: false },
  { id: 6, label: 'OFERTA DO DIA', href: '#', active: true },
  { id: 7, label: 'ASSINATURA', href: '#', active: false, icon: coroa },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Barra Superior de Vantagens */}
        <section className={styles.topBar}>
          <ul className={styles.listaTop}>
            {topBarItems.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt={item.alt} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Cabeçalho Principal (Logo, Busca e Ações) */}
        <section className={styles.mainHeader}>
          <a href="#" className={styles.logoLink}>
            <img src={logo} alt="Econverse" />
          </a>

          <form className={styles.pesquisa} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="O que você está buscando?"
            />
            <button type="submit" aria-label="Buscar">
              <img src={lupa} alt="Buscar" />
            </button>
          </form>

          <nav className={styles.icones} aria-label="Ações do Utilizador">
            <a href="#" aria-label="Meus Pedidos"><img src={caixa} alt="Caixa" /></a>
            <a href="#" aria-label="Favoritos"><img src={coracao} alt="Coração" /></a>
            <a href="#" aria-label="Minha Conta"><img src={usuario} alt="Utilizador" /></a>
            <a href="#" aria-label="Carrinho"><img src={carrinho} alt="Carrinho" /></a>
          </nav>
        </section>

        {/* Navegação Secundária por Categorias */}
        <nav className={styles.navigation} aria-label="Categorias Principais">
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className={link.active ? styles.activeLink : ''}
                >
                  {link.icon && <img src={link.icon} alt="" />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};