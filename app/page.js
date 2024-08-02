"use client";

import React, { useRef, useEffect, useState } from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Hero from "./components/Hero/Hero";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/essenza-logo.png";

export default function Home() {
  const sectionWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const section1Ref = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Effet pour défiler vers la première section après 8 secondes
  useEffect(() => {
    const videoElement = videoRef.current;

    const scrollToSection1 = () => {
      if (section1Ref.current) {
        section1Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (videoElement) {
      const timer = setTimeout(scrollToSection1, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Effet pour gérer le défilement horizontal
  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;

    if (!sectionWrapper) return;

    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      sectionWrapper.scrollBy({
        left: delta * 70,
        behavior: "smooth",
      });
      event.preventDefault();
    };

    sectionWrapper.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      sectionWrapper.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Effet pour gérer les transitions de fondu
  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;
    if (sectionWrapper) {
      const sections = sectionWrapper.querySelectorAll(".item");
      sections.forEach((section, index) => {
        if (index === activeSection) {
          section.classList.add("active");
          section.classList.remove("inactive");
        } else {
          section.classList.remove("active");
        }
      });
    }
  }, [activeSection]);

  const handleNavClick = (sectionIndex) => {
    const sectionWrapper = sectionWrapperRef.current;
    if (sectionWrapper) {
      const sectionWidth = window.innerWidth;
      sectionWrapper.scrollTo({
        left: sectionIndex * sectionWidth,
        behavior: "smooth",
      });
      setActiveSection(sectionIndex);
    }
  };

  return (
    <>
      <nav className="navigation">
        <span
          className="__logo"
          onClick={() => handleNavClick(0)}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
          }}
        >
          <Image
            className="__img"
            src={logo}
            alt="Palm trees affair la ferme des palmiers"
            priority={false}
            width={120}
            height={120}
            style={{
              display: "block",
              objectFit: "cover",
              width: "auto",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </span>

        <button onClick={() => handleNavClick(1)}>
          <p>Notre Philosophie</p>
        </button>
        <button onClick={() => handleNavClick(2)}>
          <p>Les Marques</p>
        </button>
        <button onClick={() => handleNavClick(3)}>
          <p>Insta Galerie</p>
        </button>
      </nav>
      <div ref={sectionWrapperRef} className="section_wrapper">
        <div className="item" ref={videoRef}>
          <Hero />
        </div>
        <div className="item" ref={section1Ref}>
          <Section1 />
        </div>
        <div className="item">
          <Section2 />
        </div>
        <div className="item">
          <Section3 />
        </div>
      </div>
    </>
  );
}
