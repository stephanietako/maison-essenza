// "use client";
// import React from "react";
// // Styles
// import styles from "./styles.module.scss";
// const Hero = ({ style }) => {
//   return (
//     <div className="hero" id="hero" style={style}>
//       <video
//         id={styles.video}
//         autoPlay
//         muted
//         playsInline
//         loop
//         className="video"
//       >
//         <source src={"/video/herovideo.mp4"} />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Hero;
//////////////:
"use client";
import React, { useEffect, useState } from "react";
// Importation du composant Image de Next.js
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";

const Hero = ({ style }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Fonction pour vérifier la taille de l'écran
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Vérifiez la taille de l'écran lors du premier rendu
    handleResize();

    // Écoutez les changements de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Nettoyez l'écouteur d'événements
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
