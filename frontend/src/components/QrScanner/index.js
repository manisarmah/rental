import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Link } from "react-router-dom";

const QrScanner = (props) => {
  const [data, setData] = useState("No result");
  console.log(data);
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background:
            "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')",
        }}
      >
        <div
          style={{
            padding: "0.5rem 2rem 0",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          <h3>Align the QR code within the frame to scan</h3>
        </div>
        <div style={{ width: "100%", height: "56%" }}>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }
              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundRepeat: "no-repeat",
            border: "none",
            cursor: "pointer",
            overflow: "hidden",
            outline: "none",
            padding: "0.6rem 1rem",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: "500",
          }}
        >
          <Link to="/user-profile" style={{textDecoration:"none", color:"#fff"}}>Cancel Scan</Link>
        </div>
      </div>
      <p>{data}</p>
    </>
  );
};
export default QrScanner;
