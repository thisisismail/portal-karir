import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function StatistikBanner() {
  return (
    <div className="border-0 w-full mt-1 md:mt-12 flex flex-wrap justify-center items-center">
      <Card className="border-0 w-80">
        <CardBody className="flex gap-2">
          <div className="border-0 w-24 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">32k</h1>
            <h5 className="pt-1 text-center text-sm md:text-base">
              Pengguna aktif
            </h5>
          </div>
          <div className="border-0 w-24 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">27k</h1>
            <h5 className="pt-1 text-center text-sm md:text-base">
              Pengguna lulus kerja
            </h5>
          </div>
          <div className="border-0 w-24 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">13k</h1>
            <h5 className="pt-1 text-center text-sm md:text-base">
              Jumlah kursus
            </h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
