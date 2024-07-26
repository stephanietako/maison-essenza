import React from "react";
import Image from "next/image";
// Assets
import logo from "@/public/assets/essenza-logo.png";
import arrowRight from "@/public/assets/arrow-right.png";

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
      <div
        className="section1"
        id="section1"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          //border: "4px solid red",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="section1__container"
          style={{
            display: "flex",
            width: "80%",
            height: "100%",
            //border: "4px solid turquoise",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="section1__image_logo"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              justifyContent: "center",
            }}
          >
            <Image
              className="__img"
              src={logo}
              alt="Maison Essenza"
              priority={false}
              placeholder="empty"
              width={550}
              height={400}
              style={{
                display: "block",
                objectFit: "cover",
                // width: "100%",
                // height: "100%",
              }}
            />
          </div>
          <div
            className="section1__text_header"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "auto",
              // border: "3px solid green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <h1>MAISON ESSENZA BIENTÔT EN LIGNE</h1>
          </div>
          <span
            className="__text_bloc__info"
            style={{
              textAlign: "center",
            }}
          >
            <span className="__text_bloc__info_subtitle">
              Dans l&apos;intervalle retrouvez-nous dans notre boutique
              Showroom/Boutique
            </span>
            <p>
              du <strong>Mardi</strong> au <strong>Samedi</strong> de{" "}
              <strong>10.00</strong> à <strong>19.00</strong>
            </p>
            <p>
              <strong>33 Rue Marceau - Cogolin</strong>
            </p>
          </span>
          <br />
          <span
            className="__text_bloc_philo"
            style={{
              textAlign: "center",
              // border: "3px solid green",
              // padding: "2rem 3rem 1rem 3rem",
            }}
          >
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
              finitions décoratives uniques, mobilier, linge de maison, et bien
              plus; sans que le processus n’avale ni leurs économies, ni leur
              patience.
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
        <div
          className="arrow_see_more"
          style={{
            display: "flex",
            width: "auto",
            height: "50%",
            //border: "4px solid blue",
            position: "relative",
            alignContent: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <Image
            className="__arrow_right"
            src={arrowRight}
            alt="Maison Essenza"
            priority={false}
            placeholder="empty"
            width={180}
            height={100}
            style={{
              display: "block",
              objectFit: "contain",
              cursor: "pointer",
              //border: "2px solid blue",
            }}
            onClick={() => scrollToSection("section2")} // Défiler vers la section
          />
          <span
            className="__arrow_right__text"
            style={{
              display: "block",
              textAlign: "center",
              //border: "2px solid pink",
            }}
          >
            {" "}
            <p>Un peu plus</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Section1;
