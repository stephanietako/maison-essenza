"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const FullScreenAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const variants = {
    hidden: { x: "-100%", y: 0 },
    visible: { x: 0, y: 0 },
    exit: {
      x: 0,
      y: "-100%",
      width: "100%",
      height: "0%",
      opacity: 0,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    //  Set Timer to trigger la sortie del'animation après 12 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true); // Start l'animation de sortie
    }, 2000); //ne pas oublier de remettre 12000s

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimatingOut) return;

    // Cleanup après que l'animation soit complète
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000); // gestion du temps pendant la sortie

    return () => clearTimeout(timeout);
  }, [isAnimatingOut, onComplete]);

  return (
    <>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate={isAnimatingOut ? "exit" : "visible"}
          variants={variants}
          transition={{ duration: 1, ease: "easeInOut" }}
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
          <div className={styles.content}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              FULL SCREEN ANIMATION
            </h1>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FullScreenAnimation;
