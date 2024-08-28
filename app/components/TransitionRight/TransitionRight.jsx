// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./styles.module.scss";
// import Section2 from "../Section2/Section2";

// const TransitionRight = () => {
//   const [isAnimatingOut, setIsAnimatingOut] = useState(false);

//   const variants = {
//     enter: {
//       x: 1000, // Commence hors de l'écran à droite
//       opacity: 1,
//     },
//     center: {
//       x: 0, // Centre sur l'écran
//       opacity: 1,
//     },
//     exit: {
//       x: 1000, // Sort de l'écran à droite
//       opacity: 0,
//     },
//   };

//   // Fonction pour déclencher la sortie de l'animation
//   const handleExitClick = () => {
//     setIsAnimatingOut(true);
//   };

//   return (
//     <div id="transition">
//       <AnimatePresence>
//         {!isAnimatingOut && (
//           <motion.div
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={variants}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100vw",
//               height: "100vh",
//               backgroundColor: "rebeccapurple",
//               zIndex: 10,
//             }}
//           >
//             <div
//               className={styles.content}
//               style={{
//                 color: "white",
//                 textAlign: "center",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100%",
//                 fontSize: "24px",
//               }}
//             >
//               <Section2 handleExitClick={handleExitClick} />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TransitionRight;
/////////////////
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import Section2 from "../Section2/Section2";

const TransitionRight = ({ onComplete, keyTrigger }) => {
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
    <div id="transition">
      <AnimatePresence>
        {!isAnimatingOut && (
          <motion.div
            key={keyTrigger} // On doit utiliser la clé pour forcer le composant à se remonter sinon on peut cliquer q'une seule fois sur le composant
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "90vh",
              backgroundColor: "rebeccapurple",
              zIndex: 10,
            }}
          >
            <div
              className={styles.content}
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
              <Section2 handleExitClick={handleExitClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransitionRight;
