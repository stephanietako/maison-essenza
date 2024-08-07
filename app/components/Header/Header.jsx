// components/Header.js

"use client";

import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    hidden: { x: "-100%", y: 0 },
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    visible: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }, // Remonte et disparaît vers le haut
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rebeccapurple",
        zIndex: 10, // Assurez-vous qu'il est au-dessus des autres éléments
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
        Header
      </h1>
    </motion.div>
  );
}
