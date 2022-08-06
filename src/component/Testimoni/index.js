import React, { useEffect, useState } from "react";
import avatar from "../../assets/img/profile-square.png";
import { Button } from "@material-tailwind/react";
////////////////////////////////////////////////////////////////////////
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { userData } from "../../store/Redux/action/index.js";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../store/Firebase/index.js";

export default function Testimoni() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(
    <div className="h-20 aspect-square rounded-full animate-pulse bg-grey-200 flex justify-center items-center text-center text-grey-600">
      Profile picture
    </div>
  );
  const [alt, setAlt] = useState("");
  const [display, setDisplay] = useState("hidden");

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
    // store user data to redux
    dispatch(userData(user));

    // store user data to firebase
    if (user.name) {
      // console.log(user.name);
      const userID = ascii_to_hexa(user.email);
      const database = getDatabase(app);
      set(ref(database, "users/" + userID), {
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

    google.accounts.id.renderButton(document.getElementById("signalDiv1"), {
      type: "standard",
      theme: "filled_blue",
      size: "large",
      shape: "circle",
      width: "100",
      text: "sigin",
    });
  }, []);

  const myClass = `h-20 w-20 object-fill rounded-full ${display}`;

  return (
    <div className="rounded-t-xl h-80 md:h-96 pt-8 md:pt-16  flex justify-start items-center flex-col bg-green-100">
      <h1 className="text-left font-mono font-bold text-green-700 text-3xl md:text-5xl">
        Apa kata mereka ?
      </h1>
      <div className="pt-6 flex flex-row justify-center items-center gap-4 border-0 w-full">
        <img
          src={avatar}
          alt={alt}
          className={myClass}
          onLoad={() => {
            setLoading();
            setAlt("Profile picture");
            setDisplay("");
            console.log("Djoko image is fully loaded");
          }}
        ></img>
        {loading}
        <div style={{ maxWidth: 500 }} className="border-0">
          <h5 className="border-0 font-normal font-mono text-grey-600 text-xs md:text-xl w-52 md:w-full">
            Saya merasa terbantu dengan adanya website{" "}
            <span className="font-bold">Portal Karir</span>, dengan adanya
            website ini Saya dapat mepersiapkan dunia kerja lebih baik lagi
          </h5>
        </div>
      </div>
      <div className="pt-4 flex justify-center border-0 w-full px-4">
        <h1 className="border-0 italic text-xs md:text-base">
          Djoko | Frontend Developer di Gojek
        </h1>
      </div>
      <div className="w-full h-full flex items-end border-0">
        <div className="bg-indigo-900 w-full py-4 flex justify-center border-0">
          {/* <Button className="bg-green-600 text-white font-bold flex flex-row justify-center items-center gap-2">
            DAFTAR SEKARANG
          </Button> */}
          <div className="border-0">
            <div id="signalDiv1" className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
