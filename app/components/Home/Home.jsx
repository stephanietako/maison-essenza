"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header/Header";
import ComponentHorztl from "../ContentHorztl/ContentHorztl";
import Footer from "../Footer/Footer";
import { useTheme } from "@/app/animationProvider";

const Home = ({ headerDisplay = "on" }) => {
  const [showHeader, setShowHeader] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <AnimatePresence>
        {showHeader && (
          <Header style={{ display: theme.display[headerDisplay] }} />
        )}
        <ComponentHorztl key="component" />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Home;
