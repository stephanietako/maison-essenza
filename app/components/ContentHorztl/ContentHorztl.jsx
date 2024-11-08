"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";

export default function ComponentHorztl() {
  const [activeSection, setActiveSection] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.content_horizontal}>
      {isSmallScreen ? (
        <div>
          {/* Affichage pour les petits écrans */}
          <div className={styles.section1}>
            <Section1 onNextSection={() => setActiveSection(2)} />
          </div>
          <div className={styles.section2}>
            <Section2 />
          </div>
        </div>
      ) : (
        <AnimatePresence>
          {/* Transitions pour les grands écrans */}
          {activeSection === 1 && (
            <motion.div
              key="section1"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className={styles.section1}
            >
              <Section1 onNextSection={() => setActiveSection(2)} />
            </motion.div>
          )}
          {activeSection === 2 && (
            <motion.div
              key="section2"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className={styles.section2}
            >
              <Section2 />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
