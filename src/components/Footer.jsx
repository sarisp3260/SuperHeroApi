import React from "react";
import { FaDragon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange400/60 p-3 text-white flex items-center justify-between mt-5">
      <Link to="/">
        <h1 className="Logo flex-center text-2xl flex items-center font-extrabold font-beba">
          <FaDragon className="" />
          uper<span className="text-orange400">Heros</span>
        </h1>
      </Link>
      <p>Redux Api SuperHeros 2022 &copy;</p>
    </div>
  );
};

export default Footer;
