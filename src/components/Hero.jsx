import React from "react";
import me from "../Assets/me.jpg";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className=" md:flex justify-center space-x-10 items-center h-screen">
        <div>
          <div class=" capitalize text-5xl space-y-2">
            <p className=" text-purple-500 ">hello !</p>
            <p className="py-2">i'M thet</p>
            <p className=" text-purple-500">web developer</p>
          </div>
          <a
            href="../../public/thetwaiyanhtet.pdf"
            download={true}
            rel="noreferer"
          >
            <div className=" flex justify-center items-center space-x-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-400 p-3 w-52 text-white mt-4 cursor-pointer">
              <p> Download Resume</p>
              <AiOutlineDownload
                size={20}
                className=" animate-bounce intense-bounce"
              />
            </div>
          </a>
        </div>
        <img src={me} alt="..." class=" rounded-full w-96" />
      </div>
    </>
  );
};

export default Hero;
