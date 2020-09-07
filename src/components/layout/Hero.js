import React from 'react';
import Navbar  from '../layout/Navbar'

const Hero = ({ msg, bckGrnd }) => {
    return (
        <div className='container-fluid hero'>
            <div class='hero-text'>
                <span class='hero-msg'>
                Hero {msg}
                </span>
            </div>
            <img src={bckGrnd} alt='background' class='background-img' />
        </div>
    );
};

export default Hero;
