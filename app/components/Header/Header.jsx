"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true); // Gère la visibilité du header

  // Variants pour l'animation
  const variants = {
    hidden: { y: 0, opacity: 1 }, // Départ
    visible: { y: 0, opacity: 1 },
    exit: {
      y: "-100%", // Sort vers le haut
      opacity: 0,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }, // Animation de sortie
    },
  };

  // Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // La sortie
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="header">
      {isVisible && (
        <motion.div
          initial="visible" // Visible de suite
          animate="visible" // visible de suite donc pas d'animation d'entrée
          exit="exit" // Animation de sortie après 12 secondes
          variants={variants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rebeccapurple",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center" }}>Header</h1>
        </motion.div>
      )}
    </div>
  );
}

///////////////
// "use client";

// import { motion } from "framer-motion";

// export default function Header() {
//   const variants = {
//     hidden: { x: "-100%", y: 0 },
//     transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
//     visible: { x: 0, y: 0 },
//     exit: { x: 0, y: "-100%" }, // Remonte et disparaît vers le haut
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       variants={variants}
//       transition={{ duration: 1, ease: "easeInOut" }}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rebeccapurple",
//         zIndex: 10, // Assurez-vous qu'il est au-dessus des autres éléments
//       }}
//     >
//       <h1 style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
//         Header
//       </h1>
//     </motion.div>
//   );
// }
