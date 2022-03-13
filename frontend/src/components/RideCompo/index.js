import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.css";

const RideCompo = (props) => {
  const { date, pickUp, rideTime } = props;
  return (
    <div className={styles.ride_compo}>
      <div className={styles.left}>
        <h4>
          {date} <br />
          <span style={{ fontSize: "0.8rem", fontWeight: "400" }}>
            Pickup: {pickUp}
          </span>
        </h4>
      </div>
      <div>
        <h5 className={styles.right} style={{ fontSize: "1.2rem" }}>
          <AccessTimeIcon />
          {rideTime}
        </h5>
      </div>
    </div>
  );
};

export default RideCompo;
