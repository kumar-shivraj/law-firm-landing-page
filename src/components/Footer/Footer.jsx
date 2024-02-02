import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top_footer}>
        <div className={styles.foolter_logo}></div>
        <div className={styles.footer_nav}>
          <div>Home</div>
          <div>Attorneys</div>
          <div>Practice Areas </div>
          <div>About Us</div>
        </div>
        <div className={styles.footer_social}>
          {/* ==========  Insta, Facebook, Titter and Other Icon =========== */}
        </div>
      </div>
      <div className={styles.bottom_footer}>
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
