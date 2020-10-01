import React from 'react';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import bckGrnd from '../../assets/Services-Banner.jpg';
import '../../scss/Services.scss';
import SelectedMainService from '../layout/SelectedMainService';
import SelectedOtherService from '../layout/SelectedOtherService';
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

    const service1 = "Japanese Gels"
    const service2 = "Gel X Extensions"

    const otherService1 = "Organic Gel"
    const otherService2 = "Regular Manicure"

    return (
        <div className='container-fluid selectedService'>
            <Navbar selectNavClass={selectNavClass} />
            <Hero hero_title={hero_title} msg={msg} bckGrnd={bckGrnd} selectClass={selectClass} />
            <SelectedMainService
                mainServices={2}
                service1={service1}
                service2={service2}
            />
            <SelectedOtherService 
                otherServices={2}
                otherService1={otherService1}
                otherService2={otherService2}
            />
        </div>
    );
};

export default Manicure;
