import React from "react";
import me from './me.jpg';

const MainPage = () => {
  return (
    <div>
      <nav>
        <div class=" flex items-center justify-between p-7 text-white capitalize">
            <div class=" rounded-xl text-3xl">Portfolio</div>
            <div class=" flex justify-between items-center gap-7 text-xl" id="menu">
                <a href="/">About</a>
                <a href="#">Experiences</a>
                <a href="#">Projects</a>
                </div>
            </div>
    </nav>
    <main>
        <div class=" text-white flex  justify-evenly items-center my-5">
            <div class=" capitalize text-5xl space-y-2">
                <p>hello !</p>
                <p>i'M thet</p>
                <p>web developer</p>
            </div>
            <img src={me} alt="..." class=" rounded-2xl w-96"/>
            
        </div>

    </main>
    </div>
  );
};

export default MainPage;
