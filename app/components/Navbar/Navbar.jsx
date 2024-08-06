"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../NavItem/NavItem";
import logo from "@/public/assets/essenza-logo.png";
//Styles
import styles from "./styles.module.scss";

const MENU_LIST = [{ name: "Google Map", href: "/section1" }];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.__logo}>
            <Image
              className={styles.__img}
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
              }}
            />
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${navActive ? styles.active : ""} ${styles.__menu_list}`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.name}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
