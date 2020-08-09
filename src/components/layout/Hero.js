import React from 'react';

const Hero = ({ msg, bckGrnd }) => {
    return (
        <div className=' container-fluid hero'>
            Hero {msg}
            <img src={bckGrnd} alt='background' class='background-img' />
        </div>
    );
};

export default Hero;
