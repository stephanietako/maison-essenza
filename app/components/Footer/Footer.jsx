import React from "react";
//Styles
import styles from "./styles.module.scss";
import GoogleMap from "../GoogleMap/GoogleMap";

const Footer = () => {
  return (
    <>
      <h1
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        MAISON ESSENZA
      </h1>
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
                Téléphone: <a href="tel:+33123456789">+33 1 23 45 67 89</a>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
