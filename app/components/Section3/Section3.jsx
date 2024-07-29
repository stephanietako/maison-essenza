// import InstagramRecentPost from "../InstagramRecentPost/InstagramRecentPost";

// export default function Section3({ posts }) {
//   return (
//     <div
//       className="section3"
//       id="section3"
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "100%",
//         //border: "4px solid red",
//         justifyContent: "flex-end",
//       }}
//     >
//       <main>
//         <h1>Instagram Feed</h1>
//         <InstagramRecentPost />
//       </main>
//     </div>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import InstagramRecentPost from "../InstagramRecentPost/InstagramRecentPost";
// Assets

import arrowRight from "@/public/assets/arrow-right.png";
import arrowLeft from "@/public/assets/arrow-left.png";

const Section3 = ({ posts }) => {
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
          justifyContent: "flex-end",
        }}
      >
        {/* Flèche gauche */}
        <div
          className="arrow_see_more"
          style={{
            display: "flex",
            width: "auto",
            height: "50%",
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
            width={80}
            height={80}
            style={{
              display: "block",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("section1")} // Défiler vers la section
          />
          <span
            className="__arrow_left__text"
            style={{
              display: "block",
              textAlign: "center",
              position: "absolute",
              marginTop: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "11.5px",
                fontWeight: "bold",
                paddingLeft: "2px",
                width: "6rem",
              }}
            >
              Un peu moins
            </p>
          </span>
        </div>
        {/* Conteneur Principal */}
        <div
          className="section3__container"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <main
            className="section3__main"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              border: "2px solid #eaeaea",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              width: "50%",
              height: "75%",
              //border: "2px solid violet",
              //marginTop: "5rem",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "16px",
              }}
            >
              Maison Essenza Instagram galerie
            </h1>
            <span
              className="section3__post"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                //border: "2px solid red",
                justifyContent: "center",
              }}
            >
              {" "}
              <InstagramRecentPost />
            </span>
          </main>
        </div>
        {/* Flèche droite */}
        {/* <div
          className="arrow_see_more"
          style={{
            display: "flex",
            width: "auto",
            height: "50%",
            position: "relative",
            alignContent: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Image
            className="__arrow_right"
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
            onClick={() => scrollToSection("section3")} // Défiler vers la section
          />
          <span
            className="__arrow_right__text"
            style={{
              display: "block",
              textAlign: "center",
              position: "absolute",
              marginTop: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "11.5px",
                fontWeight: "bold",
              }}
            >
              Un peu plus
            </p>
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Section3;
