import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { FaCode } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiAffinitydesigner } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";

export default function GridKursusUnggulan() {
  const cards = [
    {
      icon: <FaCode className="text-4xl md:text-7xl  " />,
      bigfont: "Website Developer",
    },
    {
      icon: <DiAndroid className="text-4xl md:text-7xl  " />,
      bigfont: "Android Developer",
    },
    {
      icon: <SiAffinitydesigner className="text-4xl md:text-7xl " />,
      bigfont: "UI/UX Designer",
    },
    {
      icon: <ImNewspaper className="text-4xl md:text-7xl " />,
      bigfont: "Jurnalistik",
    },
  ];

  const cardsList = cards.map((item, index) => (
    <div>
      <Card
        key={index}
        className="flex justify-center items-center border-0 aspect-square mt-8 xl:mt-0"
      >
        {item.icon}
      </Card>
      <h5 className="text-left font-normal font-mono text-grey-600 text-sm md:text-md px-1">
        {item.bigfont}
      </h5>
    </div>
  ));

  return (
    <div className="mx-4 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:gird-rows-1 grid-flow-row gap-2 xl:gap-4 border-0">
      {cardsList}
    </div>
  );
}
