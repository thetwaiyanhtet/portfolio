import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import { FaHouse,FaSun,FaMoon,FaFile } from 'react-icons/fa6';
import { SlCursor } from "react-icons/sl";
import { PiSquaresFour } from "react-icons/pi";
import { Link } from 'react-scroll';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  const [selected, setSelected] = useState(null);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" font-poppins dark:text-white dark:bg-black">
      <NavBar />
      <Hero />
      <SocialLinks/>
      <About/>
      <Contact/>
      {/* <div className=" fixed right-6 bottom-6 " onClick={toggleDarkMode}>
        {darkMode? <FaSun size={20}/> : <FaMoon size={20}/>}
      </div> */}
    </div>
    <div className=" flex justify-center">
    <div className=" flex justify-center items-center gap-10 bg-transparent border backdrop-blur-sm bg-opacity-50 rounded-md w-[90%] h-20 fixed bottom-5 md:hidden dark:text-tBase">
        <div className={`${selected === "house" ? "mobile-menu" : ""}`} onClick={()=> setSelected("house")}><Link to="hero" smooth duration={500}><FaHouse size={30}/></Link></div>
        <div className={`${selected === "square" ? "mobile-menu" : ""}`} onClick={()=> setSelected("square")}><PiSquaresFour size={30}/></div>
        <div className={`${selected === "mode" ? "mobile-menu" : ""}`} onClick={toggleDarkMode}>
        {darkMode? <FaSun size={30}/> : <FaMoon size={30}/>}
        </div>
        <a
            href="../../public/thetwaiyanhtet.pdf"
            download={true}
            rel="noreferer"
          >
            <FaFile size={27}/>
          </a>
        <div className={`${selected === "cursor" ? "mobile-menu" : ""}`} onClick={()=> setSelected("cursor")}><Link to="contact" smooth duration={500}><SlCursor size={27}/></Link></div>
      </div>
    </div>
    </div>
  );
}

export default App;
