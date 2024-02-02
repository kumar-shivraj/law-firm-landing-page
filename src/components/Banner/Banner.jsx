import React from "react";
import styles from "./Banner.module.css";
import Image from "../../assets/Image.png";
import 'boxicons/css/boxicons.min.css';

const Banner = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.bannerText}>
          <div className={styles.header}>
            You don’t have to <br/><span>Fight them Alone.</span>
          </div>
          <div className={styles.para_text}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </div>
          <div className={styles.emailBox}>
            <box-icon name='envelope' type='solid' color='#757575'></box-icon>
            <input type="text" placeholder="Enter your email address"/>
            <button>Let's Talk</button>
          </div>
        </div>
        <div className={styles.bannerImage}>
          <div className={styles.img_back}>
            <img className={styles.bannerImg} src={Image} alt="banner" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
