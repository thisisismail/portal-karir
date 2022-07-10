import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { userData } from "../../store/Redux/action/index.js";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../store/Firebase/index.js";

export default function LoginButton() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    // store user data to redux
    dispatch(userData(user));

    // store user data to firebase
    if (user.name) {
      // console.log(user.name);
      const database = getDatabase(app);
      set(ref(database, "users"), {
        username: user.name,
        email: user.email,
      });
    }
    // console.log(user.email);
  }, [user]);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signalDiv"), {
      type: "icon",
      theme: "filled_blue",
      size: "large",
      shape: "circle",
    });
  }, []);

  return (
    <div className="w-full border-0 h-full border-red-200">
      <div id="signalDiv"></div>
    </div>
  );
}
