import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Input,
  CardFooter,
  Button,
  Alert,
} from "@material-tailwind/react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../store/Firebase/index";

export default function CreateArtikelCard(props) {
  const { callBackFunction } = props;

  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "",
  });

  const userDataRdx = useSelector((state) => state.userDataReducer);

  const inputHandler = (v) => {
    const { name, value } = v.target;
    setArticle({ ...article, [name]: value });
    console.log(article);
  };

  const btnCreateArticle = () => {
    console.log("Article created");
    console.log("push to firebase");

    setAlert({
      ...alert,
      show: true,
      color: "green",
      message: "Article created",
    });

    const database = getDatabase(app);
    const key = userDataRdx.keyId.toString();

    set(ref(database, "courses/" + key), {
      author: userDataRdx.username,
      company: "Gojek",
      position: "Cybersecurity Specialist",
      //// We use class instead of className because the string to html converter only can convert to html not jsx. We should use string in order to store the html tags to firebase
      content: {
        title: `${article.title}`,
        body: `<div><h1 class="font-bold text-green-200">${article.title}</h1><h5>${article.body}</h5></div>`,
      },
    }).then(() => callBackFunction());
  };

  return (
    <div>
      <Card
        style={{ minWidth: 300, maxWidth: 800 }}
        className="border-0 h-min mt-3 -mb-3"
      >
        <CardBody className="flex flex-col gap-2">
          <h1 className="font-bold text-grey-700 mx-auto">Create Article</h1>
          <Input
            className="text-green-800 w-full outline outline-0 outline-green-200"
            label="Title"
            type="text"
            // should be the same as input we want to assign
            name="title"
            onChange={inputHandler}
            // it is a good practice to add double question mark to prevent the error
            value={article.title ?? ""}
            color="teal"
          />
          <Input
            className="text-green-800 w-full outline outline-0 outline-green-200"
            label="Body"
            type="text"
            // should be the same as input we want to assign
            name="body"
            onChange={inputHandler}
            // it is a good practice to add double question mark to prevent the error
            value={article.body ?? ""}
            color="teal"
          />
        </CardBody>
        <CardFooter divider className="border-0 flex justify-center">
          <Button onClick={btnCreateArticle} color="green" className="w-40">
            Post
          </Button>
        </CardFooter>
      </Card>
      {alert.show === true ? (
        <div className="z-50 border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-screen px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
          <Alert
            color={alert.color}
            show={alert.show}
            dismissible={{
              onClose: () =>
                setAlert({
                  ...alert,
                  show: false,
                }),
            }}
            className="max-w-sm mx-3"
          >
            {alert.message}
          </Alert>
        </div>
      ) : null}
    </div>
  );
}
