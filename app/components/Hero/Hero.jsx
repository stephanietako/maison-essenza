"use client";
import React from "react";
import Video from "next-video";
import teaser from "/videos/teaser.mp4";

const Hero = () => {
  return (
    <div
      className="hero"
      id="hero"
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Ajoutez la vidéo comme arrière-plan */}
      <Video
        src={teaser}
        autoPlay
        muted
        loop
        PlayInline
        id="myVideo"
        controls={false}
      ></Video>
    </div>
  );
};

export default Hero;
