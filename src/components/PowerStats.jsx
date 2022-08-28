import { FaBrain } from "react-icons/fa";
import {
  GiMuscleUp,
  GiPunch,
  GiRunningNinja,
  GiSwordsPower,
} from "react-icons/gi";
import { BiTimer } from "react-icons/bi";

const PowerStats = ({data}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:flex-col">
  
        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500" data-tip="Intelligence">
            <div className="flex gap-3 items-center">
              <FaBrain />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.intelligence}
                max="100"
              ></progress>
              <span>{data.powerstats.intelligence}%</span>
            </div>
          </div>
        </section>

        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500 " data-tip="Durability">
            <div className="flex gap-3 items-center">
              <BiTimer />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.durability}
                max="100"
              ></progress>
              <span>{data.powerstats.durability}%</span>
            </div>
          </div>
        </section>
        
        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500 " data-tip="Speed">
            <div className="flex gap-3 items-center">
              <GiRunningNinja />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.speed}
                max="100"
              ></progress>
              <span>{data.powerstats.speed}%</span>
            </div>
          </div>
        </section>

        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500 " data-tip="Strength">
            <div className="flex gap-3 items-center">
              <GiMuscleUp />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.strength}
                max="100"
              ></progress>
              <span>{data.powerstats.strength}%</span>
            </div>
          </div>
        </section>

        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500 " data-tip="Power">
            <div className="flex gap-3 items-center">
              <GiPunch />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.power}
                max="100"
              ></progress>
              <span>{data.powerstats.power}%</span>
            </div>
          </div>
        </section>

        <section className="pb-3 md:p-2 ">
          <div className="tooltip tooltip-bottom md:tooltip-right tooltip-warning duration-500 " data-tip="Combat">
            <div className="flex gap-3 items-center">
              <GiSwordsPower />
              <progress
                class="progress progress-warning w-28"
                value={data.powerstats.combat}
                max="100"
              ></progress>
              <span>{data.powerstats.combat}%</span>
            </div>
          </div>
        </section>


      </div>
  )
}

export default PowerStats