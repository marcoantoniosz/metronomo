import React from 'react';
import Header from './Header';
import ProductsContainer from './ProductsContainer';
import style from './style.module.css';

export default function Products() {
  return (
    <main className={ style.main }>
      <Header />
      <ProductsContainer />
    </main>
  )
}
