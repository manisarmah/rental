import React from "react";
import Popup from "reactjs-popup";
import Wallet from "./walletPopup";
// import DetailPopup from "./userDetailPopUp";
// import AddCycle from "./cycleAddedPopUp";
// import TimerStarted from "./timerStarted";
// import TimerRunning from "./timerRunningPopUp";
// import TimerStopped from "./timerStoppedPopUp";

export default function PopUpPage() {
  return (
    <div>
      <Popup
        trigger={<button> Click to open popup </button>}
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
