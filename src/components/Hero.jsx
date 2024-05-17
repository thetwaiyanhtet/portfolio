import React, { useState } from "react";
import me from "../Assets/me.jpg";
import { AiOutlineDownload } from "react-icons/ai";


const Hero = () => {
  
  return (
      <div name="hero" className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-16 md:space-y-0 h-screen">
        <div>
          <div class=" capitalize md:text-5xl text-3xl space-y-2">
            <p className="">hello !</p>
            <p className="py-2 text-secondary "> <span className=" text-primary dark:text-tBase">i'M</span> thet wai yan htet</p>
            <p className="">web developer</p>
          </div>
          <a
            href="../../public/thetwaiyanhtet.pdf"
            download={true}
            rel="noreferer"
            className=" hidden md:block"
          >
            <div className=" flex justify-center items-center space-x-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-400 p-3 md:w-32 w-28 text-sm md:text-base text-tBase mt-4 cursor-pointer hover:scale-105 duration-200">
              <p>Resume</p>
              <AiOutlineDownload
                size={20}
                className=" animate-bounce intense-bounce"
              />
            </div>
          </a>
        </div>
        <img src={me} alt="..." class=" rounded-full md:w-96 w-64 mx-auto" />

       
      </div>
  );
};

export default Hero;
