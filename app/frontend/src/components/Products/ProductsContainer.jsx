import React from 'react';
import List from './ProductsList';
import Preview from './ProductsPreview';
import style from './style.module.css';

export default function ProductsContainer() {
  return (
    <div className={ style.productsContainer }>
      <List />
      <Preview />
    </div>
  )
}
