import React from "react";
import styles from "./ImageCard2.module.css";
import 'boxicons/css/boxicons.min.css';
import img1 from "../../assets/Rectangle 3654.png";
import img2 from "../../assets/Rectangle 3655.png";

const ImageCard2 = (props) => {
  return (
    <>
        <div className={styles.cardRow}>
            <div className={styles.imageCard}>
                <img src={props.image1} alt="" />
                <h2>{props.title1}</h2>
            </div>

            <div className={styles.imageCard}>
                <img src={props.image2} alt="" />
                <h2>{props.title2}</h2>
            </div>
        </div>
    </>
  );
};

export default ImageCard2;
