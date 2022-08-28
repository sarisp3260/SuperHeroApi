import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaDragon, FaBars } from 'react-icons/fa'
import { GiDragonHead } from 'react-icons/gi'

const Navbar = () => {

  const [show, setShow]= useState();

  const location = useLocation();

  useEffect(() => {
    setShow(false)
  }, [location]);

  return (
    <div className='flex items-center justify-around bg-gradient-to-t to-primary/90 from-transparent py-3 relative z-50'>
      <Link to="/">
        <h1 className="Logo flex-center text-2xl flex items-center font-extrabold font-beba"><FaDragon className=""/>uper<span className="text-orange900">Heros</span></h1>
      </Link>
      <div className='hidden md:flex w-1/4 justify-between text-xl font-beba'>
        <Link className='hover:text-orange900 duration-300' to='/home'>Home</Link>
        <Link className='hover:text-orange900 duration-300' to='/'>About</Link>
        <a className='hover:text-orange900 duration-300' href='https://www.superheroapi.com/index.html' target='_blank'>Api</a>
      </div>

      <span className='hidden md:block text-xl animate-pulse'><GiDragonHead/></span>

      <div className='block md:hidden relative' onClick={()=> setShow(!show)}>
        <span className='text-orange900 text-2xl absolute -inset-x-1 top-0 '><FaBars className=''/></span>
        <span className='text-xl animate-pulse'><GiDragonHead/></span>
      </div>


      {show &&
        (
          <div className='absolute top-11 w-full bg-primary/80 flex flex-col justify-center items-center text-xl font-beba py-5 z-50 md:hidden'>
            <Link className='hover:text-orange900 duration-300' to='/home'>Home</Link>
            <Link className='hover:text-orange900 duration-300' to='/'>About</Link>
            <a className='hover:text-orange900 duration-300' href='https://www.superheroapi.com/index.html' target='_blank'>Api</a>
          </div>
        )
      }
    </div>
  )
}

export default Navbar