import React, { useContext, useCallback, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { fetchById } from '../../utils/API';
import style from './style.module.css';

export default function Preview() {

  const { preview } = useContext(AppContext);

  const [atualPreview, setAtualPreview] = useState({});

  const fetchPreview = useCallback(async () => {
    const data = await fetchById(preview);
    setAtualPreview(data);
  }, [preview]);

  useEffect(() => {
    fetchPreview();
  }, [preview, fetchPreview]);

  return (
    <div className={ style.preview }>
      <h1 className={ style.previewTitle }>{ atualPreview.title }</h1>
      <h2 className={ style.previewSubtitle }>{ atualPreview.artist }</h2>
      <img className={ style.previewCover } src={ atualPreview.image } alt={ atualPreview.title } />
      <p className={ style.previewParagraph }>{ atualPreview.description }</p>
      <h3 className={ style.previewPrice }>{ `${atualPreview.price}.00` }</h3>
      <h3 className={ style.previewGenre }>{ atualPreview.genre }</h3>
    </div>
  )
}
