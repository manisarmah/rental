import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PopUpPage from "./components";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PopUpPage />
  </React.StrictMode>,
  document.getElementById("root")
);
