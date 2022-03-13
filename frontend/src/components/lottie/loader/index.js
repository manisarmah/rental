import React from "react";
import styles from "./styles.module.css";

export default function Load() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.loaad}>
      <div className={styles.inner_loaad}>
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_ht8zw3es.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
