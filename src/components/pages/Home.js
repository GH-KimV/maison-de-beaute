import React from 'react';
import Hero from '../layout/Hero';
import bckGrnd from '../../assets/HeroPageImage.png';
import Navbar from '../layout/Navbar';


const Home = () => {
    const msg = 'Home';
    // const backGrndColor = `backgroundColor: #808080 !important;` ;

    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero msg={msg} bckGrnd={bckGrnd} />
        </div>
    );
};

export default Home;
