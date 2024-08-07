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
            {/* Flèche droite */}
            <div className={`${styles.arrow_see_more} ${styles.right}`}>
              <Image
                className={styles.__arrow_right}
                src={arrowRight}
                alt="Next Section"
                priority={false}
                placeholder="empty"
                width={140}
                height={110}
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
            </div>
            <div className={styles.section1__image_logo}>
              <Image
                className={styles.__img}
                src={logo}
                alt="Maison Essenza"
                placeholder="empty"
                width={700}
                height={450}
                // fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  paddingRight: "7px",
                  fontSize: "2rem",
                }}
              >
                du
              </p>

              <p
                style={{
                  fontFamily: " var(--cormorant_garamond)",
                  fontSize: "2.2rem",
                  wordSpacing: "-0.7ch",
                }}
              >
                Mardi au Samedi
              </p>
              <p
                style={{
                  paddingLeft: "7px",
                  paddingRight: "4px",
                  fontSize: "2.1rem",
                }}
              >
                de
              </p>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontFamily: " var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                10.00
              </p>
              <p
                style={{
                  paddingRight: "5px",
                  paddingLeft: "8px",
                  fontsize: "2rem",
                }}
              >
                à
              </p>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontFamily: " var(--cormorant_garamond)",
                  letterSpacing: "-5px",
                }}
              >
                19.00
              </p>
            </span>
            <span className={styles.__text_bloc__info_adress}>
              <p
                style={{
                  fontFamily: " var(--cormorant_garamond)",
                  fontSize: "2rem",
                  wordSpacing: "-0.5ch",
                }}
              >
                33 Rue Marceau - Cogolin
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
      </div>
    </>
  );
};

export default Section1;
