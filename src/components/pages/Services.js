import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import bckGrnd from '../../assets/ServicesPageImage.png';


const Services = () => {
    const msg = 'Select services';
    const selectClass = 'background-img';
    const selectNavClass = 'navbar navbar-expand-lg navbar-light';

    return (
        <div className='container-fluid services'>
            <Navbar selectNavClass={selectNavClass }/>
            <Hero msg={msg}  bckGrnd={bckGrnd} selectClass={selectClass}/>
        </div>
    );
};

export default Services;
