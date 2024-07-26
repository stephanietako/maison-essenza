"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      {/* Ajoutez la vidéo comme arrière-plan */}
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/teaser.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
    </div>
  );
};

export default Hero;
