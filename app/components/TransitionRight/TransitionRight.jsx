"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    x: 1000, // Commence hors de l'écran à droite
    opacity: 0,
  },
  center: {
    x: 0, // Centre sur l'écran
    opacity: 1,
  },
  exit: {
    x: 1000, // Sort de l'écran à droite
    opacity: 0,
  },
};

const TransitionRight = () => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Fonction pour déclencher la sortie de l'animation
  const handleExitClick = () => {
    setIsAnimatingOut(true);
  };

  return (
    <AnimatePresence>
      {!isAnimatingOut && (
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rebeccapurple",
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: "24px",
            }}
          >
            TRANSITION RIGHT
            <button
              onClick={handleExitClick}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Exit
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionRight;
