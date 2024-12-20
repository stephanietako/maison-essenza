import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
// Assets
import trade from "@/public/assets/trade.png";
import arrowLeft from "@/public/assets/arrow-left.png";

const Section2 = ({ handleExitClick }) => {
  return (
    <>
      <div className={styles.section2} id="section2">
        <div className={styles.section2__container}>
          <div className={styles.section2__bloc}>
            {/* Flèche gauche */}
            <Link href="sectionHome" onClick={handleExitClick}>
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
              <div className={styles.__image_logo__bloc}>
                <Image
                  src={trade}
                  alt="Toutes les marques de Maison Essenza"
                  sizes="(max-width: 1100px) 100vw, 1100px 70vw, 768px 50wv"
                  width={1100}
                  height={750}
                  priority={true}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
