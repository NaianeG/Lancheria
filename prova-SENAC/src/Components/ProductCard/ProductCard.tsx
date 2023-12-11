import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  image: string;
  description: string;
  whereToGo: string;
  cardTitle: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, description, whereToGo, cardTitle }) => {
  return (
    <div className="card card-extra-styles">
      <h2 className="card-title">{cardTitle}</h2>
      <img src={image} className="product-card__image" alt="Product" />
      <div className="card-body">        
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">{whereToGo}</button>
      </div>
    </div>
  );
};

export default ProductCard;