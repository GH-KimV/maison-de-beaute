import React from 'react';
import Hero from '../layout/Hero';

const Home = () => {
    const msg = 'Home';

    return (
        <div className='container'>
            <Hero msg={msg} />
            Home
        </div>
    );
};

export default Home;
