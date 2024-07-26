import React from "react";
import Image from "next/image";
// Assets

import arrowLeft from "@/public/assets/arrow-left.png";

const Section3 = () => {
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
        className="section3"
        id="section3"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          //border: "4px solid red",
          justifyContent: "flex-end",
          backgroundColor: "turquoise",
        }}
      >
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
          <Image
            className="__arrow_left"
            src={arrowLeft}
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
            onClick={() => scrollToSection("section3")} // Défiler vers la section3
          />
          <span
            className="__arrow_right__text"
            style={{
              display: "block",
              textAlign: "center",
              //border: "2px solid pink",
            }}
          >
            <p>Un peu plus</p>
          </span>
        </div>
        <div
          className="section3__container"
          style={{
            display: "flex",
            width: "80%",
            height: "100%",
            //border: "4px solid turquoise",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "pink",
          }}
        >
          <div
            className="section2__image_logo"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              //border: "3px solid blue",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            HELLO WORLD
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
