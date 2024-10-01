"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/animationProvider";
import { AnimatePresence } from "framer-motion";
import FullScreenAnimation from "../FullScreeAnimation/FullScreenAnimation";
import TransitionRight from "../TransitionRight/TransitionRight";
// Assets
import logo from "@/public/assets/essenza-logo.png";
import arrowRight from "@/public/assets/arrow-right.png";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const Section1 = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [showArrowAnimation, setShowArrowAnimation] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const theme = useTheme();
  // Déclenchement de l'animation arrow au clic
  const handleArrowClick = () => {
    setShowArrowAnimation(true);
  };

  // Déclenchement de l'animation logo au clic
  const handleLogoClick = () => {
    setShowLogoAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowLogoAnimation(false);
    setShowArrowAnimation(false);
  };

  // Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update isResponsive basé sur la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.section1} id="section1">
        <div className={styles.section1__container}>
          <div className={styles.section1__bloc}>
            {/* Flèche droite */}
            <div className={`${styles.arrow_see_more} ${styles.right}`}>
              <Image
                className={styles.__arrow_right}
                src={arrowRight}
                alt="Next Section"
                priority={false}
                placeholder="empty"
                width={130}
                height={100}
                style={{
                  display: "block",
                  objectFit: "cover",
                  cursor: "pointer",
                  marginRight: "2rem",
                }}
                onClick={handleArrowClick}
              />
              <span className={styles.__arrow_right__text}>
                <p>Un peu plus</p>
              </span>
            </div>

            <div className={styles.section1__image_logo}>
              <div onClick={handleLogoClick}>
                <div className={styles.__image_logo__bloc}>
                  <Image
                    src={logo}
                    alt="Maison Essenza logo fleurs"
                    sizes="(max-width: 600px) 100vw, 550px 70vw, 250px 50wv"
                    width={600}
                    height={400}
                    priority={true}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* bloc text */}
            <div className={styles.section1_text__header_bloc}>
              <div className={styles.section1_text__header}>
                <span className={styles.section1_text__header_title}>
                  <h1>BIENTÔT EN LIGNE</h1>
                </span>
                <span className={styles.__bloc_info_subtitle}>
                  <p>
                    Dans l&apos;intervalle retrouvez-nous dans notre
                    Showroom/Boutique
                  </p>
                </span>
              </div>
              <span className={styles.__bloc_info__shop}>
                <p id={styles.letter}>du</p>
                <p id={styles.day}>Mardi</p>
                <p id={styles.letter}>au</p>
                <p id={styles.day}>Vendredi</p>
                <p id={styles.letter}>de</p>
                <p id={styles.number}>10.00</p>
                <p id={styles.letter}>à</p>
                <p id={styles.number}>19.00</p>
              </span>
              <span className={styles.__bloc_info__shop}>
                <p id={styles.letter}>et</p>
                <p id={styles.day}>le Samedi</p>
                <p id={styles.letter}>de</p>
                <p id={styles.number}>10.00</p>
                <p id={styles.letter}>à</p>
                <p id={styles.number}>16.00</p>
              </span>
              <span className={styles.__bloc_info__adress}>
                <p>33 Rue Marceau - Cogolin</p>
              </span>
            </div>
            {/* fin bloc text */}
            {/* <br /> */}
            {isResponsive ? (
              <span className={styles.__bloc_info__philo_responsive}>
                <p>
                  Bien au-delà de la simple vocation de boutique / showroom,
                  nous aspirons à aider nos clients, amis et lecteurs à faire de
                  leur espace de vie un véritable sanctuaire pour la meilleure
                  qualité de vie possible, en proposant judicieusement des
                  matériaux exceptionnels, agencement, carrelages, sanitaires,
                  robinetteries, cuisines sur-mesure ou demi-mesure, placards /
                  dressings finitions décoratives uniques, mobilier, linge de
                  maison, rideaux sur mesure avec les collections de tissus
                  DEDAR ou encore THEVENON, confections personnalisées et bien
                  plus encore ; sans que pour autant le processus n’avale leurs
                  économies, ni leur patience….
                </p>
                <br />
                <p>
                  Nous avons des milliers de références pour tous styles, envies
                  et budgets.
                </p>
                <br />
                <p>
                  Osez donc être vous-même et nous vous aiderons à trouver tout
                  ce qu&apos;il vous faut pour un projet qui vous ressemble.
                </p>
              </span>
            ) : (
              <span className={styles.__bloc_info__philo}>
                <p>
                  Bien au-delà de la simple vocation de boutique / showroom,
                  nous aspirons à aider nos clients, amis et lecteurs à faire de
                  leur espace de vie un véritable sanctuaire pour la meilleure
                  qualité de vie possible, en proposant judicieusement des
                  matériaux exceptionnels, agencement, carrelages, sanitaires,
                  robinetteries, cuisines sur-mesure ou demi-mesure, placards /
                  dressings
                </p>
                <br />
                <p>
                  finitions décoratives uniques, mobilier, linge de maison,
                  rideaux sur mesure avec les collections de tissus DEDAR ou
                  encore THEVENON, confections personnalisées et bien plus
                  encore ; sans que pour autant le processus n’avale leurs
                  économies, ni leur patience….
                </p>
                <br />
                <p>
                  Nous avons des milliers de références pour tous styles, envies
                  et budgets
                </p>
                <p>
                  Osez donc être vous-même et nous vous aiderons à trouver tout
                  ce qu&apos;il vous faut pour un projet qui vous ressemble.
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showLogoAnimation && (
          <FullScreenAnimation
            key="full_screen_animation_logo"
            onComplete={handleAnimationComplete}
            style={{ display: theme.display.on }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showArrowAnimation && (
          <TransitionRight
            key="full_screen_animation_section"
            onComplete={handleAnimationComplete}
            triggerReset={showArrowAnimation}
            // Passer la clé pour réinitialiser l'animation
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Section1;
