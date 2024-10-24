// "use client";
// import React from "react";

// const Hero = ({ style }) => {
//   return (
//     <div className="hero" id="hero" style={style}>
//       <video
//         style={{
//           display: "flex",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//         src="/video/herovideo.mp4"
//         type="video/mp4"
//         autoplay="autoplay"
//         muted
//         loop
//       />
//     </div>
//   );
// };

// export default Hero;
/////////////////////////////

import { useEffect, useRef } from "react";

const Hero = ({ style }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Automatic playback started!
                })
                .catch((error) => {
                  // Auto-play was prevented
                  console.error("Autoplay was prevented:", error);
                });
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="hero" id="hero" style={style}>
      <video
        ref={videoRef}
        className="background-video"
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
