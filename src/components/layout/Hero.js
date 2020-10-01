import React from 'react';

const Hero = ({ msg, bckGrnd, selectClass, hero_title }) => {
  return (
    <div className='container-fluid hero'>
      <div class='hero-text'>
        {hero_title}
        <span class='hero-msg'>{msg}</span>
      </div>
      <img src={bckGrnd} alt='background' class={selectClass} />
      <div className="line">
      </div>
    </div>
  );
};

export default Hero;
