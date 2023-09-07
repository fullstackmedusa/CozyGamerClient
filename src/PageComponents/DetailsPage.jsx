import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import CardDetail  from '../Components/CardDetail';
import CommentList from '../Components/CommentList';

const DetailsPage = ({ cardData }) => {
  const { id } = useParams();
  const currentCard = cardData[id]; // Get the current card data based on the id

  return (
    <div className="details-page">
      <CardDetail card={currentCard} />
      <CommentList/>
    </div>
  );
};

export default DetailsPage;
