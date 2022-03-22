import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "../User/styles.module.css";
import DetailPopup from "../userDetailPopUp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// import AddCycle from "./cycleAddedPopUp";
// import TimerStarted from "./timerStarted";
// import TimerRunning from "./timerRunningPopUp";
// import TimerStopped from "./timerStoppedPopUp";

export default function PopUpPage2() {
  const [Dimn, SetDimn] = useState(false);
  return (
    <div>
      <Popup
        trigger={
          <button >
            <div className={styles.detail}>
              <AccountCircleOutlinedIcon
                style={{ fontSize: "4rem", marginRight: "0.2rem" }}
              />
              <h3 className={styles.name}>
                Hi Prince <br />
                <span style={{ fontSize: "0.8rem", color: "grey" }}>
                  G score:200
                </span>
              </h3>
            </div>
          </button>
        }
        // position="right center"
        modal
      >
        <div>
          <DetailPopup />
          {/* <AddCycle /> */}
          {/* <TimerStarted /> */}
          {/* <TimerRunning /> */}
          {/* <TimerStopped /> */}
        </div>
      </Popup>
    </div>
  );
}
