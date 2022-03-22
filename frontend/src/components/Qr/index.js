import React from "react";
import QRCode from "react-qr-code";
import styles from "./style.module.css";

const Qr = () => {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopQrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div className={styles.qr_container}>
    <QRCode value={makeid(5)}/>
    </div>
  );
};

export default Qr;
