import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const C = () => {
  const value = useContext(AppContext);

  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

export default C;
