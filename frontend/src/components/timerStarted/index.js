import React from "react";
import styles from "./style.module.css";

export default function TimerStarted() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="cycle-img"
          src="/images/cycle.svg"
          height="90px"
          width="90px"
        />
      </div>
      <div className={styles.txtContainer}>
        <h3 className={styles.txt}>Timer Started!</h3>
        <h6 className={styles.txt}>
          Please park the cycle to the station when you are reached to the
          destination.
        </h6>
        <h6>Enjoy your ride!</h6>
        <button>00:02:32</button>
      </div>
    </div>
  );
}
