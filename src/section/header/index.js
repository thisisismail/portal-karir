import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LogoPortalKarir from "../../component/LogoPortalKarir";

export default function HeaderSection() {
  const riseMenu = () => {
    var menu = document.getElementById("menu");
    var header = document.getElementById("header-container");

    header.classList.toggle("shadow-md");

    menu.classList.toggle("hidden");
    menu.classList.toggle("bg-lime-400");
    menu.classList.toggle("rounded-b-xl");
    menu.classList.toggle("drop-shadow-md");
    for (let i = 0; i < menu.children.length; i++) {
      menu.children[i].classList.toggle("p-4");
    }
  };

  return (
    <div
      id="header-container"
      className="sticky z-40 top-0 h-16 border-0 rounded-b-xl w-full flex justify-center items-center bg-white shadow-md"
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
          </Button>
        </div>
        <div
          id="menu"
          className="hidden absolute md:static border-0 md:flex w-full justify-between"
        >
          <div className="border-0 hidden md:block">
            <Link to="/" onClick={riseMenu}>
              <LogoPortalKarir />
            </Link>
          </div>
          <div className="border-0">
            <Link
              to="/kursus"
              onClick={riseMenu}
              className="text-green-700"
            >
              Kursus
            </Link>
          </div>
          <div className="border-0">
            <Link
              to="/kursus"
              onClick={riseMenu}
              className="text-green-700"
            >
              Search Bar
            </Link>
          </div>
          <div className="border-0">
            <Link
              to="/kursus"
              onClick={riseMenu}
              className="text-green-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
