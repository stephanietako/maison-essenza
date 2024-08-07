"use client";

import React from "react";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Assets
import trade from "@/public/assets/trade.png";
import insta from "@/public/assets/insta.png";
import mail from "@/public/assets/mail.png";
import gps from "@/public/assets/gps.png";
import phone from "@/public/assets/phone.png";
import arrowLeft from "@/public/assets/arrow-left.png";

const Section2 = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
    }
  };

  return (
    <div className={styles.section2} id="section2">
      <div className={styles.section2__container}>
        <div className={styles.section2__bloc}>
          {/* Flèche gauche */}
          <div className={`${styles.arrow_see_more} ${styles.left}`}>
            <Image
              className={styles.__arrow_left}
              src={arrowLeft}
              alt="Previous Section"
              priority={false}
              placeholder="empty"
              width={140}
              height={110}
              style={{
                display: "block",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("section1")}
            />
            <span className={styles.__arrow_left__text}>
              <p>Un peu moins</p>
            </span>
          </div>
          <h1>Quelques-unes de nos marques</h1>
          <div className={styles.section2__image_logo}>
            <Image
              className={styles.__img}
              src={trade}
              alt="toutes les marques de Maison Essenza"
              priority={false}
              placeholder="empty"
              width={1200}
              height={850}
            />
          </div>
          <div className={styles.link_infos}>
            <ul
              className={styles.link_list}
              style={{ listStyleType: "none", padding: 0, display: "flex" }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ flex: 1 }}>Retrouvez-nous sur Instagram</span>
                <a
                  href="#section3" // Lien vers la section3
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={insta}
                    alt="Instagram Icon"
                    width={74}
                    height={74}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      marginRight: "1.5rem",
                    }}
                  />
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span style={{ flex: 1 }}>Ecrivez-nous quelques lignes</span>
                <Image
                  src={mail}
                  alt="Mail Icon"
                  width={74}
                  height={74}
                  style={{
                    objectFit: "cover",
                    cursor: "pointer",
                    marginRight: "1.5rem",
                  }}
                />
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span style={{ flex: 1 }}>
                  Nous visiter sans perdre le Nord
                </span>
                <a
                  href="/section1" // Lien vers la page /section1
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={gps}
                    alt="GPS Icon"
                    width={74}
                    height={74}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      marginRight: "1.5rem",
                    }}
                  />
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span style={{ flex: 1 }}>+3(0)45155164</span>
                <Image
                  src={phone}
                  alt="Phone Icon"
                  width={74}
                  height={74}
                  style={{
                    objectFit: "cover",
                    cursor: "pointer",
                    marginRight: "1.5rem",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
