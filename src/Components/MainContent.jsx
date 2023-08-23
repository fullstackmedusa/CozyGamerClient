import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './MainContent.css'; 

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2
};

const MainContent = ({ cardData }) => {
  return (
    <div className="main-content">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="card-list"
        columnClassName="card-column"
      >
        {cardData.map((card, index) => (
          <Link to={`/details/${index}`} key={index} className="card-link">
            <div className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          </Link>
        ))}
      </Masonry>
    </div>
  );
};

export default MainContent;
