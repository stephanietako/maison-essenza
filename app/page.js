"use client";

import { useState, useEffect } from "react";
//import Navigation from "@/components/navigation";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import ComponentHorztl from "./components/ContentHorztl/ContentHorztl";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  // Durée de l'Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 2000); // ne pas oublier de remerttre 8s
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowHeader(false);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence>
        {showHeader ? (
          <Header key="header" onComplete={handleAnimationComplete} />
        ) : (
          <ComponentHorztl key="component" />
        )}
      </AnimatePresence>
    </div>
  );
}
