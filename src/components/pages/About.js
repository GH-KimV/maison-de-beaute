import React from "react";
import Hero from "../layout/Hero";
import Navbar from "../layout/Navbar";
import bckGrnd from "../../assets/HeroPageImage.png";
import "../../scss/About.scss";

const About = () => {
  const hero_title = <h1>About Us</h1>;
  const msg = (
    <p>
      Our name translates to “house of beauty” in French. We want you to
      experience that our salon is your second home for your beauty experience.
      We provide nail services, semi-permanent makeup, and special occasion hair
      and make-up services.
    </p>
  );
  const selectClass = 'background-img';
  const selectNavClass = 'navbar navbar-expand-lg navbar-light';

  return (
    <div className="container-fluid about">
      <Navbar selectNavClass={selectNavClass} />
      <Hero hero_title={hero_title} msg={msg} bckGrnd={bckGrnd} selectClass={selectClass}/>
      <div className="bottom-content-wrapper">
        <div className="row about-company-container">
          <div className="col-sm content-container">
            <h2>Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              explicabo quidem nesciunt beatae dolorem maiores similique nobis cum
              cupiditate saepe! Dolorem adipisci inventore, doloribus explicabo
              debitis iste placeat? Odio, labore.
          </p>
          </div>
          <img src="..." className="col-sm img-fluid" alt="Responsive image" />
        </div>
        <div>
          <div className="row about-artist-container">
            <div className="col-sm content-container">
              <h2>Artists</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo quidem nesciunt beatae dolorem maiores similique nobis
                cum cupiditate saepe! Dolorem adipisci inventore, doloribus
                explicabo debitis iste placeat? Odio, labore.
            </p>
            </div>
            <img src="..." className="col-sm img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
