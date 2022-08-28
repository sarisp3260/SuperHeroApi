import React from "react";
import imgBg from "../../assets/b-1.jpg";

const Hero = () => {
  return (
    <div className="absolute top-0 flex flex-col items-center justify-center pt-20 h-screen w-full bg-cover bg-hero">
      {/* <img src={imgBg}
      className='w-full h-10/12'/> */}

      <div className="w-10/12 flex-center gap-5 flex-col text-center">
        <h1 className="text-6xl md:text-8xl font-beba text-orange900 drop-shadow-2xl">SuperHero App</h1>
        <p className="text-xl font-semibold text-orange400">
          The easyest way to find your favorites SuperHeros
        </p>

        <a href="#_" class="relative font-beba inline-block px-4 py-2 text-2xl font-bold group">
          <span class="absolute rounded-md inset-0 w-full h-full transition duration-500 ease-in-out transform translate-x-1 translate-y-1 bg-orange700 animate-pulse group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute rounded-md inset-0 w-full h-full bg-orange-100 border-2 border-orange700 group-hover:bg-orange700"></span>
          <span class="relative text-orange700 group-hover:text-white">
            Start now
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
