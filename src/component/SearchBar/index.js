import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@material-tailwind/react";
import { searchResult } from "../../store/action/index.js";
import { FetchSearch } from "../../apiCall/index";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const hasil = useSelector((state) => state.searchResultReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(() => {
    dispatch(searchResult(result));
  }, [result]);

  useEffect(() => {
    console.log("Show state from redux");
    console.log(hasil);
    console.log("Finish show");
  }, [hasil]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    FetchSearch(input)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.items;
      })
      .then((data) => {
        setResult(data);
      })
      .then(() => {
        console.log("Redux Updated");
      });
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
