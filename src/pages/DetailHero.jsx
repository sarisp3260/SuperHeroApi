import { useNavigate, useParams, Link } from "react-router-dom";
import { useGetOneIdQuery } from "../app/services/HerosApi";
import HeroStats from "../components/HeroStats";
import IsLoading from "../components/IsLoading";
import { RiArrowGoBackFill } from "react-icons/ri";
import FilterApperance from "../components/FilterApperance";

const DetailHero = () => {
  const { heroId } = useParams();

  const { data, isLoading } = useGetOneIdQuery(heroId);
  console.log(data)
  const navigate = useNavigate();

  return (
    <div className="relative w-full flex flex-col md:flex-row pt-16 md:pt-6">
      {isLoading && <IsLoading />}
      {data && <HeroStats data={data} />}

      {data && (
        <div className="w-full md:w-4/6 xl:w-5/6 pb-6 px-10">
          <div className="flex justify-end md:justify-between pb-5">
            <span className="hidden md:block text-5xl font-beba">
              {data.name}
            </span>
            <button
              className="absolute top-0 inset-8 md:static btn btn-ghost hover:btn-warning text-lg flex gap-3 md:justify-end"
              onClick={() => navigate(-1)}
            >
              <RiArrowGoBackFill />
              <span>Go back</span>
            </button>
          </div>

          <FilterApperance data={data}/>

          <div className="grid text-center gap-5 md:gap-10 grid-cols-1 lg:grid-cols-3 pt-5">

            <div className="flex flex-col gap-3 py-4">
              <h2 className="font-beba text-orange700 text-3xl">Biography</h2>
              <div className="flex  items-center flex-col flex-wrap gap-5 text-xl">
                <span>
                  <strong>Alter Egos: </strong>
                  {data?.biography.alterEgos}
                </span>
                <span>
                  <strong>Firts Appearance: </strong>{" "}
                  {data?.biography.firstAppearance}
                </span>
                <span>
                  <strong>Publisher: </strong> {data?.biography.publisher}
                </span>
                <span>
                  <strong>Place Of Birth:</strong>{" "}
                  {data?.biography.placeOfBirth}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-4">
              <h2 className="font-beba text-orange700 text-3xl">Work</h2>
              <div className="flex  items-center flex-col flex-wrap gap-5 text-xl">
                <span>
                  <strong>Base: </strong>
                  {data?.work.base}
                </span>
                <span>
                  <strong>Occupation: </strong> {data?.work.occupation}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-4">
              <h2 className="font-beba text-orange700 text-3xl">Conections</h2>
              <div className="flex items-center flex-col flex-wrap gap-5 text-xl">
                <span>
                  <strong>Group Affiliation: </strong>
                  {data?.connections.groupAffiliation}
                </span>
                <span>
                  <strong>Relatives: </strong> {data?.connections.relatives}
                </span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailHero;
