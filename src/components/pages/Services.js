import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import bckGrnd from '../../assets/Services-Banner.jpg';
import '../../scss/Services.scss';

//images
import Manicure from "../../assets/manicure.jpg"
import Pedicure from "../../assets/pedicure.jpg"
import Eyebrows from "../../assets/eyebrows.jpg"
import WeddingPlanning from "../../assets/wedding-planning.jpg"

const Services = ({ setServiceKey, dynamicRoute, history }) => {
    const hero_title = <h1>Services</h1>;
    const msg =
        <p>
            Our name translates to “house of beauty” in French. We want you to
            experience that our salon is your second home for your beauty experience.
            We provide nail services, semi-permanent makeup, and special occasion hair
            and make-up services.
        </p>;
    const selectClass = 'background-img';
    const selectNavClass = 'navbar navbar-expand-lg navbar-light';

    const clickHandler = async (e, str) => {
        await setServiceKey(str)
        if (!e) e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className='container-fluid services'>
            <Navbar selectNavClass={selectNavClass} />
            <Hero hero_title={hero_title} msg={msg} bckGrnd={bckGrnd} selectClass={selectClass} />
            <Link onMouseOver={(e) => clickHandler(e, "Manicure")} to={dynamicRoute} class='media view_more'>
                <img
                    class='align-self-center mr-3'
                    src={Manicure}
                    alt='Generic placeholder image 2'
                />
                <div class='media-body'>
                    <h2>
                        Manicure
                    </h2>
                </div>
                <div className="button-line">
                </div>
            </Link>
            <Link onMouseOver={(e) => clickHandler(e, "Pedicure")} to={dynamicRoute} className='media view_more'>
                <div className='media-body'>
                    <h2>
                        Pedicure
                        </h2>
                </div>
                <div className="button-line">
                </div>
                <img
                    className='align-self-center mr-3'
                    src={Pedicure}
                    alt='Generic placeholder image 3'
                />
            </Link>
            <Link onMouseOver={(e) => clickHandler(e, "Eyebrows")} to={dynamicRoute} className='media view_more'>
                <img
                    className='align-self-center mr-3'
                    src={Eyebrows}
                    alt='Generic placeholder image 3'
                />
                <div className='media-body'>
                    <h2>
                        Eyebrows
                        </h2>
                </div>
                <div className="button-line">
                </div>
            </Link>
            <Link onMouseOver={(e) => clickHandler(e, "Wedding Planning")} to={dynamicRoute} class='media view_more'>
                <div class='media-body'>
                    <h2>
                        Wedding Planning
                        </h2>
                </div>
                <div className="button-line">
                </div>
                <img
                    class='align-self-center mr-3'
                    src={WeddingPlanning}
                    alt='Generic placeholder image 2'
                />
            </Link>
        </div>
    );
};

export default Services;
