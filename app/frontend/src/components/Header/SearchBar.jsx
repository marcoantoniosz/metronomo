import React from 'react';
import style from './style.module.css';

export default function SearchBar() {
  return (
    <form className={ style.searchBarContainer }>
      <input className={ style.searchBar } type="text" placeholder="Buscar" />
      <button className={ style.searchButton } type="submtit">
        Buscar
      </button>
    </form>
  )
}
