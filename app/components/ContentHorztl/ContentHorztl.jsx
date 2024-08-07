"use client";

import { useRef, useEffect } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
// Styles
import styles from "./styles.module.scss";

export default function ComponentHorztl() {
  const sectionWrapperRef = useRef(null);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;
    if (!sectionWrapper) return;
  }, []);

  return (
    <div className={styles.content_horizontal}>
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
}
