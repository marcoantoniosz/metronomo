import React, { useContext } from 'react';
import { fetchAllData } from '../../../utils/API';
import AppContext from '../../../context/AppContext';
import style from './style.module.css';
import PopUp from './PopUp';
import refresh from '../../../icons/refresh.svg';

export default function Header() {

  const { setLps } = useContext(AppContext);

  const handleRefresh = async () => {
    try {
      const data = await fetchAllData();
      setLps(data);
    } catch (error) {
      window.alert(error);
    }
  };
  
  return (
    <>
      <div className={ style.header }>
        <h1 className={ style.title }>Produtos</h1>
        <button onClick={ handleRefresh } className={ style.refresh }>
          <img src={ refresh } alt="refresh" />
        </button>
        <PopUp />
      </div>
      <div className={ style.line } />
    </>
  )
}
