import React from 'react';
import Time from '../Time/Time';
import playlistIcon from './playlistIcon.svg';
import { useSelector } from 'react-redux';
import { selectNextCover } from '../Player/playerSlice';
import './Footer.css';

const Footer: React.FunctionComponent = () => {
  const nextCover = useSelector(selectNextCover);

  if (nextCover === undefined) {
    return null;
  }

  return (
    <footer className="Footer font-uppercase">
      <button>
        <img src={playlistIcon} alt="Menu" width="18px" />
      </button>
      <div className="Footer-main">
        <h2>Next</h2>
        <p className="font-black">{nextCover.title}</p>
      </div>
      <Time seconds={nextCover.time} />
    </footer>
  );
}

export default Footer;
