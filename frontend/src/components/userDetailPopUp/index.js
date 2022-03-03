import React from "react";
import styles from "./style.module.css";

export default function DetailPopup() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          alt="profile-icon"
          src="/images/Group.svg"
          height="25px"
          width="25px"
        />
        <h3 className={styles.txtUpper}>Manish Sarmah</h3>
        <h6 className={styles.txtUpper}>SID:2012117</h6>
      </div>
      <div className={styles.txt}>
        <h4>Email</h4>
        <h5>manish_ug@cse.nits.ac.in</h5>
        <h4>Phone</h4>
        <h5>+91-9876543210</h5>
        <h4>Password</h4>
        <h5>Change Password</h5>
        <div className={styles.button}>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
