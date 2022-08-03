import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { useDispatch } from "react-redux";
import { articleData } from "../../store/Redux/action/index.js";
import { app } from "../../store/Firebase/index.js";
import CreateArtikelCard from "../../component/CreateArtikelCard/index";
import CardArticles from "../../component/CardArticles/index";
import DataLoading from "../../component/CardArticles/loading.js";

export default function KursusArtikel() {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFirebase = () => {
    console.log("Retrive data from firebase");

    const myDatabase = getDatabase(app);
    const dbRef = ref(myDatabase);

    console.log(myDatabase);

    get(child(dbRef, `courses/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          // store articles to redux
          dispatch(articleData(Object.entries(snapshot.val())));
          // store cards of articles to state component
          setData(<CardArticles articles={Object.entries(snapshot.val())} />);
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
    <div className="h-full flex flex-col gap-2 border-0 px-4 items-center">
      <div className="mb-4">
        <CreateArtikelCard callBackFunction={fetchFirebase} />
      </div>
      {data ? data : <DataLoading />}
    </div>
  );
}
