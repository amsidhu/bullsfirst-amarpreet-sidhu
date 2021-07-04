import React from 'react';
import logo from '../../assets/bullsfirst-logo.svg';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="container-header">
      <img className="header-logo" src={logo} />
      <button
        className="btn-sm primary-main mb-3"
        aria-label="Sign in"
        type="submit"
      >
        Sign in
      </button>
      <p className="header-text">
        Get better results with Bullsfirst at the helm of your portfolio.
      </p>
      <img className="popsicle-img" />
    </div>
  );
};
