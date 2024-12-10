"use client";

import Script from "next/script"; // Import du composant Script de Next.js
import Home from "./components/Home/Home"; // Composant d'accueil
import { AnimationProvider } from "./animationProvider"; // Animation si nécessaire

export default function App() {
  console.log("Kite ID:", process.env.NEXT_PUBLIC_KITE_ID);
  return (
    <>
      <AnimationProvider>
        <Script
          id="xbees_chat"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/kite/widget.js`} // URL du widget
          onLoad={() => {
            window.wxSDK.run({
              kiteId: process.env.NEXT_PUBLIC_KITE_ID,
              baseUrl: process.env.NEXT_PUBLIC_BASE_URL, // URL de base
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
        <Home />
      </AnimationProvider>
    </>
  );
}
