import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [lps, setLps] = useState([]);
  const [preview, setPreview] = useState(1);
  const contextValue = {
    lps,
    setLps,
    preview,
    setPreview,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;