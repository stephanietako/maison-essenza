"use client";
import React from "react";
import Image from "next/image";
//import InstagramRecentPost from "../InstagramRecentPost/InstagramRecentPost";
// Assets
//import arrowRight from "@/public/assets/arrow-right.png";
import arrowLeft from "@/public/assets/arrow-left.png";
import styles from "./styles.module.scss";

const Section3 = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.section3} id="section3">
      {/* Flèche gauche */}
      <div className={styles.arrow_see_more}>
        <Image
          className={styles.__arrow_left}
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
          onClick={() => scrollToSection("section2")}
        />
        <span className={styles.__arrow_left__text}>
          <p>Un peu moins</p>
        </span>
      </div>

      <div className={styles.section3__container}>
        <main className={styles.section3__main}>
          <h1>Maison Essenza Instagram galerie</h1>
          <span className={styles.section3__post}>
            {/* <InstagramRecentPost /> */}
            HELLO WORLD
          </span>
        </main>
      </div>
    </div>
  );
};

export default Section3;
