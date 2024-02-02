import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className={styles.navbar}>
          <div className={styles.navlink}>Home</div>
          <div className={styles.navlink}>Attorneys</div>
          <div className={styles.navlink}>Practice Areas</div>
          <div className={styles.navlink}>About Us</div>
        </div>
        <div className={styles.contactbtn}>Contact Now</div>
      </div>
    </>
  );
};

export default Navbar;
