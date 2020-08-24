import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';

const Gallery = () => {
    const msg = 'Gallery';

    return (
        <div className='container-fluid'>
            <Navbar />
            <Hero msg={msg} />
            Gallery
        </div>
    );
};

export default Gallery;
