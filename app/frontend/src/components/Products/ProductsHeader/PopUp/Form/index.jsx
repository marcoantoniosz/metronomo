import React, { useState, useContext } from 'react';
import AppContext from '../../../../../context/AppContext';
import { createData, fetchAllData } from '../../../../../utils/API';
import style from './style.module.css';

export default function Form() {

  const { setLps } = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const closeForm = () => {
    const closeBtn = document.querySelector('.close');
    closeBtn.click();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'artist':
        setArtist(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'image':
        setImage(value);
        break;
      default:
        setGenre(value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      title,
      artist,
      genre,
      price,
      description,
      image
    }
    if (
      title.length > 3
      && artist.length > 3
      && price
      && description.length > 3
      && image.length > 3
      ) {
      try {
        return await createData(product)
         .then(closeForm())
          .then(async () => {
            await fetchAllData()
            .then((data) => {
              setLps(data);
            });
          });
         ;
      }
      catch (err) {
        return window.alert(err);
      }
    }
    return window.alert('Por favor, preencha todos os campos!');
  }

  return (
    <form className={ style.form } >
      <label htmlFor="title">Título</label>
      <input required maxLength={ 55 } onChange={ handleChange } type="text" id="title" name="title" />
      <label htmlFor="artist">Artista</label>
      <input required maxLength={ 55 } onChange={ handleChange } type="text" id="artist" name="artist" />
      <label htmlFor="genre">Gênero</label>
      <input required maxLength={ 55 } onChange={ handleChange } type="text" id="genre" name="genre" />
      <label htmlFor="price">Preço</label>
      <input required onChange={ handleChange } type="number" id="price" name="price" />
      <label htmlFor="description">Descrição</label>
      <input required maxLength={ 255 } onChange={ handleChange } type="text" id="description" name="description" />
      <label htmlFor="image">Imagem</label>
      <input required maxLength={ 255 } onChange={ handleChange } type="text" id="image" name="image" />
      <button onClick={ handleSubmit } type="submit">&#10003;</button>
    </form>
  )
}
