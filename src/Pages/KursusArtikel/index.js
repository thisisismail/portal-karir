import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { Card, Button } from "@material-tailwind/react";
import { app } from "../../store/Firebase/index.js";
import { dispatch } from "react-redux";
import firebase from "firebase/compat/app";

export default function KursusArtikel() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchFirebase();
  }, []);

  useEffect(() => {
    console.log("Data from local state");
    console.log(data);
  }, [data]);

  const fetchFirebase = () => {
    console.log("Retrive data from firebase");

    const myDatabase = getDatabase(app);
    const dbRef = ref(myDatabase);

    console.log(myDatabase);

    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-40">
      <div>KursusArtikel</div>
      <Button onClick={fetchFirebase}>Tarik data</Button>
      {/* <Button onClick={fetchLocalState}>Tarik data dari local state</Button> */}
    </div>
  );
}
