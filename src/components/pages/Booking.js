import React from 'react';
import Hero from '../layout/Hero';

const Booking = () => {
    const msg = 'Booking';

    return (
        <div className='container'>
            <Hero msg={msg} />
            Book Now
        </div>
    );
};

export default Booking;
