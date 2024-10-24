"use client";

import { useEffect, useRef } from "react";

const Hero = ({ style }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  }, []);

  return (
    <div className="hero" id="hero" style={style}>
      <video
        ref={videoRef}
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
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Hero;
