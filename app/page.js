"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import ComponentHorztl from "./components/ContentHorztl/ContentHorztl";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowHeader(false);
  };

  useEffect(() => {
    const hour = 60 * 60 * 1000; // une heure en millisecondes

    const interval = setInterval(() => {
      const keysToPreserve = ["cleanupTime"];

      // Sauvegarder les valeurs des clés à préserver
      const preservedData = keysToPreserve.reduce((acc, key) => {
        const value = localStorage.getItem(key);
        if (value !== null) {
          acc[key] = value;
        }
        return acc;
      }, {});

      // Nettoyer le local storage
      localStorage.clear();

      // Restaurer les valeurs des clés préservées
      Object.entries(preservedData).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });

      console.log("Local storage nettoyé à", new Date().toLocaleTimeString());
    }, hour);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/kite/widget.js`}
        strategy="lazyOnload"
        onLoad={() => {
          window.wxSDK.run({
            kiteId: process.env.NEXT_PUBLIC_KITE_ID,
            baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
            onReady: () => {
              window.wxSDK
                .connectAnonymousUser()
                .then(() => {
                  console.log("Utilisateur connecté anonymement");
                })
                .catch((error) => {
                  console.error(
                    "Erreur lors de la connexion de l'utilisateur:",
                    error
                  );
                });
            },
          });
        }}
      />
      <div
        className="home"
        style={{
          overflow: "hidden",
          position: "relative",
          minHeight: "100vh",
          border: "4px solid red",
        }}
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
