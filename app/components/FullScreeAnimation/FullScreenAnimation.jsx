"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../Hero/Hero";
import { useTheme } from "@/app/animationProvider";
// Styles
import styles from "./styles.module.scss";

const FullScreenAnimation = ({ onComplete, style }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const theme = useTheme();
  //x: "-100%" : L'élément est positionné en dehors de l'écran, à gauche, avec un décalage de 100% de sa largeur.
  const variants = {
    hidden: { x: "-100%", y: 0 },
    visible: { x: 0, y: 0 },
    exit: {
      x: 0,
      y: "-100%",
      width: "100%",
      opacity: 1,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    //  Set Timer to trigger la sortie de l'animation après 8 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true); // Start l'animation de sortie
    }, 8000);

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
    <div className="fullScreen" style={style}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate={isAnimatingOut ? "exit" : "visible"}
          variants={variants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.full_screen_animation}
        >
          <div className={styles.content}>
            <Hero />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenAnimation;
