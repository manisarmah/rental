import React from "react";
import styles from "./style.module.css";

export default function AddCycle() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="cycle-img"
          src="/images/cycle.svg"
          height="110px"
          width="110px"
        />
      </div>
      <div className={styles.txtContainer}>
        <h3 className={styles.txt}>Cycle Added!</h3>
        <h5 className={styles.txt}>Collect your key from the key hub.</h5>
        <h6 className={styles.txt}>
          Please park the cycle to the station when you are reached to the
          destination.
        </h6>
        <button>Get key</button>
      </div>
    </div>
  );
}
