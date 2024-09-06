"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import ComponentHorztl from "./components/ContentHorztl/ContentHorztl";
import Footer from "./components/Footer/Footer";
export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  // Durée de l'Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowHeader(false);
  };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <AnimatePresence>
          {showHeader ? (
            <Header key="header" onComplete={handleAnimationComplete} />
          ) : (
            <ComponentHorztl key="component" />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
