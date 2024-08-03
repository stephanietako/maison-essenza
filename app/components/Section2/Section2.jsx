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
import arrowRight from "@/public/assets/arrow-right.png";
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
      {/* Flèche gauche */}
      <div className={`${styles.arrow_see_more} ${styles.left}`}>
        <Image
          className={styles.__arrow_left}
          src={arrowLeft}
          alt="Previous Section"
          priority={false}
          placeholder="empty"
          width={80}
          height={80}
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
      <div className={styles.section2__container}>
        <div className={styles.section2__bloc}>
          <h1>Quelques-unes de nos marques</h1>
          <div className={styles.section2__image_logo}>
            <Image
              className={styles.__img}
              src={trade}
              alt="toutes les marques de Maison Essenza"
              priority={false}
              placeholder="empty"
              width={800}
              height={510}
            />
          </div>
          <div
            className="link_infos"
            style={{
              display: "flex",
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
                    width={54}
                    height={54}
                    style={{ objectFit: "cover", cursor: "pointer" }}
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
                    width={54}
                    height={54}
                    style={{ objectFit: "cover", cursor: "pointer" }}
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
                  width={54}
                  height={54}
                  style={{ objectFit: "cover" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div className={`${styles.arrow_see_more} ${styles.right}`}>
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
          onClick={() => scrollToSection("section3")}
        />
        <span className={styles.__arrow_right__text}>
          <p>Un peu plus</p>
        </span>
      </div>
    </div>
  );
};

export default Section2;
