import React from 'react';
import Hero from '../layout/Hero';

const About = () => {
    const msg = 'About';

    return (
        <div className='container'>
            <Hero msg={msg} />
            About
        </div>
    );
};

export default About;
