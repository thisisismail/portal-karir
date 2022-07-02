import React from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";
import { MdQuestionAnswer } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiPencilRuler2Fill } from "react-icons/ri";

export default function LangkahBanner() {
  const size = 90;

  const cards = [
    {
      icon: <MdQuestionAnswer className="text-4xl md:text-7xl" />,
      bigfont: "Tanya",
      smallfont: "di komunitas",
    },
    {
      icon: <RiPencilRuler2Fill className="text-4xl md:text-7xl" />,
      bigfont: "Upgrade",
      smallfont: "kemampuan gratis",
    },
    {
      icon: <FaHandshake className="text-4xl md:text-7xl" />,
      bigfont: "Lamar",
      smallfont: "untuk mulai berkarir",
    },
  ];

  const CardList = cards.map((item, index) => {
    return (
      <Card className="w-24 h-24 md:w-52 md:h-52 border-0 border-red-200">
        <Button className="w-full h-full flex flex-col flex-wrap justify-center items-center bg-indigo-900">
          {/* <MdQuestionAnswer size={size} /> */}
          {item.icon}
          <h1 className="font-bold md:text-2xl text-xs text-center pt-2 border-0">
            {item.bigfont}
          </h1>
          <h5 className="pt-1 text-center invisible md:text-xs md:visible">
            {item.smallfont}
          </h5>
        </Button>
      </Card>
    );
  });

  return (
    <div className="mt-12 flex flex-col-reverse lg:flex-row border-0">
      <div
        style={{ maxWidth: 808 }}
        className="border-0 flex flex-row justify-center items-center gap-4 w-full border-0 border-red-200 mx-auto xl:justify-end xl:mx-0"
      >
        {CardList}
      </div>
      <div
        style={{ maxWidth: 574 }}
        className="w-full px-4 py-6 flex flex-col justify-center gap-3 border-0 mx-auto xl:mx-0"
      >
        <h1 className="text-left font-mono font-bold text-green-700 text-3xl md:text-5xl">
          Tentukan langkahmu sekarang
        </h1>
        <h5 className="text-left font-normal font-mono text-grey-600 text-sm md:text-xl">
          Buat keputusan untuk karirmu dan raih impianmu
        </h5>
      </div>
    </div>
  );
}
