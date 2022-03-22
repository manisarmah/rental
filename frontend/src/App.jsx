import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./homepage";

import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import Navbar from "./components/shared/navBar";
import axios from "axios";
import UserDetail from "./components/userDetail";
import QrScanner from "./components/QrScanner";
axios.defaults.baseURL = "/api";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/user-profile" component={UserDetail} />
          <Route exact path="/scan-now" component={QrScanner} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
