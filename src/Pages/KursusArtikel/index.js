import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, child, set } from "firebase/database";
import { Card, Button } from "@material-tailwind/react";
import { app } from "../../store/Firebase/index.js";
import { dispatch } from "react-redux";
import firebase from "firebase/compat/app";
import parse from "html-react-parser";

export default function KursusArtikel() {
  const [data, setData] = useState({});
  const [dummy, setDummy] = useState();

  useEffect(() => {
    fetchFirebase();
  }, []);

  useEffect(() => {
    console.log("Data from local state");
    console.log(data);
  }, [data]);

  const ascii_to_hexa = (str) => {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join("");
  };

  const fetchFirebase = () => {
    console.log("Retrive data from firebase");

    const myDatabase = getDatabase(app);
    const dbRef = ref(myDatabase);

    console.log(myDatabase);

    get(child(dbRef, `courses/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val().body);
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const pushToFirebase = () => {
    console.log("push to firebase");

    const randomText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const database = getDatabase(app);
    set(ref(database, "courses/"), {
      title: "Integrasi React JS dengan Firebase",
      author: "Ismail",
      company: "Gojek",
      position: "Cybersecurity Specialist",
      //// We use class instead of className because the string to html converter only can convert to html not jsx. We should use string in order to store the html tags to firebase
      body: `<div><h1 class="font-bold text-green-200">It is not the end</h1><h5>${randomText}</h5></div>`,
      content: {
        title: "this is title",
      },
    });

    // console.log(user.email);
  };

  const displayData = () => {
    //// Three Method To Convert String into HTML
    //// 1 document.getElementById("mylist").innerHTML = `<div>Hello World</div>`;
    //// 2 setDummy(parse(data));
    //// 3 setDummy(<div dangerouslySetInnerHTML={{ __html: nonuna }}></div>);
    setDummy(parse(data));
  };

  return (
    <div className="h-full flex flex-col gap-2">
      <div>KursusArtikel</div>
      <Button onClick={fetchFirebase}>Tarik data</Button>
      <Button onClick={pushToFirebase}>Simpan data ke firebase</Button>
      <Button onClick={displayData}>display the data</Button>
      <div id="mylist"></div>
      {dummy}
      {/* <Button onClick={fetchLocalState}>Tarik data dari local state</Button> */}
    </div>
  );
}
