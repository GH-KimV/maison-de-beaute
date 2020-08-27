import React from "react";

const Hero = ({ hero_title, msg, bckGrnd }) => {
  return (
    <div className=" container-fluid hero">
      <div className="row">
        <div className="col-sm hero-content-container">
          {hero_title}
          {msg}
        </div>
        <img className="col-sm" src={bckGrnd} alt="background" class="background-img" />
      </div>
      <div className="drop-down-line">
      </div>
    </div>
  );
};

export default Hero;
