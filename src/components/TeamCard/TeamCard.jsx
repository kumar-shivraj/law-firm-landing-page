import React from "react";
import styles from "./TeamCard.module.css";
import img1 from "../../assets/Ellipse 14 (1).png";

const TeamCard = () => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.iconBox}>
                <img src={img1} alt="" />
            </div>
            <div className={styles.info}>
                <h2>Danial Def</h2>
                <p>Lorem ipsum dolor </p>
            </div>
        </div>
    </>
  );
};

export default TeamCard;
