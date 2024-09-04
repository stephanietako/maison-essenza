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
              {/* <Image
                className={styles.__img}
                src={trade}
                alt="toutes les marques de Maison Essenza"
                priority={false}
                placeholder="empty"
                width={1100}
                height={750}
              /> */}
              <Image
                src={trade}
                alt="Toutes les marques de Maison Essenza"
                // sizes="600px"
                layout="intrinsic"
                width={1100}
                height={750}
                priority={false}
                className={styles.__img}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
