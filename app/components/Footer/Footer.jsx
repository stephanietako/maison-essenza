// Footer.js
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import Map from "../Map/Map";
// Assets
import insta from "@/public/assets/insta.png";
import mail from "@/public/assets/mail.png";
import gps from "@/public/assets/gps.png";
import phone from "@/public/assets/phone.png";
import bulle from "@/public/assets/bulle.png";
import logo from "@/public/assets/essenza-icon.jpeg";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.footer__header}>
        {/* banner  */}
        <div className={styles.link_infos}>
          <ul className={styles.link_list}>
            <li className={styles.link}>
              <div className={styles.link__txt}>
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
                    width={70}
                    height={70}
                    className={styles.__icon}
                    id={styles.insta}
                  />
                </a>
              </span>
            </li>
            <li className={styles.link}>
              <div className={styles.link__txt}>
                <p>Ecrivez-nous quelques lignes</p>
              </div>
              <span className={styles.link__img}>
                <a href="mailto:hello@maison-essenza.com">
                  <Image
                    src={mail}
                    alt="Mail Icon"
                    width={70}
                    height={70}
                    className={styles.__icon}
                    id={styles.mail}
                  />
                </a>
              </span>
            </li>
            <li className={styles.link}>
              <div className={styles.link__txt}>
                <p>Nous visiter sans perdre le Nord</p>
              </div>
              <span className={styles.link__img}>
                <a href="#footer">
                  <Image
                    src={gps}
                    alt="GPS Icon"
                    width={70}
                    height={70}
                    className={styles.__icon}
                    id={styles.gps}
                  />
                </a>
              </span>
            </li>
            <li className={styles.link}>
              <div className={styles.link__txt}>
                <p>+33(0)4 51 55 51 60</p>
              </div>
              <span className={styles.link__img}>
                <a href="tel:+33451555164">
                  <Image
                    src={phone}
                    alt="Phone Icon"
                    width={35}
                    height={35}
                    className={styles.__icon}
                    id={styles.phone}
                  />
                </a>
              </span>
            </li>
          </ul>
        </div>
        {/* end banner  */}
      </div>

      <div className={styles.footer__container}>
        <div className={styles.footer__bloc} id="footer">
          <div className={styles.__bloc_container}>
            <div className={styles.__bloc_content}>
              <div className={styles.google}>
                <Map />
              </div>

              <span className={styles.footer_list__content}>
                <ul className={styles.footer_list__border}>
                  <li>
                    <p>Retrouvez-nous chez Maison Essenza au: </p>
                  </li>
                  <li>
                    <p> 33 rue Marceau - 83310 Cogolin</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <a href="tel:+33451555160">+33 (0)4 51 55 51 60</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto:hello@maison-essenza.com">
                        hello@maison-essenza.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Un showroom, une boutique, un univers unique, un lieu
                      d&apos;inspiration, un endroit pour rêver la maison ...
                    </p>
                  </li>
                </ul>
              </span>
            </div>
            {/* footer bottom bloc */}
            <div className={styles.footer_infos}>
              <div className={styles.footer_infos__container}>
                <div className={styles.column}>
                  <span className={styles.column__title}>
                    {" "}
                    <h3>RESTONS CONNECTÉS</h3>
                  </span>
                  <ul>
                    <li className={styles.__info} id={styles.__info_insta}>
                      <a
                        href="https://www.instagram.com/maison_essenza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.__link}
                      >
                        <span className={styles.__img}>
                          <Image
                            src={insta}
                            alt="Instagram Icon"
                            width={30}
                            height={40}
                            className={styles.__icon}
                          />
                        </span>
                        <span className={styles.__txt} id={styles.__text_insta}>
                          <p>Instagram</p>
                        </span>
                      </a>
                    </li>
                    <li className={styles.__info} id={styles.__info_mail}>
                      <a href="mailto:hello@maison-essenza.com">
                        <span className={styles.__img}>
                          <Image
                            src={mail}
                            alt="Mail Icon"
                            width={30}
                            height={40}
                            className={styles.__icon}
                          />
                        </span>
                        <span className={styles.__txt} id={styles.__text_mail}>
                          <p>Mail</p>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.column}>
                  <span className={styles.column__title}>
                    {" "}
                    <h3>LIENS UTILES</h3>
                  </span>
                  <ul>
                    <li className={styles.__info}>
                      <Link href="/">
                        <div className={styles.__txt}>
                          <p>Accueil</p>
                        </div>
                      </Link>
                    </li>
                    <li className={styles.__info}>
                      <div className={styles.__txt} onClick={handleBrandClick}>
                        <p>nos marques</p>
                      </div>
                    </li>
                    <li className={styles.__info}>
                      <div className={styles.__txt}>
                        <a href="tel:+33451555160">
                          <p>Nous contacter</p>
                        </a>
                      </div>
                    </li>
                    <li className={styles.__info}>
                      <Link href="/mentions">
                        <div className={styles.__txt}>
                          <p>Mentions Légales</p>
                        </div>
                      </Link>
                    </li>
                    <li className={styles.__info}>
                      <Link href="/rgpd">
                        <div className={styles.__txt}>
                          <p>RGPD - Politique de confidentialité</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.column}>
                  <span className={styles.column__title}>
                    {" "}
                    <h3>CONTACT</h3>
                  </span>

                  <ul>
                    <li
                      className={`${styles.__info} ${styles.__info_adress_bloc}`}
                    >
                      <div className={styles.__txt}>
                        <p id={styles.adress}>
                          {/* Maison Essenza <br /> */}
                          Siège Social et Magasin <br />
                          Golfe de Saint-tropez <br />
                          33 rue Marceau - 83310 Cogolin
                        </p>
                      </div>
                    </li>
                    <li className={styles.__info}>
                      {" "}
                      <a href="tel:+33451555160">
                        <div className={styles.__txt}>
                          <p id={styles.number}>+33 (0)4 51 55 51 60</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.__copyright}>
                <span
                  className={styles.__copyright__img}
                  style={{
                    display: "block",
                    width: "auto",
                    height: "auto",
                    padding: "0.5rem",
                  }}
                >
                  {" "}
                  <Image
                    src={logo}
                    alt="Maison Essenza logo"
                    width={15}
                    height={15}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </span>
                &#169; Copyright {currentYear} |
                <a
                  href="https://www.takodev.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tako Dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
