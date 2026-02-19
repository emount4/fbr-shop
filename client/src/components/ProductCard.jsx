import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder"></div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price} ₽</span>
          <span className="product-stock">В наличии: {product.stock}</span>
        </div>
        {product.rating !== undefined && (
          <div className="product-rating"> {product.rating}/5</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;