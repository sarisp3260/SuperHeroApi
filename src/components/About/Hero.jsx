import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex items-end">
      <div className="absolute top-0 flex flex-col items-center justify-center pt-20 h-screen w-full bg-cover bg-hero">
        <div className="w-10/12 h-screen flex-center gap-5 flex-col text-center">
          <h1 className="text-6xl md:text-8xl font-beba text-orange900 drop-shadow-2xl">
            SuperHero App
          </h1>
          <p className="text-xl font-semibold text-orange400">
            The easyest way to find your favorites SuperHeros
          </p>

          <a
            href="#Documentation"
            className="relative font-beba inline-block px-4 py-2 text-2xl font-bold group"
          >
            <span className="absolute rounded-md inset-0 w-full h-full transition duration-500 ease-in-out transform translate-x-1 translate-y-1 bg-orange700 animate-pulse group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-md inset-0 w-full h-full bg-orange-100 border-2 border-orange700 group-hover:bg-orange700"></span>
            <span className="relative text-orange700 group-hover:text-white">
              Know more
            </span>
          </a>
        </div>
      </div>
      <div className="bg-orange900/70 text-white w-full h-32 flex justify-center items-end p-3 ">
        <p className="flex font-beba text-xl tracking-wider">
          App search Your SuperHero <span className="hidden lg:block">- App search Your SuperHero - App search Your SuperHero - App search Your SuperHero</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
