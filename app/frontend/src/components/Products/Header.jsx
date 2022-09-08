import React from 'react';
import style from './style.module.css';
import plus from '../../icons/plus.svg';

export default function Header() {
  return (
    <>
      <div className={ style.productsHeader }>
        <h1 className={ style.productsTitle }>Produtos</h1>
        <button className={ style.productsButton }>
          <img src={ plus } alt="Adicionar produto" />
        </button>
      </div>
      <div className={ style.line } />
    </>
  )
}
