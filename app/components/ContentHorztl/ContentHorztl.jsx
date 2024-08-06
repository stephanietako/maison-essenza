"use client";

import { useRef, useEffect } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
// Styles
import styles from "./styles.module.scss";

const ContentHorztl = () => {
  const sectionWrapperRef = useRef(null);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;
    if (!sectionWrapper) return;

    let isScrolling = false;

    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY) * 70;
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          sectionWrapper.scrollLeft += delta;
          isScrolling = false;
        });
      }
      event.preventDefault();
    };

    sectionWrapper.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      sectionWrapper.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div ref={sectionWrapperRef} className={styles.section_wrapper}>
        <div className={styles.item}>
          <Section1 />
        </div>
        <div className={styles.item}>
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default ContentHorztl;
