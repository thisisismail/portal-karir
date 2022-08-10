import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { userData } from "../../store/Redux/action/index.js";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../store/Firebase/index.js";

export default function LoginButton() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  };

  const ascii_to_hexa = (str) => {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join("");
  };

  useEffect(() => {
    if (user.name) {
      const userID = ascii_to_hexa(user.email);
      const database = getDatabase(app);
      const userObject = {
        username: user.name,
        email: user.email,
        keyId: userID,
        picture: user.picture,
      };

      // store user data to redux
      dispatch(userData(userObject));
      // store user data to firebase
      set(ref(database, "users/" + userID), userObject);
      console.log("Stored To firebse");
    }
    // console.log(user.email);
  }, [dispatch, user]);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signalDiv"), {
      // type: "icon",
      theme: "filled_blue",
      size: "large",
      shape: "circle",
      width: "100",
    });
  }, []);

  return (
    <div className="w-full border-0 h-full border-red-200">
      <div id="signalDiv"></div>
    </div>
  );
}
