"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FullScreenAnimation from "../FullScreeAnimation/FullScreenAnimation";
import TransitionRight from "../TransitionRight/TransitionRight";
// Assets
import logo from "@/public/assets/essenza-logo.png";
import arrowRight from "@/public/assets/arrow-right.png";
// Styles
import styles from "./styles.module.scss";

const Section1 = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [showArrowAnimation, setShowArrowAnimation] = useState(false);

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
                }}
                onClick={handleArrowClick}
              />
              <span className={styles.__arrow_right__text}>
                <p>Un peu plus</p>
              </span>
            </div>
            <div className={styles.section1__image_logo}>
              <Link href="/" onClick={handleLogoClick}>
                <Image
                  className={styles.__img}
                  src={logo}
                  alt="Maison Essenza"
                  placeholder="empty"
                  width={600}
                  height={450}
                />
              </Link>
            </div>

            <div className={styles.section1__text_header}>
              <h1>BIENTÔT EN LIGNE</h1>
              <span className={styles.__text_bloc__info_subtitle}>
                <p>
                  Dans l&apos;intervalle retrouvez-nous dans notre
                  Showroom/Boutique
                </p>
              </span>
            </div>
            <span
              className={styles.__text_bloc__info}
              // style={{ display: "flex" }}
            >
              <p style={{ paddingRight: "7px", fontSize: "1.3rem" }}>du</p>
              <p
                style={{
                  fontFamily: "var(--cormorant_garamond)",
                  fontSize: "1.5rem",
                  wordSpacing: "-0.7ch",
                }}
              >
                Mardi au Vendredi
              </p>
              <p
                style={{
                  paddingLeft: "7px",
                  paddingRight: "4px",
                  fontSize: "1.3rem",
                }}
              >
                de
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                10.00
              </p>
              <p
                style={{
                  paddingRight: "5px",
                  paddingLeft: "8px",
                  fontSize: "1.3rem",
                }}
              >
                à
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                19.00
              </p>
            </span>
            <span className={styles.__text_bloc__info}>
              <p
                style={{
                  fontFamily: "var(--cormorant_garamond)",
                  fontSize: "1.5rem",
                  wordSpacing: "-0.7ch",
                }}
              >
                et le Samedi
              </p>
              <p
                style={{
                  paddingLeft: "7px",
                  paddingRight: "4px",
                  fontSize: "1.3rem",
                }}
              >
                de
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                10.00
              </p>
              <p
                style={{
                  paddingRight: "5px",
                  paddingLeft: "8px",
                  fontSize: "1.3rem",
                }}
              >
                à
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                16.00
              </p>
            </span>
            <span className={styles.__text_bloc__info_adress}>
              <p>33 Rue Marceau - Cogolin</p>
            </span>
            <br />
            <span className={styles.__text_bloc__philo}>
              <p>
                Bien au-delà de la simple vocation de boutique/showroom, nous
                aspirons à aider nos clients, amis et lecteurs à faire de leur
                espace de vie un véritable
              </p>
              <p>
                sanctuaire pour une bonne qualité de vie, en proposant
                judicieusement des matériaux exceptionnels, agencements,
                sanitaires, cuisines, placards,
              </p>
              <p>
                finitions décoratives uniques, mobilier, linge de maison, et
                bien plus; sans que le processus n’avale ni leurs économies, ni
                leur patience.
              </p>
              <br />
              <p>
                Nous avons plus de 10.500 références diverses pour tous styles,
                envies et budgets.
              </p>
              <br />
              <p>
                Osez donc être vous-même et nous vous aiderons à trouver tout ce
                qu&apos;il vous faut pour un projet qui vous ressemble.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia
              </p>
              <p>
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum
              </p>
              <p>
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum
              </p>
              <p>
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum
              </p>
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showLogoAnimation && (
          <FullScreenAnimation
            key="full_screen_animation_logo"
            onComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showArrowAnimation && (
          <TransitionRight
            key="full_screen_animation_section"
            onComplete={handleAnimationComplete}
            triggerReset={showArrowAnimation} // Passer la clé pour réinitialiser l'animation
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Section1;
