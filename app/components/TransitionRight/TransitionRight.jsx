"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section2 from "../Section2/Section2";
// Styles
import styles from "./styles.module.scss";

const TransitionRight = ({ onComplete, keyTrigger, style }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const variants = {
    enter: {
      x: "100vw", // Commence complètement à droite (hors de l'écran)
      opacity: 1,
    },
    center: {
      x: 0, // Centre sur l'écran
      opacity: 1,
    },
    exit: {
      x: "100vw", // Sort de l'écran à droite
      opacity: 1,
    },
  };

  // Fonction pour déclencher la sortie de l'animation
  const handleExitClick = () => {
    setIsAnimatingOut(true);
  };

  useEffect(() => {
    if (isAnimatingOut && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimatingOut, onComplete]);

  return (
    <div id="transition" style={style}>
      <AnimatePresence>
        {!isAnimatingOut && (
          <motion.div
            key={keyTrigger} // On doit utiliser la clé pour forcer le composant à se remonter sinon on peut cliquer q'une seule fois sur le composant
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            className={styles.transition_bloc}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.content}>
              <Section2 handleExitClick={handleExitClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransitionRight;
