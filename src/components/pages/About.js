import React from 'react';
import Hero from '../layout/Hero';

const About = () => {
    const msg = 'About';

    return (
        <div className='container'>
            <Hero msg={msg} />
                <h2>About the Company</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam explicabo quidem nesciunt beatae dolorem maiores
                    similique nobis cum cupiditate saepe! Dolorem adipisci
                    inventore, doloribus explicabo debitis iste placeat? Odio,
                    labore.
                </p>
                <img src='...' className='img-fluid' alt='Responsive image' />
                <h2>About the Artist</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam explicabo quidem nesciunt beatae dolorem maiores
                    similique nobis cum cupiditate saepe! Dolorem adipisci
                    inventore, doloribus explicabo debitis iste placeat? Odio,
                    labore.
                </p>
                <img src='...' className='img-fluid' alt='Responsive image' />
        </div>
    );
};

export default About;
