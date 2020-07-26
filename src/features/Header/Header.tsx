import React from 'react';
import backIcon from './backIcon.svg';
import moreIcon from './moreIcon.svg';
import './Header.css';
import { useSelector } from 'react-redux';
import { selectAlbumName } from '../Player/playerSlice';

const Header: React.FunctionComponent = () => {
  const album = useSelector(selectAlbumName);

  return (
    <header className="Header">
      <button>
        <img src={backIcon} alt="Back" width="8px" />
      </button>
      <div>
        <h1 className="font-uppercase">Album</h1>
        <p>{album}</p>
      </div>
      <button>
        <img src={moreIcon} alt="Options" width="2px" />
      </button>
    </header>
  );
}

export default Header;
