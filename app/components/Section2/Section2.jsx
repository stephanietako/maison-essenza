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
              width={160}
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
              width={1100}
              height={780}
            />
          </div>
          {/* Links infos */}
          <div className={styles.link_infos}>
            <ul className={styles.link_list}>
              <li className={styles.link}>
                <span className={styles.link__txt}>
                  {" "}
                  <p>Retrouvez-nous sur Instagram</p>
                </span>
                <span className={`${styles.link__img} `} id={`${styles.insta}`}>
                  <a href="#section3">
                    <Image
                      src={insta}
                      alt="Instagram Icon"
                      width={100}
                      height={100}
                      className={styles.__icon}
                    />
                  </a>
                </span>
              </li>
              <li className={styles.link}>
                <span className={styles.link__txt}>
                  {" "}
                  <p>Ecrivez-nous quelques lignes</p>
                </span>
                <span className={`${styles.link__img} `} id={`${styles.mail}`}>
                  <Image
                    src={mail}
                    alt="Mail Icon"
                    width={100}
                    height={100}
                    className={styles.__icon}
                  />
                </span>
              </li>
              <li className={styles.link}>
                <span className={styles.link__txt}>
                  {" "}
                  <p>Nous visiter sans perdre le Nord</p>
                </span>
                <span className={`${styles.link__img} `} id={`${styles.gps}`}>
                  <a href="/section1">
                    <Image
                      src={gps}
                      alt="GPS Icon"
                      width={100}
                      height={100}
                      className={styles.__icon}
                    />
                  </a>
                </span>
              </li>
              <li className={styles.link}>
                <span className={styles.link__txt}>
                  {" "}
                  <p>+33(0)45155164</p>
                </span>
                <span className={`${styles.link__img} `} id={`${styles.phone}`}>
                  <Image
                    src={phone}
                    alt="Phone Icon"
                    width={55}
                    height={55}
                    className={styles.__icon}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
