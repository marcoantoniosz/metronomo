import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import style from './style.module.css';
import refresh from '../../../icons/refresh.svg';
import { fetchAllData } from '../../../utils/API';

export default function RefreshButton() {

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
    <button onClick={ handleRefresh } className={ style.refresh }>
      <img src={ refresh } alt="refresh" />
    </button>
  )
}
