import React from 'react';
import style from './style.module.css';
import logo from '../../images/logo.png';

export default function Logo() {
  return (
    <div className={ style.logoContainer }>
      <img className={ style.logo } src={ logo } alt="Logo" />
      <h1 className={ style.title }>Metronomo Discos.</h1>
    </div>
  )
}
