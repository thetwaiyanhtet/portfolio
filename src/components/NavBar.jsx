import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" capitalize flex justify-between p-8 items-center w-full h-20 fixed">
      <h1 className=" md:text-3xl text-xl">portfolio</h1>
      <ul className=" md:flex gap-10 items-center hidden">
        <li className=" menu">about</li>
        <li className=" menu">experiences</li>
        <li className=" menu">projects</li>
      </ul>
      <div className=" md:hidden z-10 block text-gray-500 " onClick={toggleMenu}>
        {isOpen ? <RxCross2 /> : <RiMenu5Line />}
      </div>
      {isOpen && (
        <ul className=" capitalize flex flex-col gap-10 items-center justify-center text-white bg-gradient-to-b from-black via-black to-gray-800 h-[300px] absolute top-0 left-0 w-full">
          <li className=" menu">about</li>
          <li className=" menu">experiences</li>
          <li className=" menu">projects</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
