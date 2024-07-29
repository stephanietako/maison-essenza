// app/page.js

"use client";

import React, { useRef, useEffect } from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Hero from "./components/Hero/Hero";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/essenza-logo.png";

export default function Home() {
  const sectionWrapperRef = useRef(null);
  const videoRef = useRef(null); // Référence pour l'élément vidéo
  const section1Ref = useRef(null); // Référence pour la section 1

  useEffect(() => {
    const videoElement = videoRef.current;

    // Fonction pour faire défiler vers la Section 1 après 8 secondes
    const scrollToSection1 = () => {
      if (section1Ref.current) {
        section1Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (videoElement) {
      // Définir un minuteur pour 8 secondes
      const timer = setTimeout(scrollToSection1, 8000);

      // Effacer le minuteur si le composant est démonté
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;

    if (!sectionWrapper) return;

    // Fonction pour gérer le défilement horizontal avec la molette de la souris
    const handleScroll = (event) => {
      // Vérification de compatibilité pour les événements de molette
      const delta = Math.sign(event.deltaY); // 1 pour bas, -1 pour haut
      sectionWrapper.scrollBy({
        left: delta * 70, // Multiplier l'incrément par delta pour la direction
        behavior: "smooth",
      });

      // Empêcher le défilement vertical si nous sommes dans le sectionWrapper
      event.preventDefault();
    };

    // Ajouter un écouteur d'événement pour la molette
    sectionWrapper.addEventListener("wheel", handleScroll, { passive: false });

    // Nettoyer l'écouteur d'événement
    return () => {
      sectionWrapper.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Fonction pour gérer le clic de navigation
  const handleNavClick = (sectionIndex) => {
    const sectionWrapper = sectionWrapperRef.current;
    if (sectionWrapper) {
      const sectionWidth = window.innerWidth; // Utiliser la largeur de la fenêtre pour le calcul du défilement
      sectionWrapper.scrollTo({
        left: sectionIndex * sectionWidth, // Défilement horizontal vers la section cible
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="navigation">
        <span
          className="__logo"
          onClick={() => handleNavClick(0)}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            // border: "3px solid blue",
          }}
        >
          <Image
            className="__img"
            src={logo}
            alt="Palm trees affair la ferme des palmiers"
            priority={false}
            width={120}
            height={120}
            style={{
              display: "block",
              objectFit: "cover",
              width: "auto",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </span>

        <button onClick={() => handleNavClick(1)}>
          <p>Notre Philosophie</p>
        </button>
        <button onClick={() => handleNavClick(2)}>
          <p>Les Marques</p>
        </button>
        <button onClick={() => handleNavClick(3)}>
          <p>Insta Galerie</p>
        </button>
      </nav>
      <div ref={sectionWrapperRef} className="section_wrapper">
        <div className="item">
          <Link href="/" ref={videoRef}>
            <Hero />
          </Link>
        </div>
        <div className="item" ref={section1Ref}>
          <Section1 />
        </div>
        <div className="item">
          <Section2 />
        </div>
        <div className="item">
          <Section3 />
        </div>
      </div>
    </>
  );
}
