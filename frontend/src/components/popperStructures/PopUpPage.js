import React from "react";
import Popup from "reactjs-popup";
import Wallet from "../walletPopup";
import styles from '../User/styles.module.css'
// import DetailPopup from "./userDetailPopUp";
// import AddCycle from "./cycleAddedPopUp";
// import TimerStarted from "./timerStarted";
// import TimerRunning from "./timerRunningPopUp";
// import TimerStopped from "./timerStoppedPopUp";

export default function PopUpPage() {
  return (
    <div>
      <Popup
        trigger={
          <button>
           <div className={styles.wallet}>💸 500.00</div> 
          </button>
        }
        // position="right center"
        modal
      >
        <div>
          <Wallet />
          {/* <DetailPopup /> */}
          {/* <AddCycle /> */}
          {/* <TimerStarted /> */}
          {/* <TimerRunning /> */}
          {/* <TimerStopped /> */}
        </div>
      </Popup>
    </div>
  );
}
