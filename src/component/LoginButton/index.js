import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../store/action/index.js";

export default function LoginButton() {
  const [user, setUser] = useState({});

  const userDataRdx = useSelector((state) => state.userDataReducer);
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    dispatch(userData(user));
  }, [user]);

  useEffect(() => {
    console.log("userDataRdx START" + userDataRdx);
    console.log(userDataRdx);
    console.log("userDataRdx FINISH");
  }, [userDataRdx]);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "256384375485-m4kkh9cnfqa9u2en1qe0a15jjum4tbji.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signalDiv"), {
      type: "icon",
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="w-full border-0 border-red-200">
      <div id="signalDiv"></div>
    </div>
  );
}
