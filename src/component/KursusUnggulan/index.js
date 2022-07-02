import React from "react";
import { Button } from "@material-tailwind/react";
import GridKursusUnggulan from "../GridKursusUnggulan/index.js";

export default function KursusUnggulan() {
  return (
    <div>
      <div className="border-0 flex flex-col xl:flex-row items-center justify-between border-0 mt-8">
        <div
          style={{ maxWidth: 600 }}
          className="w-full px-4 py-6 flex flex-col justify-between gap-3 border-0"
        >
          <h1 className="text-left font-mono font-bold text-green-700 text-3xl md:text-5xl">
            Kategori kurus unggulan
          </h1>
          <h5 className="text-left font-normal font-mono text-grey-600 text-sm md:text-xl">
            Ikuti kurus yang paling banyak diminati perusahaan saat ini
          </h5>
        </div>
        <div className="border-0 w-full mb-6 xl:hidden">
          <GridKursusUnggulan/>
        </div>
        <div className="px-4 border-0 w-full flex justify-end md:justify-center xl:justify-end">
          <Button className="bg-indigo-900">Lihat selengkapnya</Button>
        </div>
      </div>
      {/* <GridKursusUnggulan /> */}
    </div>
  );
}
