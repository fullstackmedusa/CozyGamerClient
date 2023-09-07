import React from 'react';
import './CardDetail.css';

const CardDetail = ({ card }) => (
  <div className="custom-card">
    <img src={card.image} alt={card.title} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{card.title}</h2>
      <p className="card-meta">ESRB: {card.esrb}</p>
      <p className="card-description">{card.description}</p>
    </div>
  </div>
);

export default CardDetail;
