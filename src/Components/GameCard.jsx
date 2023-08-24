import React from 'react';
import { Link } from 'react-router-dom';


export const GameCard = ({card,index}) => {
  return (
    <div className="card-container">
      
          <Link to={`/details/${index}`} key={index} className="card-link">
            <div className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          </Link>
       
      
    </div>
  )
}
