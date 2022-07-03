import React from "react";
import { Button } from "@material-tailwind/react";
import gambar from "../../assets/img/background-search.png";
import SearchBar from "../../component/SearchBar/index.js";

export default function KursusPage() {
  return (
    <div className="border-0 px-4">
      <div className="w-full border-0 justify-center">
        <SearchBar />
      </div>
      <div>
        <img src={gambar} alt="background-search" />
      </div>
    </div>
  );
}
