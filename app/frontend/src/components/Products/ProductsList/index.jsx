import React, { useContext, useEffect, useCallback } from 'react';
import ListCard from './ListCard';
import AppContext from '../../../context/AppContext';
import { fetchAllData } from '../../../utils/API';
import style from './style.module.css';

export default function List() {

  const { lps, setLps } = useContext(AppContext);

  const fetchLps = useCallback(async () => {
    const response = await fetchAllData();
    setLps(response);
  }, [setLps]);

  useEffect(() => {
    fetchLps();
  }, [fetchLps]);

  return (
    <div className={ style.list }>
      { !lps.message && lps.map((lp) => (
        <ListCard
          id={ lp.id }
          key={ lp.id }
          title={ lp.title }
          genre={ lp.genre }
          price={ lp.price }
          image={ lp.image }
        />
      )) }
      { lps.message && <h1 className={ style.error }>Nenhum produto encontrado</h1> }
    </div>
  )
}
