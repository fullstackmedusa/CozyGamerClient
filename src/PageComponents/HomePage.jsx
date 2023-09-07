import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';
import { GameCard } from '../Components/GameCard';




const HomePage = ({ cardData }) => {
  return (
    <div className="main-content">
      
      {cardData.map((card, index) => (
          <GameCard card={card} index={index}/>
        ))}
    </div>
  );
};

export default HomePage;