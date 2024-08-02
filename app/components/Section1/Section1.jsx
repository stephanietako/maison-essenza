import React from "react";
import Image from "next/image";
// Assets
import logo from "@/public/assets/essenza-logo.png";
import arrowRight from "@/public/assets/arrow-right.png";
// Style
import styles from "./styles.module.scss";

const Section1 = () => {
  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section cible
    }
  };

  return (
    <>
      <div className={styles.section1} id="section1">
        <div className={styles.section1__container}>
          <div className={styles.section1__bloc}>
            <div className={styles.section1__image_logo}>
              <Image
                className={styles.__img}
                src={logo}
                alt="Maison Essenza"
                priority={false}
                placeholder="empty"
                width={470}
                height={393}
                style={{
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.section1__text_header}>
              <h1>BIENTÔT EN LIGNE</h1>

              <span className={styles.__text_bloc__info_subtitle}>
                <p
                  style={{
                    fontSize: "36px",
                    fontFamily: "var(--cormorant_garamond)",
                  }}
                >
                  Dans l&apos;intervalle retrouvez-nous dans notre
                  Showroom/Boutique
                </p>
              </span>
            </div>
            <span
              className={styles.__text_bloc__info}
              style={{
                textAlign: "center",
              }}
            >
              {/* <span className={styles.__text_bloc__info_subtitle}>
                <p
                  style={{
                    fontSize: "36px",
                    fontFamily: "var(--cormorant_garamond)",
                  }}
                >
                  Dans l&apos;intervalle retrouvez-nous dans notre
                  Showroom/Boutique
                </p>
              </span> */}

              <p
                style={{
                  fontFamily: "var(--courier-prime)",
                }}
              >
                du <strong>Mardi au Samedi </strong>de <strong>10.00</strong> à{" "}
                <strong>19.00</strong>
              </p>

              <p
                style={{
                  fontFamily: "var(--courier-prime)",
                }}
              >
                <strong>33 Rue Marceau - Cogolin</strong>
              </p>
            </span>
            <br />
            <span
              className={styles.__text_bloc_philo}
              style={{
                textAlign: "center",
              }}
            >
              <p>
                {" "}
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
        {/* Flèche droite */}
        <div className={styles.arrow_see_more}>
          {" "}
          <Image
            className={styles.__arrow_right}
            src={arrowRight}
            alt="Maison Essenza"
            priority={false}
            placeholder="empty"
            width={80}
            height={80}
            style={{
              display: "block",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("section2")} // Défiler vers la section
          />
          <span className={styles.__arrow_right__text}>
            {" "}
            <p
              style={{
                fontSize: "11.5px",
                fontWeight: "bold",
              }}
            >
              Un peu plus
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Section1;
// Courier Prime, Old Typewriter Font, and Special Elite are the best American typewriter fonts on Google Docs as their font weight, size, and overall style all resemble the characters generated by old American typewriters.
