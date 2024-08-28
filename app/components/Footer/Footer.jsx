import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import Image from "next/image";
import Link from "next/link";
// Assets
import insta from "@/public/assets/insta.png";
import mail from "@/public/assets/mail.png";
import gps from "@/public/assets/gps.png";
import phone from "@/public/assets/phone.png";
// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <div className={styles.footer__header}>
        {/* <Link href="/">
          <h1>MAISON ESSENZA</h1>
        </Link> */}
        <div className={styles.link_infos}>
          <ul className={styles.link_list}>
            <li className={styles.link}>
              <div className={styles.link__txt} id={styles.insta}>
                <p>Retrouvez-nous sur Instagram</p>
              </div>
              <span className={styles.link__img}>
                <a
                  href="https://www.instagram.com/maison_essenza/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <div className={styles.link__txt} id={styles.mail}>
                <p>Ecrivez-nous quelques lignes</p>
              </div>
              <span className={styles.link__img}>
                <a href="mailto:hello@maison-essenza.com">
                  <Image
                    src={mail}
                    alt="Mail Icon"
                    width={125}
                    height={125}
                    className={styles.__icon}
                  />
                </a>
              </span>
            </li>
            <li className={styles.link}>
              <div className={styles.link__txt} id={styles.gps}>
                <p>Nous visiter sans perdre le Nord</p>
              </div>
              <span className={styles.link__img}>
                <a href="#footer">
                  <Image
                    src={gps}
                    alt="GPS Icon"
                    width={120}
                    height={120}
                    className={styles.__icon}
                  />
                </a>
              </span>
            </li>
            <li className={styles.link}>
              <div className={styles.link__txt} id={styles.phone}>
                <p>+33(0)4 51 55 51 60</p>
              </div>
              <span className={styles.link__img}>
                <a href="tel:+33451555164">
                  <Image
                    src={phone}
                    alt="Phone Icon"
                    width={55}
                    height={55}
                    className={styles.__icon}
                  />
                </a>
              </span>
            </li>
          </ul>
        </div>
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
                Téléphone: <a href="tel:+33451555160">+33(0)4 51 55 51 60</a>
              </p>
            </li>
            <li>
              <p>
                {" "}
                Email:{" "}
                <a href="mailto:hello@maison-essenza.com">
                  hello@maison-essenza.com
                </a>
              </p>
            </li>
          </ul>

          {/* <span
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
          </span> */}
        </div>
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
    </>
  );
};

export default Footer;
