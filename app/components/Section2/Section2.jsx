"use client";
import React from "react";
import Image from "next/image";

// Assets
import trade from "@/public/assets/trade.png";
import insta from "@/public/assets/insta.png";
import mail from "@/public/assets/mail.png";
import gps from "@/public/assets/gps.png";
import phone from "@/public/assets/phone.png";
import arrowRight from "@/public/assets/arrow-right.png";
import arrowLeft from "@/public/assets/arrow-left.png";

const Section2 = () => {
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
        className="section2"
        id="section2"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          //border: "4px solid red",
          justifyContent: "flex-end",
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
          className="section2__container"
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
            <Image
              className="__img"
              src={trade}
              alt="toutes les marques de Maison Essenza"
              priority={false}
              placeholder="empty"
              width={900}
              height={600}
              style={{
                display: "block",
                objectFit: "cover",
                // width: "100%",
                // height: "100%",
              }}
            />
          </div>
          <div
            className="link_infos"
            style={{
              display: "flex",
              //border: "3px solid blue",
              width: "100%",
              height: "auto",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0, display: "flex" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingRight: "10px",
                }}
              >
                <span style={{ flex: 1 }}>Retrouvez-nous sur Instagram</span>
                <Image
                  src={insta}
                  alt="Icon 1"
                  width={54}
                  height={54}
                  style={{ objectFit: "cover" }}
                />
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingRight: "10px",
                }}
              >
                <span style={{ flex: 1 }}>Ecrivez-nous quelques lignes</span>
                <Image
                  src={mail}
                  alt="Icon 2"
                  width={54}
                  height={54}
                  style={{ objectFit: "cover" }}
                />
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingRight: "10px",
                }}
              >
                <span style={{ flex: 1 }}>
                  Nous visiter sans perdre le Nord
                </span>
                <Image
                  src={gps}
                  alt="Icon 3"
                  width={54}
                  height={54}
                  style={{ objectFit: "cover" }}
                />
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingRight: "10px",
                }}
              >
                <span style={{ flex: 1 }}>+3(0)45155164</span>
                <Image
                  src={phone}
                  alt="Icon 4"
                  width={54}
                  height={54}
                  style={{ objectFit: "cover" }}
                />
              </li>
            </ul>
          </div>
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
      </div>
    </>
  );
};

export default Section2;
