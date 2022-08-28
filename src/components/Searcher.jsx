import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searcher = ({search, setSearch}) => {
  return (
    <div className='flex flex-col items-center gap-2 w-full pt-5 pb-10'>
      <div className='flex items-center justify-between w-11/12 md:w-1/2 px-2'>
      <input
      type="text"
      value={search}
      onChange={((e)=> setSearch(e.target.value))}
      placeholder='Search..'
      className='relative w-full bg-transparent border-none outline-none text-lg md:text-3xl'>
      </input>
      <p className=' text-xl md:text-2xl'>
        <FaSearch/>
      </p>
      </div>
      <div className='w-11/12 md:w-1/2 h-0.5 rounded-full bg-orange400'></div>
    </div>
  )
}

export default Searcher