import React from "react";
//Styles
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__bloc}>
        <h1>FOOTER !!!!!</h1>
        <ul className={styles.footer_list}>
          <li>Adresse : 123 Rue Exemple, Paris, France</li>
          <li>
            Téléphone : <a href="tel:+33123456789">+33 1 23 45 67 89</a>
          </li>
          <li>
            Email : <a href="mailto:contact@exemple.com">contact@exemple.com</a>
          </li>
        </ul>
        <div>google map ici !!!!</div>
      </div>
    </div>
  );
};

export default Footer;
