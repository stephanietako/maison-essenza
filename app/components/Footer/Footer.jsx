import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import Link from "next/link";
//Styles
import styles from "./styles.module.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <div className={styles.footer__header}>
        <Link href="/">
          <h1>MAISON ESSENZA</h1>
        </Link>
      </div>
      <div className={styles.footer__container} id="footer">
        <div className={styles.footer__bloc}>
          <div className={styles.google}>
            <span className={styles.google}>
              <GoogleMap />
            </span>
          </div>
          <ul className={styles.footer_list}>
            <li>
              <p>Maison Essenza</p>
            </li>
            <li>
              <p>Adresse: 33 Rue Marceau, 830110, Cogolin</p>
            </li>
            <li>
              <p>
                {" "}
                Téléphone: <a href="tel:+33123456789">+33(0)4 51 55 51 64</a>
              </p>
            </li>
            <li>
              <p>
                {" "}
                Email:{" "}
                <a href="mailto:m.lehmann@maison-essenza.com">
                  m.lehmann@maison-essenza.com
                </a>
              </p>
            </li>
          </ul>

          <span
            className={styles.infos}
            style={{
              display: "flex",
              width: "100%",
              height: "2rem",
              position: "absolute",
              bottom: 0,
              paddingLeft: "2rem",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <p
                style={{
                  fontSize: "0.5rem",
                  display: "flex",
                  width: "6rem",
                }}
              >
                Mentions Légales
              </p>
            </Link>
            <Link href="/">
              <p
                style={{
                  display: "flex",
                  fontSize: "0.5rem",
                  width: "4rem",
                }}
              >
                RGPD
              </p>
            </Link>
            <div
              className={styles.__copyright}
              style={{
                display: "flex",
                flexWrap: "wrap",
                color: "#000",
                fontSize: "10px",
                width: "100%",
                // border: "3px solid blue",
                alignItems: "center",
              }}
            >
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
