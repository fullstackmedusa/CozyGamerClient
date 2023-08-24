import React from 'react';
// import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './HomePage.css';
import { GameCard } from '../Components/GameCard';


// const breakpointColumnsObj = {
//   default: 5,
//   1100: 3,
//   700: 2
// };

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