import React from "react";
import styles from "./styles.module.css";
import PopUpPage from "../popperStructures/PopUpPage";
import PopUpPage2 from "../popperStructures/PopUpPage2";

const User = () => {
  return (
    <div className={styles.outer} >
      <PopUpPage2  />
      <PopUpPage  />
    </div>
  );
};

export default User;
