import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

export default function HeaderSection() {
  const riseMenu = () => {
    var menu = document.getElementById("menu");
    var header = document.getElementById("header-container");

    // header.classList.toggle("h-16");
    // header.classList.toggle("shadow-md");
    menu.classList.toggle("hidden");
    // menu.classList.toggle("w-full");
    // menu.classList.toggle("h-full");
    menu.classList.toggle("bg-grey-100");
    menu.classList.toggle("rounded-b-xl");
    for (let i = 0; i < menu.children.length; i++) {
      menu.children[i].classList.toggle("p-4");
    }
  };

  return (
    <div
      id="header-container"
      className="sticky z-50 top-0 border-0 rounded-b-xl w-full flex justify-center items-center bg-white shadow-md"
    >
      <div style={{ width: 1400 }} className="md:px-4">
        <div
          id="button-menu"
          className="sticky z-50 top-0 flex justify-end items-center md:hidden h-16"
        >
          <Button
            className=" bg-transparent shadow-transparent"
            onClick={riseMenu}
          >
            <BiMenuAltRight className="text-black -m-4" size={56} />
            {/* <div>&deg</div> */}
          </Button>
        </div>
        <div
          id="menu"
          className="hidden absolute border-0 md:flex w-full justify-between"
        >
          <div className="border-0">Logo</div>
          <div className="border-0">Kursus</div>
          <div className="border-0">SearchBar</div>
          <div className="border-0">Login</div>
        </div>
      </div>
    </div>
  );
}
