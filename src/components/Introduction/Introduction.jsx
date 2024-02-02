import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.intro_left}>Let’s Introduce <br/> Ourself</div>
      <div className={styles.intro_right}>
        <h1>Criminal Lawyer</h1>
        <p>
          Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
