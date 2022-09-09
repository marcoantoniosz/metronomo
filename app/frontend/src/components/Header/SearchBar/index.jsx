import React, { useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { fetchByQuery } from '../../../utils/API';
import style from './style.module.css';

export default function SearchBar() {

  const { setLps } = useContext(AppContext);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.length >= 2) {
      try {
        const data = await fetchByQuery(search);
        setLps(data)
        return setSearch('');
      } catch (error) {
        window.alert(error);
        return setSearch('');
      }
    }
  };

  return (
    <form className={ style.container }>
      <input value={ search } onChange={ handleChange } className={ style.searchBar } type="text" placeholder="&#128269;" />
      <button onClick={ handleSubmit } className={ style.searchButton } type="submtit">
        Buscar
      </button>
    </form>
  )
}
