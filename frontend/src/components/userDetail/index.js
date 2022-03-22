import React from "react";
import ScanButton from "../../components/ScanButton";
import Ad from "../../components/Ad";
import RideHistory from "../../components/RideHistory";
import User from "../User";

const UserDetail = () => {
  return (
    <>
      <User />
      <RideHistory />
      <Ad />
      <ScanButton />
    </>
  );
};

export default UserDetail;
