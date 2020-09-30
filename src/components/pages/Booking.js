import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import bckGrnd from '../../assets/BookPageImage.png';


const Booking = () => {
    const msg = 'Call to Book';
    const selectClass = 'bckgrnd-alt';
    const selectNavClass = 'navbar navbar-expand-lg navbar-dark';

    return (
        <div className='container-fluid booking'>
            <Navbar selectNavClass={selectNavClass}/>
            <Hero msg={msg} bckGrnd={bckGrnd} selectClass={selectClass}/>
        </div>
    );
};

export default Booking;
