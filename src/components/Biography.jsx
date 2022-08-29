import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Biography = ({ data }) => {

  const navigate = useNavigate()

  return (
    <div className="w-5/6">
      <div className="hidden md:flex justify-between items-center">
        <h1 className="font-beba text-7xl">{data.name}</h1>
        <button
          className="hidden btn btn-ghost hover:btn-warning text-lg md:flex gap-3 md:justify-end"
          onClick={() => navigate(-1)}
        >
          <RiArrowGoBackFill />
          <span>Go back</span>
        </button>
      </div>
      <div className="grid text-center md:text-left grid-cols-1 md:grid-cols-2 gap-5 pt-5 text-xl">
        <p>
          <span className="text-2xl text-orange900">Full name: </span>{" "}
          {data?.biography.fullName}
        </p>
        <p>
          <span className="text-2xl text-orange900">Alter Egos:</span>{" "}
          {data?.biography.alterEgos}
        </p>
        <p>
          <span className="text-2xl text-orange900">Aliases:</span>{" "}
          {data?.biography.aliases.slice(",")}
        </p>
        <p>
          <span className="text-2xl text-orange900">Pace of birth:</span>{" "}
          {data?.biography.placeOfBirth}
        </p>
        <p>
          <span className="text-2xl text-orange900">Firts appearance:</span>{" "}
          {data?.biography.firstAppearance}
        </p>
        <p>
          <span className="text-2xl text-orange900">Publisher:</span>{" "}
          {data?.biography.publisher}
        </p>
        <p>
          <span className="text-2xl text-orange900">Aligment:</span>{" "}
          {data?.biography.aligment}
        </p>
      </div>
    </div>
  );
};

export default Biography;
