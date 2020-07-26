import React from 'react';
import logo from './logo.svg';
import './Logo.css';

const Logo: React.FunctionComponent = () => {
  return (
    <div className="Logo">
      <svg width="41" height="41">
        <circle cx="20.5" cy="20.5" r="18" stroke="#755dd5" strokeWidth="2.5" fill="#1f1937" />
      </svg>
      <img src={logo} alt="Logo" width="14px" />
    </div >
  );
}

export default Logo;
