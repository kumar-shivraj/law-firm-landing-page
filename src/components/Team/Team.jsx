import React from "react";
import styles from "./Team.module.css";
import TeamCard from "../TeamCard/TeamCard";

const Team = () => {
  return (
  <>
    <div className={styles.wrapper}>
      <h1>Our Team</h1>
      <div className={styles.card_rapper}>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
    </div>
  </>
  );
};

export default Team;
