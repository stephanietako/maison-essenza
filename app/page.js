"use client";

import React, { useRef, useEffect } from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Hero from "./components/Hero/Hero";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/essenza-logo.png";

export default function Home() {
  const sectionWrapperRef = useRef(null);
  const videoRef = useRef(null); // Reference for the video element
  const section1Ref = useRef(null); // Reference for section 1

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to scroll to Section 1 after 12 seconds
    const scrollToSection1 = () => {
      if (section1Ref.current) {
        section1Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (videoElement) {
      // Set a timer for 10 seconds
      const timer = setTimeout(scrollToSection1, 8000);

      // Clear the timer if the component unmounts
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;

    if (!sectionWrapper) return;

    // Function to handle horizontal scrolling with mouse wheel
    const handleScroll = (event) => {
      // Compatibility check for mouse wheel events
      const delta = Math.sign(event.deltaY); // 1 for down, -1 for up
      sectionWrapper.scrollBy({
        left: delta * 70, // Multiply the increment by delta for direction
        behavior: "smooth",
      });

      // Prevent vertical scrolling if we're inside the sectionWrapper
      event.preventDefault();
    };

    // Add event listener for the wheel
    sectionWrapper.addEventListener("wheel", handleScroll, { passive: false });

    // Clean up the event listener
    return () => {
      sectionWrapper.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Function to handle navigation click
  const handleNavClick = (sectionIndex) => {
    const sectionWrapper = sectionWrapperRef.current;
    if (sectionWrapper) {
      const sectionWidth = window.innerWidth; // Use window width for scroll calculation
      sectionWrapper.scrollTo({
        left: sectionIndex * sectionWidth, // Horizontal scroll to the target section
        behavior: "smooth",
      });
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
            // border: "3px solid blue",
          }}
        >
          <Image
            className="__img"
            src={logo}
            alt="Palm trees affair la ferme des palmiers"
            priority={false}
            width={140}
            height={140}
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
          <p>Section 1</p>
        </button>
        <button onClick={() => handleNavClick(2)}>
          <p>Section 2</p>
        </button>
        <button onClick={() => handleNavClick(3)}>
          <p>Section 3</p>
        </button>
      </nav>
      <div ref={sectionWrapperRef} className="section_wrapper">
        <div className="item">
          <Link href="/" ref={videoRef}>
            <Hero />
          </Link>
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
