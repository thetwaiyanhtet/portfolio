import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { FaHouse,FaSun,FaMoon} from 'react-icons/fa6';
import { SlCursor } from "react-icons/sl";
import { PiSquaresFour } from "react-icons/pi";


const navMenu = [
  "about",
  "experiences",
  "projects",
  "contact"
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selected, setSelected] = useState(null);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div className=" capitalize md:flex justify-between p-8 items-center w-full h-20 fixed bg-gray-100 dark:bg-slate-800 hidden">
      <h1 className=" md:text-3xl text-xl cursor-pointer text-shadow italic font-mono"><Link smooth duration={500} to="hero" onClick={()=>setSelected("portfolio")}>portfolio</Link></h1>
      <ul className=" md:flex gap-10 items-center hidden">
        {navMenu.map((menu,index)=>
        <li key={index} className={`menu ${selected === menu ? "text-secondary" : ""}`} ><Link smooth duration={500} to={menu} onClick={()=>setSelected(menu)} >{menu}</Link></li>
        )}
      </ul>
      <div className=" md:hidden z-10 block text-gray-500 " onClick={toggleMenu}>
        {isOpen ? <RxCross2 /> : <RiMenu5Line />}
      </div>
      {/* {isOpen && (
        <ul className=" capitalize flex flex-col gap-10 items-center justify-center text-tBase bg-gradient-to-b from-gray-100 to-gray-600 h-screen absolute top-0 left-0 w-full">
          {navMenu.map((menu,index)=>
        <li key={index} className=" menu" onClick={toggleMenu}><Link smooth duration={500} to={menu} >{menu}</Link></li>
        )}
        </ul>
      )} */}

      {/* <div className=" flex justify-center items-center bg-gray-500 rounded-md w-full h-20">
        <FaHouse/>
        <PiSquaresFour />
        <div>
          <FaSun/>
          <FaMoon/>
        </div>
        <SlCursor />
      </div> */}
    </div>
  );
};

export default NavBar;
