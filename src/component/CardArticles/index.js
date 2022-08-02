import React from "react";
import parse from "html-react-parser";
import { Card, CardBody } from "@material-tailwind/react";

export default function CardArticles(props) {
  return (
    <div>
      {props.articles?.map((item) => {
        console.log(item[1].content.body);
        return (
          <Card
            key={item[0]}
            className="border-0 rounded-xl w-full flex flex-col justify-center hover:bg-grey-200 hover:duration-500 mb-2"
          >
            <div className="font-bold text-green-200 border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4">
              <div>{item[1].content.title}</div>
              <h1 className="border-0 font-bold text-sm text-grey-400">
                {item[1].author}
              </h1>
              <h1 className="border-0 line-clamp-1 text-xs text-grey-400">
                <span>{item[1].position}</span> | {item[1].company}
              </h1>
            </div>
            <CardBody>{parse(item[1].content.body)}</CardBody>
          </Card>
        );
      })}
    </div>
  );
}
