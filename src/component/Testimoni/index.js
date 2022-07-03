import React from "react";
import avatar from "../../assets/img/profile-square.png";
import { Button } from "@material-tailwind/react";

export default function Testimoni() {
  return (
    <div className="rounded-t-xl h-80 md:h-96 pt-8 md:pt-16 mt-16 md:mt-32 flex justify-start items-center flex-col bg-green-100">
      <h1 className="text-left font-mono font-bold text-green-700 text-3xl md:text-5xl">
        Apa kata mereka ?
      </h1>
      <div className="pt-6 flex flex-row justify-center items-center gap-4 border-0 w-full">
        <img
          src={avatar}
          alt="profile"
          className="h-20 w-20 object-fill rounded-full"
        ></img>
        <div style={{ maxWidth: 500 }} className="border-0">
          <h5 className="border-0 text-justify font-normal font-mono text-grey-600 text-xs md:text-xl w-52 md:w-full">
            Saya merasa terbantu dengan adanya website{" "}
            <span className="font-bold">Portal Karir</span>, dengan adanya
            website ini Saya dapat mepersiapkan dunia kerja lebih baik lagi
          </h5>
        </div>
      </div>
      <div className="pt-4 flex justify-center border-0 w-full px-4">
        <h1 className="border-0 italic text-xs md:text-base">
          Djoko | Frontend Developer di Gojek
        </h1>
      </div>
      <div className="w-full h-full flex items-end">
        <div className="bg-indigo-900 w-full py-4 flex justify-center">
          <Button className="bg-green-600 text-white font-bold">DAFTAR SEKARANG</Button>
        </div>
      </div>
    </div>
  );
}
