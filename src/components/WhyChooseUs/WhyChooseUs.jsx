import React from "react";
import styles from "./WhyChooseUs.module.css";
import Card from "../Card/Card";

const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Why Choose us?</h1>

      {/* ====== design card as per require. Either choose library or pure css =========== */}
      {/* ======  if choosing library then go for swiper.js and MUI. if not comfortable with this then go for other ====== */}
      {/* ============= find the require text inside src/Texts.txt  ==================== */}
      <div className={styles.card_rapper}>

        {/* ======== just a demo as below, we can use re-usable card component instead of div  */}
        {/* <div className={styles.card} isbrownShadow></div>
        <div className={styles.card} isbrownShadow></div>
        <div className={styles.card} isbrownShadow></div> */}
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default WhyChooseUs;
