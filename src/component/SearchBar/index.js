import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FetchSearch } from "../../apiCall/index";

export default function SearchBar() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    FetchSearch(input);
  };

  return (
    <div>
      <div style={{ maxWidth: 600 }} className="flex flex-row mx-auto">
        <Input
          className="text-green-800"
          label="Cari kursus"
          type="text"
          name="search" //should be the same as input we want to assign
          onChange={inputHandler}
          value={input ?? ""} //it is a good practice to add double question mark to prevent the error
        />
        <Button onClick={submitHandler} className="bg-indigo-900 text-white">
          Cari
        </Button>
      </div>
    </div>
  );
}
