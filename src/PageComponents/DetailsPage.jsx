import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import { GameCard } from '../Components/GameCard';

const DetailsPage = ({ cardData }) => {
  const { id } = useParams();
  // const selectedCard = cardData[id];

  return (
    <div className="details-page">
      
      <div className="top-row">
    <div className="left-column">
          <p>game card</p>
          </div>
          <div className="right-column">
          <div className="comments">
            <p>comments</p>
          </div>
        </div>
        </div>

        <div className="bottom-row">
        <div className="gallery">
            <p>Gallery</p>
        </div>
    </div>

    </div>
  );
};

export default DetailsPage;
