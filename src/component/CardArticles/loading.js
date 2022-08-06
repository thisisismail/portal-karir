import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function loading() {
  const loading = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full">
      <div style={{ maxWidth: 800 }} className="mx-auto">
        {console.log("Loading....")}
        {loading.map((item) => {
          return (
            <Card
              key={item}
              className="cursor-pointer border-0 rounded-xl w-full flex flex-col justify-center hover:bg-grey-200 hover:duration-500 mb-4 animate-pulse"
            >
              <div className="flex flex-col font-bold text-green-200 border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4 gap-1">
                <div className="bg-green-200 w-1/3 rounded-md h-6"></div>
                <div className="border-0 font-bold text-sm bg-grey-400 rounded-md w-1/4 h-4"></div>
                <div className="border-0 text-xs bg-grey-400 rounded-md h-3 w-1/5"></div>
              </div>
              <CardBody className="text-xs md:text-sm text-justify h-28">
                <div className="flex flex-col gap-1 line-clamp-3 border-0">
                  <div className="border-0 font-bold text-sm bg-grey-400 rounded-md w-full h-3"></div>
                  <div className="border-0 font-bold text-sm bg-grey-400 rounded-md w-full h-3"></div>
                  <div className="border-0 font-bold text-sm bg-grey-400 rounded-md w-full h-3"></div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
