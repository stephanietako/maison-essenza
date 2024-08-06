import React from "react";
import Image from "next/image";
// Assets
import logo from "@/public/assets/essenza-logo.png";
import arrowRight from "@/public/assets/arrow-right.png";
// Style
import styles from "./styles.module.scss";

const Section1 = () => {
  // FONCTION POUR SCROLLER SUR LA SECTION SUIVANTE
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
    }
  };
  ///////////////
  return (
    <>
      <div className={styles.section1} id="section1">
        <div className={styles.section1__container}>
          <div className={styles.section1__bloc}>
            <div className={`${styles.arrow_see_more} ${styles.right}`}>
              <Image
                className={styles.__arrow_right}
                src={arrowRight}
                alt="Next Section"
                priority={false}
                placeholder="empty"
                width={150}
                height={150}
                style={{
                  display: "block",
                  objectFit: "cover",
                  cursor: "pointer",
                  padding: "1rem",
                }}
                onClick={() => scrollToSection("section2")}
              />
              <span className={styles.__arrow_right__text}>
                <p>Un peu plus</p>
              </span>
            </div>
            <div className={styles.section1__image_logo}>
              <Image
                className={styles.__img}
                src={logo}
                alt="Maison Essenza"
                placeholder="empty"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  paddingRight: "4px",
                  fontSize: "2rem",
                }}
              >
                du
              </p>

              <p
                style={{
                  fontFamily: " var(--cormorant_garamond)",
                }}
              >
                <strong>Mardi au Samedi </strong>
              </p>
              <p
                style={{
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  fontSize: "2rem",
                }}
              >
                de
              </p>
              <p
                style={{
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  fontSize: "2rem",
                  fontFamily: " var(--cormorant_garamond)",
                }}
              >
                <strong>10.00</strong>
              </p>
              <p
                style={{
                  paddingRight: "4px",
                  paddingLeft: "4px",
                  fontSize: "2rem",
                }}
              >
                à
              </p>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: " var(--cormorant_garamond)",
                }}
              >
                <strong>19.00</strong>
              </p>
            </span>
            <span className={styles.__text_bloc__info_adress}>
              <p
                style={{
                  fontFamily: " var(--cormorant_garamond)",
                  //fontFamily: "var(--nixie_one)",
                  //fontFamily: "var(--courier-prime); ",
                }}
              >
                <strong>33 Rue Marceau - Cogolin</strong>
              </p>
            </span>
            <br />
            <span className={styles.__text_bloc_philo}>
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
            </span>
          </div>
        </div>
        {/* Right Arrow */}
        {/* <div className={`${styles.arrow_see_more} ${styles.right}`}>
          <Image
            className={styles.__arrow_right}
            src={arrowRight}
            alt="Next Section"
            priority={false}
            placeholder="empty"
            width={80}
            height={80}
            style={{
              display: "block",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("section2")}
          />
          <span className={styles.__arrow_right__text}>
            <p>Un peu plus</p>
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Section1;

// Courier Prime, Old Typewriter Font, and Special Elite are the best American typewriter fonts on Google Docs as their font weight, size, and overall style all resemble the characters generated by old American typewriters.
