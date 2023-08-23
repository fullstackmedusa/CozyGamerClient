import React, {useState} from 'react';
import Masonry from 'react-masonry-css';
import ModalImage from 'react-modal-image';
import './MainContent.css'; 

const cardData = [
   { title: 'Stardew Valley', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8EbOC1gOG3eCQtIdkAPnuEQGQK6mNjChrtxMR7GG_rElkoXEE' },
   { title: 'Animal Crossing: New Horizons', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQrLOWyjePhJsG_AR06TgE_nS2odSL07zpFNhV6rNSzGOybd73' },
   { title: 'A Short Hike', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/A_Short_Hike_Logo_Square.png' },
   { title: 'Coffee Talk', image: 'https://i0.wp.com/www.togeproductions.com/wp-content/uploads/2018/07/CT-TitleLogo.png?resize=1080%2C432' },
   { title: 'Night in The Woods', image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg' },
   { title: 'Spiritfarer', image: 'https://spiritfarer.iam8bit.com/storage/static/spiritfarer-logo.png' },
   { title: 'Townscaper', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1291340/header.jpg' },
   { title: 'My Time at Portia', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTj-V1kjFizcRWveZT6Sow-9LlExDB9T7S2xx86FJcsXJhAWREs' },
   { title: 'Stardew Valley', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8EbOC1gOG3eCQtIdkAPnuEQGQK6mNjChrtxMR7GG_rElkoXEE' },
   { title: 'Animal Crossing: New Horizons', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQrLOWyjePhJsG_AR06TgE_nS2odSL07zpFNhV6rNSzGOybd73' },
   { title: 'A Short Hike', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/A_Short_Hike_Logo_Square.png' },
   { title: 'Coffee Talk', image: 'https://i0.wp.com/www.togeproductions.com/wp-content/uploads/2018/07/CT-TitleLogo.png?resize=1080%2C432' },
   { title: 'Night in The Woods', image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg' },
   { title: 'Spiritfarer', image: 'https://spiritfarer.iam8bit.com/storage/static/spiritfarer-logo.png' },
   { title: 'Townscaper', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1291340/header.jpg' },
   { title: 'My Time at Portia', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTj-V1kjFizcRWveZT6Sow-9LlExDB9T7S2xx86FJcsXJhAWREs' }
];

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2
};




const MainContent = () => {
  return (
    <div className="main-content">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="card-list"
        columnClassName="card-column"
      >
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MainContent;
