import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const FullScreenAnimation = ({ onComplete }) => {
  const variants = {
    initial: { x: "100%", y: 0, width: "0%", height: "0%" },
    animate: {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%",
      transition: { duration: 0.75 },
    },
    exit: {
      x: 0,
      y: "-100%",
      width: "100%",
      height: "0%",
      transition: { duration: 0.75 },
    },
  };

  return (
    <motion.div
      className={styles.fullScreenAnimation}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onComplete}
    >
      <div className={styles.content}>
        {/* Vous pouvez ajouter du contenu ici si nécessaire */}
        <p>Animation Complete</p>
      </div>
    </motion.div>
  );
};

export default FullScreenAnimation;
