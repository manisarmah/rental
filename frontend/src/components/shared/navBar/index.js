import React from "react";
import styles from "./navbar.module.css";
import NavImg from "./navImage.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img
        src={NavImg}
        alt="logo"
        style={{ height: "100px", width: "180px" }}
      />
    </div>
  );
};

export default Navbar;
