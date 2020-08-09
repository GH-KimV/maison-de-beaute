import React from 'react';
import Hero from '../layout/Hero';
import bckGrnd from '../../assets/HeroPageImage.png';

const Home = () => {
    const msg = 'Home';

    return (
        <div className='container-fluid'>
            <Hero msg={msg} bckGrnd={bckGrnd} />
        </div>
    );
};

export default Home;
