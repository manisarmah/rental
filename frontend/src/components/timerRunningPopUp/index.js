import React from "react";
import styles from "./style.module.css";

export default function TimerRunning() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="cycle-img"
          src="/images/cycle.svg"
          height="210px"
          width="110px"
        />
      </div>
      <div className={styles.txtContainer}>
        <h3 className={styles.txt}>Timer Running</h3>
        <button className={styles.timerBtn}>00:02:32</button>
        <div>
          <button className={styles.qrBtn}>
            <img
              alt="qr-img"
              src="/images/QRimg.png"
              height="50px"
              width="50px"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
