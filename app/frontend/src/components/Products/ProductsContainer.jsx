import React from 'react';
import List from './List';
import Preview from './Preview';
import style from './style.module.css';

export default function ProductsContainer() {
  return (
    <div className={ style.productsContainer }>
      <List />
      <Preview />
    </div>
  )
}
