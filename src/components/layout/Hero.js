import React from 'react';
import Navbar from '../layout/Navbar';

const Hero = ({ msg, bckGrnd, selectClass, hero_title }) => {
  return (
    <div className='container-fluid hero'>
      <div class='hero-text'>
        <h1>{hero_title}</h1>
        <span class='hero-msg'>{msg}</span>
      </div>
      <img src={bckGrnd} alt='background' class={selectClass} />
      <div className="line">
      </div>
    </div>
  );
};

export default Hero;
