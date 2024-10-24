"use client";
import React from "react";

const Hero = ({ style }) => {
  return (
    <div className="hero" id="hero" style={style}>
      {/* <video
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="/video/herovideo.mp4"
        type="video/mp4"
        autoplay="autoplay"
        muted
        loop
      /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="my_video"
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/video/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
