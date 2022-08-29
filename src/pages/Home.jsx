import React, { useEffect, useState } from "react";
import { useGetAllQuery } from "../app/services/HerosApi";
import CardHero from "../components/CardHero";
import IsLoading from "../components/IsLoading";
import Searcher from "../components/Searcher";
import ReactPaginate from "react-paginate";
import mush from '../assets/mush-3.gif'

const Home = () => {
  const { data, error, isLoading } = useGetAllQuery();

  const [filtered, setFiltered] = useState(data);

  const [search, setSearch] = useState("");

  const [filterPower, setFilterPower] = useState([]);
  const [category, setCategory] = useState("");
  const powerCategory = ["intelligence","strenght","speed","durability","power","combat"];

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  
  useEffect(() => {
    if (search !== "") {
      setFiltered(
        data.filter((heros) =>
        heros.name.toLowerCase().includes(search.toLowerCase())
        )
        );
      } else {
        setFiltered(data);
      }
    }, [search, data]);
    
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filtered?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filtered?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filtered]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center py-6">
      <div className="w-10/12">
        <Searcher search={search} setSearch={setSearch}/>


        {search != "" || filtered?.length == 0 ?
          <span className="flex-center">{filtered?.length} Heros found</span>:null
        }

        {filtered?.length == 0 &&
          <div className="flex-center gap-3 flex-col md:flex-row">
            <img src={mush} alt="mush" className="w-32"/>
            <span className="text-xl">Hero not found, try again</span>
          </div>
        }
        
          <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          //styling
          containerClassName="flex items-center justify-center md:justify-end gap-2 py-6"
          pageClassName="btn btn-ghost hover:btn-warning text-xs duration-500"
          previousLinkClassName="btn btn-ghost hover:btn-warning text-xs duration-500"
          nextLinkClassName="btn btn-ghost hover:btn-warning text-xs duration-500"
          activeLinkClassName="text-white"
          />

        {error && (
          <div className="flex-center gap-3 text-2xl">
            <img src={error} alt="error" />
            <p>Something went wrong try again</p>
          </div>
        )}
        {isLoading && <IsLoading />}

        <div className="grid gap-10 place-items-center grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {currentItems?.map((hero) => {
            return <CardHero key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
