import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './PageComponents/HomePage';
import DetailsPage from './PageComponents/DetailsPage';
import './App.css';

const App = () => {
  const cardData = [
    { title: 'Stardew Valley', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8EbOC1gOG3eCQtIdkAPnuEQGQK6mNjChrtxMR7GG_rElkoXEE', esrb: 'E',
    description: 'Description for Game Title 1...' },
    { title: 'Animal Crossing: New Horizons', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQrLOWyjePhJsG_AR06TgE_nS2odSL07zpFNhV6rNSzGOybd73', esrb: 'E',
    description: 'Description for Game Title 1...' },
    { title: 'A Short Hike', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/A_Short_Hike_Logo_Square.png', esrb: 'PG-13',
    description: 'Description for Game Title 221...' },
    { title: 'Coffee Talk', image: 'https://i0.wp.com/www.togeproductions.com/wp-content/uploads/2018/07/CT-TitleLogo.png?resize=1080%2C432' , esrb: 'PG',
    description: 'Description for Game Title 551...'},
    { title: 'Night in The Woods', image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg', esrb: 'L',
    description: 'Description for Game Title 331...' },
    { title: 'Spiritfarer', image: 'https://spiritfarer.iam8bit.com/storage/static/spiritfarer-logo.png' , esrb: 'u',
    description: 'Description for Game Title 661...'},
    { title: 'Townscaper', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1291340/header.jpg', esrb: 'p',
    description: 'Description for Game Title eee1...' },
    { title: 'My Time at Portia', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTj-V1kjFizcRWveZT6Sow-9LlExDB9T7S2xx86FJcsXJhAWREs', esrb: 'o',
    description: 'Description for Game Title tttt1...' },
    { title: 'Stardew Valley', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8EbOC1gOG3eCQtIdkAPnuEQGQK6mNjChrtxMR7GG_rElkoXEE', esrb: 'q',
    description: 'Description for Game Title ppp1...' },
    { title: 'Animal Crossing: New Horizons', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQrLOWyjePhJsG_AR06TgE_nS2odSL07zpFNhV6rNSzGOybd73', esrb: 'E',
    description: 'Description for Game Title gdfghdfshg...' },
    { title: 'A Short Hike', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/A_Short_Hike_Logo_Square.png', esrb: '8',
    description: 'Description for Game Title 1888...' },
    { title: 'Coffee Talk', image: 'https://i0.wp.com/www.togeproductions.com/wp-content/uploads/2018/07/CT-TitleLogo.png?resize=1080%2C432', esrb: 'B',
    description: 'Description for Game Title 1...' },
    { title: 'Night in The Woods', image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg', esrb: 'ES',
    description: 'Description for Game Title 1...' },
    { title: 'Spiritfarer', image: 'https://spiritfarer.iam8bit.com/storage/static/spiritfarer-logo.png', esrb: 'A',
    description: 'Description for Game Title 1...' },
    { title: 'Townscaper', image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1291340/header.jpg', esrb: 'DD',
    description: 'Description for Game Title 1...' },
    { title: 'My Time at Portia', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTj-V1kjFizcRWveZT6Sow-9LlExDB9T7S2xx86FJcsXJhAWREs', esrb: 'GGGG',
    description: 'Description for Game Title 1...' }
 ];

 
 return (
  <div className="container">
    <Header />
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={<HomePage cardData={cardData} />}
        />
        <Route
          path="/details/:id"
          element={<DetailsPage cardData={cardData} />}
        />
      </Routes>
    </main>
  </div>
);
};

export default App;





