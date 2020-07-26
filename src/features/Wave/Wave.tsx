import React from 'react';
import wave from './wave.png';
import './Wave.css';

const Wave: React.FunctionComponent = () => {
  return (
    <div className="Wave">
      <img src={wave} alt="Wave" width="100%" />
    </div >
  );
}

export default Wave;
