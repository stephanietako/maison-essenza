"use client";
import React, { useEffect, useState } from "react";
// Importation du composant Image de Next.js
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";

const Hero = ({ style }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero" id="hero" style={style}>
      <div>
        {isMobile ? (
          <Image
            src="/assets/hero-gif.gif"
            alt="GIF alternative"
            sizes="(max-width: 800px) 100vw, 1200px 70vw  1200px 50vw"
            width={800}
            height={700}
            unoptimized
            className={styles.gif}
          />
        ) : (
          <video
            id={styles.video}
            playsInline
            loop
            muted
            autoPlay
            src="/video/herovideo.mp4"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
