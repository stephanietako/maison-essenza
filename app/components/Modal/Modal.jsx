import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Styles
import styles from "./styles.module.scss";
// Assets
import trade from "@/public/assets/trade.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.modal}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: isOpen ? 1 : 0.8, opacity: isOpen ? 1 : 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Adjust duration and easing for scaling effect
    >
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <div className={styles.modalBody}>
          <div className={styles.section2__container}>
            <div className={styles.section2__bloc}>
              <h1>Quelques-unes de nos marques</h1>
              <div className={styles.section2__image_logo}>
                <div className={styles.__image_logo__bloc}>
                  <Image
                    src={trade}
                    alt="Toutes les marques de Maison Essenza"
                    sizes="(max-width: 970px) 100vw, 970px 70vw, 450px 50wv"
                    width={970}
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
      </div>
    </motion.div>
  );
};

export default Modal;
