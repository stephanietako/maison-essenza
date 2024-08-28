import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./styles.module.scss";
// Assets
import trade from "@/public/assets/trade.png";
// import insta from "@/public/assets/insta.png";
// import mail from "@/public/assets/mail.png";
// import gps from "@/public/assets/gps.png";
// import phone from "@/public/assets/phone.png";
import arrowLeft from "@/public/assets/arrow-left.png";

const Section2 = ({ handleExitClick }) => {
  return (
    <>
      <div className={styles.section2} id="section2">
        <div className={styles.section2__container}>
          <div className={styles.section2__bloc}>
            {/* Flèche gauche */}
            <Link href="/" onClick={handleExitClick}>
              <div className={`${styles.arrow_see_more} ${styles.left}`}>
                <Image
                  className={styles.__arrow_left}
                  src={arrowLeft}
                  alt="Previous Section"
                  priority={false}
                  placeholder="empty"
                  width={130}
                  height={100}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
                <span className={styles.__arrow_left__text}>
                  <p>Un peu moins</p>
                </span>
              </div>
            </Link>
            <h1>Quelques-unes de nos marques</h1>
            <div className={styles.section2__image_logo}>
              <Image
                className={styles.__img}
                src={trade}
                alt="toutes les marques de Maison Essenza"
                priority={false}
                placeholder="empty"
                width={1100}
                height={750}
              />
            </div>
            {/* Links infos */}
            {/* <div className={styles.link_infos}>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
