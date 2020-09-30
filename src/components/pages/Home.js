import React from 'react';
import Home_hero from '../layout/Home_hero';
import bckGrnd from '../../assets/HeroPageImage.png';
import Navbar from '../layout/Navbar';

const Home = () => {
    const msg = 'Home';
    const selectClass = 'background-img';
    const selectNavClass = 'navbar navbar-expand-lg navbar-light';
    
    return (
        <div className='container-fluid homepage'>
            <Navbar selectNavClass={selectNavClass} />
            <Home_hero msg={msg} bckGrnd={bckGrnd} selectClass={selectClass} />

        </div>
    );
};

export default Home;
