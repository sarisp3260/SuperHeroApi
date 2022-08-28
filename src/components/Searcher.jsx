import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searcher = () => {
  return (
    <form className='flex items-center justify-center relative w-full pt-5 pb-10'>
      <div className='flex flex-col gap-2 w-9/12 md:w-1/2'>
      <input
      placeholder='Search..'
      className='relative bg-transparent border-none outline-none text-lg md:text-3xl'></input>
      <div className='w-full h-0.5 rounded-full bg-orange400'></div>
      </div>
      <button type='submit' className='btn btn-ghost hover:btn-warning rounded-none duration-500 text-xl md:text-2xl'>
        <FaSearch/>
      </button>
    </form>
  )
}

export default Searcher