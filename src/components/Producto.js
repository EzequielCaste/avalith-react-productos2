import React from 'react';

export const Producto = ({item}) => {
  const {title, description, image, price, category} = item;  

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <h3 className="title">{title}</h3>
        <p className="category">Category: {category}</p>
        <p className="price">Price: ${price}</p>
        <p className="description">{description}</p>
      </div>    
      
    </div>
  );
};
