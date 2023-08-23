import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;


