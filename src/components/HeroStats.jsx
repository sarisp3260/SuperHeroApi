import { useEffect, useState } from "react";
import { FaBrain } from "react-icons/fa";
import {
  GiMuscleUp,
  GiPunch,
  GiRunningNinja,
  GiSwordsPower,
} from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'

const HeroStats = ({ data }) => {

  const [category, setCategory] = useState("intelligence");
  const navigate = useNavigate()

  return (
    <div className="w-full md:w-1/6 grid place-items-center order-first md:order-last">
      <div className="w-full flex md:hidden justify-between items-center py-4">
        <span className="font-beba text-4xl md:hidden">{data.name}</span>
        <button
          className="btn btn-ghost hover:btn-warning text-xl gap-3"
          onClick={() => navigate(-1)}
        >
          <RiArrowGoBackFill />
          <span>Go back</span>
        </button>
      </div>
      
      <div className="flex items-start">
        <div className="flex flex-col gap-1">
          <button
            className={` ${
              category === "intelligence" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("intelligence")}
          >
            <FaBrain />
          </button>
          <button
            className={` ${
              category === "durability" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("durability")}
          >
            <BiTimer />
          </button>
          <button
            className={` ${
              category === "speed" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("speed")}
          >
            <GiRunningNinja />
          </button>
          <button
            className={` ${
              category === "strength" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("strength")}
          >
            <GiMuscleUp />
          </button>
          <button
            className={` ${
              category === "power" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("power")}
          >
            <GiPunch />
          </button>
          <button
            className={` ${
              category === "combat" ? "btn-warning" : "btn-outline"
            } btn btn-warning btn-sm rounded-l-2xl text-xl`}
            onClick={() => setCategory("combat")}
          >
            <GiSwordsPower />
          </button>
        </div>
        <div className="flex items-center">
          <img className="w-44" alt="hero-img" src={data.images.md} />
        </div>
      </div>

      <p className="font-beba text-lg pt-3">skill: {category}</p>

      <div className="w-8/12 md:w-10/12 inline-flex gap-3 py-1 items-center">
        {category === "strength" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.strength}
              max="100"
            ></progress>
            <span>{data.powerstats.strength}%</span>
          </>
        ) : category === "speed" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.speed}
              max="100"
            ></progress>
            <span>{data.powerstats.speed}%</span>
          </>
        ) : category === "durability" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.durability}
              max="100"
            ></progress>
            <span>{data.powerstats.durability}%</span>
          </>
        ) : category === "power" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.power}
              max="100"
            ></progress>
            <span>{data.powerstats.power}%</span>
          </>
        ) : category === "combat" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.combat}
              max="100"
            ></progress>
            <span>{data.powerstats.combat}%</span>
          </>
        ) : category === "intelligence" ? (
          <>
            <progress
              className="progress progress-warning"
              value={data.powerstats.intelligence}
              max="100"
            ></progress>
            <span>{data.powerstats.intelligence}%</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HeroStats;
