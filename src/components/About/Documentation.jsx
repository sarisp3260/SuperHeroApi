import React from "react";
import spider from "../../assets/spider.png";
import Stat from "./Stat";

const Documentation = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-stretch md:items-center flex-col gap-8 relative px-10"
      id="Documentation"
    >
      <img
        src={spider}
        alt="spider"
        className="absolute top-0 left-0 w-40 md:w-72"
      />

      <h1 className="text-3xl font-beba xs:text-5xl md:text-6xl text-end">
        Documentation App
      </h1>
      <p className="pt-12 text-center text-base  md:text-xl z-30">
        A simple app documentation to follow, take it as a complement of the proyecto to understand better the structure. Wait for futher updates 
      </p>

      <Stat />

      <div className="flex-center">
        <a
          href="#Documentation"
          className="relative w-fit font-beba inline-block px-4 py-2 text-2xl font-bold group"
        >
          <span className="absolute rounded-md inset-0 w-full h-full transition duration-500 ease-in-out transform translate-x-1 translate-y-1 bg-orange400 animate-pulse group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute rounded-md inset-0 w-full h-full bg-orange-100 border-2 border-orange400 group-hover:bg-orange700"></span>
          <span className="relative text-orange400 group-hover:text-white">
            Check it out
          </span>
        </a>
      </div>
    </div>
  );
};

export default Documentation;
