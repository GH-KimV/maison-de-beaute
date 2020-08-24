import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';

const Services = () => {
    const msg = 'Services';

    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero msg={msg} />
            Services
        </div>
    );
};

export default Services;
