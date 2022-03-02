import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignIn() {
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signin",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="849634220955-82str2otge351k1kipscgujiao89678u.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;
