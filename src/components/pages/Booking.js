import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';


const Booking = () => {
    const msg = 'Booking';

    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero msg={msg} />
            Book Now
        </div>
    );
};

export default Booking;
