import React, { useEffect, useState } from "react";
import { useGetAllQuery } from "../app/services/HerosApi";
import CardHero from "../components/CardHero";
import IsLoading from "../components/IsLoading";
import Searcher from "../components/Searcher";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { data, error, isLoading } = useGetAllQuery();

  const [filtered, setFiltered] = useState(data);
  /* console.log("fil",filtered)
  console.log(data) */

  const [search, setSearch] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filtered.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filtered]);

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

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(event);
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center py-6">
      <div className="w-10/12">
        <Searcher />

        {error && (
          <div className="flex-center gap-3 text-2xl">
            <img src={error} alt="error" />
            <p>Something went wrong try again</p>
          </div>
        )}
        {isLoading && <IsLoading />}

        <div className="grid gap-10 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data?.map((hero) => {
            return <CardHero key={hero.id} hero={hero} />;
          })}
        </div>
      </div>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Home;
