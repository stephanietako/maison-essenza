"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../Hero/Hero";

export default function Header({ style }) {
  const [isVisible, setIsVisible] = useState(true); // Gère la visibilité du header

  // Variants pour l'animation
  const variants = {
    hidden: { y: 0, opacity: 1 }, // Départ
    visible: {
      y: 0,
      opacity: 1,
      duration: 4.5,
      ease: [0.33, 0, 0.67, 1],
    },
    exit: {
      y: "-100%", // Sort vers le haut
      opacity: 1,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] }, // Animation de sortie
    },
  };

  useEffect(() => {
    //  Set Timer pour trigger la sortie del'animation après 12 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true); // Start l'animation de sortie
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="header">
      <motion.div
        initial="visible"
        animate="visible" // visible de suite donc pas d'animation d'entrée
        exit="exit" // Animation de sortie après 12 secondes
        variants={variants}
        className="header"
        style={style}
      >
        <Hero />
      </motion.div>
    </div>
  );
}
