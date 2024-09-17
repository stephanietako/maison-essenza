"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="/video/herovideo.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Hero;
