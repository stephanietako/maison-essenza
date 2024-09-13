// pages/index.js
"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import ComponentHorztl from "./components/ContentHorztl/ContentHorztl";
import Footer from "./components/Footer/Footer";

//import ChatWidget from "./components/ChatWidget/ChatWidget";

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
      {/* <Script
        src="https://app.x-bees.com/kite/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.wxSDK.run({
            kiteId: "vtrd71dz",
            baseUrl: "https://app.x-bees.com",
          });
        }}
      /> */}
      <Script
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/kite/widget.js`}
        strategy="lazyOnload"
        onLoad={() => {
          window.wxSDK.run({
            kiteId: process.env.NEXT_PUBLIC_KITE_ID,
            baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
          });
        }}
      />
      <div
        style={{ overflow: "hidden", position: "relative", minHeight: "100vh" }}
      >
        <AnimatePresence>
          {showHeader ? (
            <Header key="header" onComplete={handleAnimationComplete} />
          ) : (
            <ComponentHorztl key="component" />
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
