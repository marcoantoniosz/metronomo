import React from 'react';
import style from './style.module.css';
import PopUp from './PopUp';
import RefreshButton from './RefreshButton';

export default function Header() {

  return (
    <>
      <div className={ style.header }>
        <h1 className={ style.title }>Produtos</h1>
        <RefreshButton />
        <PopUp />
      </div>
      <div className={ style.line } />
    </>
  )
}
