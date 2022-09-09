import React, { useContext, useCallback, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import { fetchById, deleteData, fetchAllData, updateData } from '../../../utils/API';
import style from './style.module.css';
import edit from '../../../icons/edit.svg';
import trash from '../../../icons/trash.svg';

export default function Preview() {

  const { preview, setPreview, lps, setLps, editing, setEditing } = useContext(AppContext);

  const [atualPreview, setAtualPreview] = useState({});

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const fetchPreview = useCallback(async () => {
    const data = await fetchById(preview);
    setAtualPreview(data);
  }, [preview]);

  useEffect(() => {
    fetchPreview();
  }, [preview, fetchPreview]);

  const handleDelete = async () => {
    await deleteData(preview)
    .then(() => {
      fetchAllData()
      .then((data) => {
        setLps(data);
      })
      .then(() => {
        setPreview(lps.length - 1);
      });
    }
    );
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const data = {
      title,
      artist,
      genre,
      image: atualPreview.image,
      description,
      price,
    };
    await updateData(preview, data);
    const allData = await fetchAllData();
    setLps(allData);
    await fetchPreview();
    setEditing(false);
  };

  const handleEdit = () => {
    const data = atualPreview;
    setAtualPreview(data);
    setTitle(data.title);
    setArtist(data.artist);
    setGenre(data.genre);
    setDescription(data.description);
    setPrice(data.price);
    setEditing(true);
  };

  const previewEdit =
    (
      <div className={ style.preview }>
        <form className={ style.editForm }>
          <label htmlFor="title">Título</label>
          <input maxLength={ 45 } required type="text" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } />
          <label htmlFor="artist">Artista</label>
          <input maxLength={ 45 } required type="text" name="artist" value={ artist } onChange={ (e) => setArtist(e.target.value) } />
          <label htmlFor="genre">Gênero</label>
          <input maxLength={ 45 } required type="text" name="genre" value={ genre } onChange={ (e) => setGenre(e.target.value) } />
          <label htmlFor="price">Preço</label>
          <input required type="number" name="price" value={ price } onChange={ (e) => setPrice(e.target.value) } />
          <label htmlFor="description">Descrição</label>
          <textarea maxLength={ 255 } required name="description" value={ description } onChange={ (e) => setDescription(e.target.value) } />
          <div className={ style.editFormBtns }>
            <button onClick={ updateProduct } type="submit">Salvar</button>
            <button type="button" onClick={ () => setEditing(false) }>Cancelar</button>
          </div>
        </form>
      </div>
    );

  const previewCard =
      (
      <div className={ style.preview }>
        <div className={ style.previewTxts }>
          <h1 className={ style.previewTitle }>{ atualPreview.title }</h1>
          <h2 className={ style.previewSubtitle }>{ atualPreview.artist }</h2>
        </div>
        <img className={ style.previewCover } src={ atualPreview.image } alt={ atualPreview.title } />
        <p className={ style.previewParagraph }>{ atualPreview.description }</p>
        <div className={ style.tags }>
          <h3 className={ style.previewPrice }>{ `${atualPreview.price}.00` }</h3>
          <h3 className={ style.previewGenre }>{ atualPreview.genre }</h3>
        </div>
        <div className={ style.previewButtons }>
          <button onClick={ handleEdit } className={ style.previewButton }>
            <img src={ edit } alt="edit" />
          </button>
          <button onClick={ handleDelete } className={ style.previewButton }>
            <img src={ trash } alt="trash" />
          </button>
        </div>
      </div>
      );

  return (
    <>
      { editing ? previewEdit : previewCard }
    </>
  )
}
