import React from 'react';
import Hero from '../layout/Hero';
import bckGrnd from '../../assets/HeroPageImage.png';
import Navbar from '../layout/Navbar';
import Logo from "../../assets/horizontal_logo_white.png"

const Home = () => {
    const hero_title = <img src={Logo} />;
    const msg = <p>“House of Beauty” in French.<br/>We are a beauty-dedicated space for modern and luxurious artistry.</p>;
    // const backGrndColor = `backgroundColor: #808080 !important;` ;
    // test 
    
    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero hero_title={hero_title} msg={msg} bckGrnd={bckGrnd} />
        </div>
    );
};

export default Home;
