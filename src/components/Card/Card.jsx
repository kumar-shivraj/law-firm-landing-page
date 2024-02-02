import React from "react";
import styles from "./Card.module.css";
import 'boxicons/css/boxicons.min.css';

const Card = () => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.iconBox}>
                <box-icon name='gift' type='solid' size="md" color='#2b2b2b'></box-icon>
            </div>
            <h2>99% Success Rate</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ex vitae, consequuntur error saepe harum eveniet </p>
            <button>Read More</button>
        </div>
    </>
  );
};

export default Card;
