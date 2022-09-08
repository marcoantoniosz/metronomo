import React from 'react';
import style from './style.module.css';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className={ style.header }>
      <Logo />
      <SearchBar />
    </header>
  )
}
