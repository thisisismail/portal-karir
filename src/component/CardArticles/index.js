import React from "react";
import parse from "html-react-parser";

export default function CardArticles(props) {
  return (
    <div>
      {props.articles?.map((item) => {
        console.log(item[1].content.body);
        return <div key={item[0]}>{parse(item[1].content.body)}</div>;
      })}
    </div>
  );
}
