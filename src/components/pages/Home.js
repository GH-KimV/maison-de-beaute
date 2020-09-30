import React from 'react';
import Hero from '../layout/Hero';
import bckGrnd from '../../assets/HeroPageImage.png';
import Navbar from '../layout/Navbar';
import Logo from "../../assets/horizontal_logo_white.png"

const Home = () => {
    const msg = 'Home';
    const selectClass = 'background-img';
    const selectNavClass = 'navbar navbar-expand-lg navbar-light';
    
    return (
        <div className='container-fluid homepage'>
            <Navbar selectNavClass={selectNavClass} />
            <Hero msg={msg} bckGrnd={bckGrnd} selectClass={selectClass} />
        </div>
    );
};

export default Home;
