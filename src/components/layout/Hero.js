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
        <img className="col-sm" src={bckGrnd} alt="background" class="background-img" />
      </div>
      <div className="drop-down-line">
      </div>
    </div>
  );
};

export default Hero;
