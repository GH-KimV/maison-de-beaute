import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import bckGrnd from '../../assets/Services-Banner.jpg';
import '../../scss/Services.scss';
import SelectedServices from '../layout/SelectedServices';
import { Data } from '../data/servicesData';
//images


const Manicure = () => {

    const hero_title = <h1>Manicure</h1>;
    const msg =
        <p>
            Our name translates to “house of beauty” in French. We want you to
            experience that our salon is your second home for your beauty experience.
            We provide nail services, semi-permanent makeup, and special occasion hair
            and make-up services.
        </p>;
    const selectClass = 'background-img';
    const selectNavClass = 'navbar navbar-expand-lg navbar-light';

    return (
        <div className='container-fluid selectedService'>
            <Navbar selectNavClass={selectNavClass} />
            <Hero hero_title={hero_title} msg={msg} bckGrnd={bckGrnd} selectClass={selectClass} />
            <SelectedServices />
        </div>
    );
};

export default Manicure;
