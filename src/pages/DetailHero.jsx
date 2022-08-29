import { useNavigate, useParams, Link } from "react-router-dom";
import { useGetOneIdQuery } from "../app/services/HerosApi";
import HeroStats from "../components/HeroStats";
import IsLoading from "../components/IsLoading";
import { RiArrowGoBackFill } from "react-icons/ri";
import FilterApperance from "../components/FilterApperance";
import Biography from "../components/Biography";
import TabsData from "../components/TabsData";

const DetailHero = () => {
  const { heroId } = useParams();

  const { data, isLoading } = useGetOneIdQuery(heroId);
  const navigate = useNavigate();

  return (
    <div className="w-full flex-center flex-col py-5">
      {isLoading && <IsLoading />}
      
      <div className="w-11/12 flex flex-col md:flex-row gap-3">
        {data && <>
          <Biography data={data} />
          <HeroStats data={data} />
        </>}
      </div>

      <div className="w-11/12 flex flex-col md:flex-row gap-3">
        {data && <>
          <TabsData data={data}/>
          <FilterApperance data={data} />
        </>}
      </div>
    </div>
  );
};

export default DetailHero;
