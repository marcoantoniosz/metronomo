import React, { useContext, useEffect } from 'react';
import AppContext from '../../../../context/AppContext';
import style from './style.module.css';

export default function ListCard(props) {

  const { setPreview, setEditing, preview } = useContext(AppContext);

  const { title, genre, price, image, id } = props;

  useEffect(() => {
    const card = document.getElementById(id);
    if (preview === id) {
      card.style.backgroundColor = '#fafafa';
    }
    if (preview !== id) {
      card.style.backgroundColor = 'transparent';
    }
  }, [preview, id]);

  const handleClick = () => {
    setEditing(false);
    setPreview(props.id);
  }

  return (
    <div onClick={ handleClick } id={ id } className={ style.card }>
      <div className={ style.cardTexts }>
        <h1 className={ style.cardTitle } >{ title }</h1>
        <h2 className={ style.cardSubtitle }>{ genre }</h2>
        <h3 className={ style.cardParagraph } > { `${price}.00` } </h3>
      </div>
      <div className={ style.cardImage }>
        <img className={ style.coverArt } src={ image } alt={ title } />
      </div>
    </div>
  )
}
