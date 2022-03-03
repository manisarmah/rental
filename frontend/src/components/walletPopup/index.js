import React from "react";
import styles from "./style.module.css";

export default function Wallet() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="wallet-img"
          src="/images/Wallet.png"
          height="90px"
          width="90px"
        />
      </div>
      <div className={styles.txtContainer}>
        <h2 className={styles.txt}>You Have</h2>
        <h3 className={styles.txt}>₹139.00</h3>
        <button>Add Money</button>
      </div>
    </div>
  );
}
