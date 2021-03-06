import React from "react";
import { useSelector } from "react-redux";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LogoPortalKarir from "../../component/LogoPortalKarir";
import LoginButton from "../../component/LoginButton/index.js";
import UserInfoHeader from "../../component/UserInfoHeader/index.js";

export default function HeaderSection() {
  const userDataRdx = useSelector((state) => state.userDataReducer);

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

  const hideMenu = () => {
    var menu = document.getElementById("menu");
    var header = document.getElementById("header-container");

    header.classList.add("shadow-md");

    menu.classList.add("hidden");
    menu.classList.remove("bg-lime-400");
    menu.classList.remove("rounded-b-xl");
    menu.classList.remove("drop-shadow-md");
    for (let i = 0; i < menu.children.length; i++) {
      menu.children[i].classList.remove("p-4");
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
          className="hidden absolute md:static border-0 md:flex w-full justify-between items-center"
        >
          <div className="border-0 hidden md:block">
            <Link to="/" onClick={hideMenu}>
              <LogoPortalKarir />
            </Link>
          </div>
          <div className="border-0">
            <Link to="/kursus" onClick={hideMenu} className="text-green-700">
              Kursus
            </Link>
          </div>
          <div className="border-0">
            <Link to="/artikel" onClick={hideMenu} className="text-green-700">
              Artikel
            </Link>
          </div>
          <div className="border-0">
            {/* {<div>{userDataRdx.name}</div> ?? <LoginButton/>} */}
            {/* I do not know why code above does not work haha ;-;, so I use the code below instead */}
            {userDataRdx.name && (
              <UserInfoHeader
                source={userDataRdx.picture}
                name={userDataRdx.name}
              />
            )}
            {!userDataRdx.name && (
              <div className="flex flex-row justify-center items-center gap-2 text-grey-700">
                <LoginButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
