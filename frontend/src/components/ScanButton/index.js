import React from "react";
import styles from "./styles.module.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { Link } from "react-router-dom";

const ScanButton = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <Link to='/scan-now'>
          <QrCodeScannerIcon style={{ fontSize: "3rem" }} />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ScanButton;
