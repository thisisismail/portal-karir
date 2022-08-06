import React, { useState } from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";
import PopUpArticle from "../../component/PopUpArticle/index";
import { GrClose } from "react-icons/gr";
import parse from "html-react-parser";

export default function CardArticles(props) {
  const [popUp, setPopUp] = useState();

  const closePupUp = () => {
    console.log("close post pupup");
    setPopUp();
  };

  const openPopUp = (title, body, author, position, company) => {
    console.log("open post popup");
    setPopUp(
      <PopUpArticle
        postTitle={title}
        postBody={body}
        postAuthor={author}
        authorPosition={position}
        authorCompany={company}
        closeButton={
          <Button
            onClick={closePupUp}
            className="h-full bg-transparent shadow-none drop-shadow-none hover:drop-shadow-none hover:shadow-none"
          >
            <GrClose size={24} />
          </Button>
        }
      />
    );
  };

  return (
    <div className="w-full border-0">
      {popUp}
      <div style={{ maxWidth: 800 }} className="mx-auto">
        {props.articles?.map((item) => {
          return (
            <Card
              onClick={() =>
                openPopUp(
                  parse(item[1].content.title),
                  parse(item[1].content.body),
                  item[1].author,
                  item[1].position,
                  item[1].company
                )
              }
              key={item[0]}
              className="cursor-pointer border-0 rounded-xl w-full flex flex-col justify-center hover:bg-grey-200 hover:duration-500 mb-4"
            >
              <div className="font-bold text-green-200 border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4">
                <div>{item[1].content.title}</div>
                <div className="border-0 font-bold text-sm text-grey-400">
                  {item[1].author}
                </div>
                <div className="border-0 text-xs text-grey-400">
                  <span>{item[1].position}</span> | {item[1].company}
                </div>
              </div>
              <CardBody className="text-xs md:text-sm text-justify h-28">
                <div className="line-clamp-3">
                  {parse(item[1].content.body)}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
