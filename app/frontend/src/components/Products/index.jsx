import React from 'react';
import Header from './ProductsHeader';
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
