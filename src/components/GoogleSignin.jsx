import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Client ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center items-center h-screen">
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Login Success:", response);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
