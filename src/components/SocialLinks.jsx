import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          linkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/thetwaiyanhtet",
    },
    {
      child: (
        <>
          mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:thetwaiyanhtet26@gmail.com",
    },
    {
      child: (
        <>
          facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/soe.thiha.3979/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div>
      <div>
        <ul className=" capitalize text-tBase fixed top-[35%] left-0 md:block hidden">
          {links.map((link, index) => (
            <li
              key={index}
              className={"bg-gray-500 w-40 h-14 flex justify-between items-center px-4 -ml-24 hover:-ml-1 duration-300" + " " + link.style
              }
            >
              <a href={link.href} target="_blank" className=" flex justify-between items-center w-full">{link.child}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
