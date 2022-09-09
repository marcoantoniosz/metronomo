import React from 'react';
import Form from './Form';
import Popup from 'reactjs-popup';
import './PopUp.css';
import plus from '../../../../icons/plus.svg';

export default function PopUp() {
  return (
    <Popup
    trigger={<img src={ plus } alt="filter" className="button" />}
    modal
    nested
    >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div>
          <Form />
        </div>
      </div>
    )}
  </Popup>
  )
}

