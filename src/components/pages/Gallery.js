import React from 'react';
import Hero from '../layout/Hero';

const Gallery = () => {
    const msg = 'Gallery';

    return (
        <div className='container-fluid'>
            <Hero msg={msg} />
            Gallery
        </div>
    );
};

export default Gallery;
