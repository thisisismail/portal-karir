import React from "react";
import { FetchSearch } from "../../apiCall/index";
import { Button } from "@material-tailwind/react";

export default function KursusPage() {
  const search = "Jokowi";
  return (
    <div className="h-full">
      KursusPage<div>Search Bar</div>
      <Button onClick={() => FetchSearch(search)}>Cari</Button>
    </div>
  );
}
