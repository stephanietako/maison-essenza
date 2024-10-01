"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Home from "./components/Home/Home";
import { AnimationProvider } from "./animationProvider";

export default function App() {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    // Le timer chargement du script après 12s
    const timer = setTimeout(() => {
      setLoadScript(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
      <AnimationProvider>
        {loadScript && (
          <Script
            id="xbees_chat"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/kite/widget.js`}
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
        )}

        <Home />
      </AnimationProvider>
    </>
  );
}
