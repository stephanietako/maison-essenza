// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { AnimatePresence } from "framer-motion";
// import FullScreenAnimation from "../FullScreeAnimation/FullScreenAnimation";
// import TransitionRight from "../TransitionRight/TransitionRight";
// // Assets
// import logo from "@/public/assets/essenza-logo.png";
// import arrowRight from "@/public/assets/arrow-right.png";
// // Styles
// import styles from "./styles.module.scss";
// export const dynamic = "force-dynamic";

// const Section1 = () => {
//   const [showLogoAnimation, setShowLogoAnimation] = useState(false);
//   const [showArrowAnimation, setShowArrowAnimation] = useState(false);
//   const [isParagraph, setIsParagraph] = useState(false);

//   // Déclenchement de l'animation arrow au clic
//   const handleArrowClick = () => {
//     setShowArrowAnimation(true);
//   };

//   // Déclenchement de l'animation logo au clic
//   const handleLogoClick = () => {
//     setShowLogoAnimation(true);
//   };

//   const handleAnimationComplete = () => {
//     setShowLogoAnimation(false);
//     setShowArrowAnimation(false);
//   };

//   // Timer
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLogoAnimation(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className={styles.section1} id="section1">
//         <div className={styles.section1__container}>
//           <div className={styles.section1__bloc}>
//             {/* Flèche droite */}
//             <div className={`${styles.arrow_see_more} ${styles.right}`}>
//               <Image
//                 className={styles.__arrow_right}
//                 src={arrowRight}
//                 alt="Next Section"
//                 priority={false}
//                 placeholder="empty"
//                 width={130}
//                 height={100}
//                 style={{
//                   display: "block",
//                   objectFit: "cover",
//                   cursor: "pointer",
//                   marginRight: "2rem",
//                 }}
//                 onClick={handleArrowClick}
//               />
//               <span className={styles.__arrow_right__text}>
//                 <p>Un peu plus</p>
//               </span>
//             </div>

//             <div className={styles.section1__image_logo}>
//               <Link href="/" onClick={handleLogoClick}>
//                 <div className={styles.__image_logo__bloc}>
//                   <Image
//                     src={logo}
//                     alt="Maison Essenza logo fleurs"
//                     sizes="(max-width: 600px) 100vw, 600px 70vw, 350px 50wv"
//                     width={600}
//                     height={500}
//                     priority={true}
//                     className="test_image "
//                     style={{
//                       objectFit: "cover",
//                       width: "100%",
//                       height: "auto",
//                     }}
//                   />
//                 </div>
//               </Link>
//             </div>
//             {/* bloc text */}
//             <div className={styles.section1_text__header_bloc}>
//               <div className={styles.section1_text__header}>
//                 <div className={styles.section1_text__header_title}>
//                   <h1>BIENTÔT EN LIGNE</h1>
//                 </div>
//                 <span className={styles.__bloc_info_subtitle}>
//                   <p>
//                     Dans l&apos;intervalle retrouvez-nous dans notre
//                     Showroom/Boutique
//                   </p>
//                 </span>
//               </div>
//               <span className={styles.__bloc_info__shop}>
//                 <p id={styles.letter}>du</p>
//                 <p id={styles.day}>Mardi</p>
//                 <p id={styles.letter}>au</p>
//                 <p id={styles.day}>Vendredi</p>
//                 <p id={styles.letter}>de</p>
//                 <p id={styles.number}>10.00</p>
//                 <p id={styles.letter}>à</p>
//                 <p id={styles.number}>19.00</p>
//               </span>
//               <span className={styles.__bloc_info__shop}>
//                 <p id={styles.letter}>et</p>
//                 <p id={styles.day}>le Samedi</p>
//                 <p id={styles.letter}>de</p>
//                 <p id={styles.number}>10.00</p>
//                 <p id={styles.letter}>à</p>
//                 <p id={styles.number}>16.00</p>
//               </span>
//               <span className={styles.__bloc_info__adress}>
//                 <p>33 Rue Marceau - Cogolin</p>
//               </span>
//             </div>
//             {/* fin bloc text */}
//             <br />
//             <span className={styles.__bloc_info__philo}>
//               <p>
//                 Bien au-delà de la simple vocation de boutique/showroom, nous
//                 aspirons à aider nos clients, amis et lecteurs à faire de leur
//                 espace de vie un véritable
//               </p>
//               <p>
//                 sanctuaire pour une bonne qualité de vie, en proposant
//                 judicieusement des matériaux exceptionnels, agencements,
//                 sanitaires, cuisines, placards,
//               </p>
//               <p>
//                 finitions décoratives uniques, mobilier, linge de maison, et
//                 bien plus; sans que le processus n’avale ni leurs économies, ni
//                 leur patience.
//               </p>

//               <br />
//               <p>
//                 Nous avons plus de 10.500 références diverses pour tous styles,
//                 envies et budgets.
//               </p>
//               <br />
//               <p>
//                 Osez donc être vous-même et nous vous aiderons à trouver tout ce
//                 qu&apos;il vous faut pour un projet qui vous ressemble.
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {showLogoAnimation && (
//           <FullScreenAnimation
//             key="full_screen_animation_logo"
//             onComplete={handleAnimationComplete}
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {showArrowAnimation && (
//           <TransitionRight
//             key="full_screen_animation_section"
//             onComplete={handleAnimationComplete}
//             triggerReset={showArrowAnimation} // Passer la clé pour réinitialiser l'animation
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Section1;
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
export const dynamic = "force-dynamic";

const Section1 = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [showArrowAnimation, setShowArrowAnimation] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

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

  // Update isResponsive based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
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
              <Link href="/" onClick={handleLogoClick}>
                <div className={styles.__image_logo__bloc}>
                  <Image
                    src={logo}
                    alt="Maison Essenza logo fleurs"
                    sizes="(max-width: 600px) 100vw, 600px 70vw, 350px 50wv"
                    width={600}
                    height={500}
                    priority={true}
                    className="test_image "
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </Link>
            </div>
            {/* bloc text */}
            <div className={styles.section1_text__header_bloc}>
              <div className={styles.section1_text__header}>
                <div className={styles.section1_text__header_title}>
                  <h1>BIENTÔT EN LIGNE</h1>
                </div>
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
            <br />
            {isResponsive ? (
              <span className={styles.__bloc_info__philo_responsive}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  bien plus; sans que le processus n’avale ni leurs économies,
                  ni leur patience.
                </p>

                <br />
                <p>
                  Nous avons plus de 10.500 références diverses pour tous
                  styles, envies et budgets.
                </p>
                <br />
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
