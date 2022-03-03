import React from "react";
import styles from "./style.module.css";

export default function TimerStopped() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="cycle-img"
          src="/images/cycle.svg"
          height="250px"
          width="120px"
        />
      </div>
      <div className={styles.txtContainer}>
        <h3 className={styles.txt}>Timer Stopped!</h3>
        <h6 className={styles.txt}>Please park the cycle to the station.</h6>
        <h5>To be paid</h5>
        <button>Pay Now</button>
      </div>
    </div>
  );
}
