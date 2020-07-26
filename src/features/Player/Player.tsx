import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Buttons from '../Buttons/Buttons';
import ProgressBar from '../ProgressBar/ProgressBar';
import Wave from '../Wave/Wave';
import Footer from '../Footer/Footer';
import './Player.css';

const Player: React.FunctionComponent = () => {
  return (
    <div className="Player">
      <Header />
      <main className="Player-main">
        <Slider />
        <Buttons />
        <ProgressBar />
        <Wave />
      </main>
      <Footer />
    </div >
  );
}

export default Player;
