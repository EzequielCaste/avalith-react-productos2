import React from 'react';
import {Producto} from './Producto';

export const Catalogo = ({productos}) => {
  
  return (
    <div className="product-container">
      {productos.map((prod) => (
        <Producto key={prod.title} item={prod} />
      ))}
    </div>
  );
};
