import React from 'react';
import Navbar from '../layout/Navbar';

const Hero = ({ msg, bckGrnd, selectClass }) => {
    return (
      <div className='container-fluid hero'>
      <div class='hero-text'>
          <span class='hero-msg'>{msg}</span>
      </div>
      <img src={bckGrnd} alt='background' class={selectClass} />
  </div>
  );
};

export default Hero;
