"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import styles from "./styles.module.scss";

export default function ComponentHorztl() {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className={styles.content_horizontal}>
      <AnimatePresence>
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
    </div>
  );
}
