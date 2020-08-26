import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';

const Policies = () => {
    const msg = 'Policies';

    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero msg={msg} />
            Policies
        </div>
    );
};

export default Policies;
