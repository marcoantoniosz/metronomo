import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [lps, setLps] = useState([]);
  const [preview, setPreview] = useState(1);
  const [editing, setEditing] = useState(false);
  const contextValue = {
    lps,
    setLps,
    preview,
    setPreview,
    editing,
    setEditing,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;