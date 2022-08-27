import React from 'react'
import PowerStats from './PowerStats'

const HeroStats = () => {
  return (
    <div className='flex gap-5 flex-col items-center w-full min-h-screen h-full md:w-1/6'>
      <div className='flex items-center gap-5'>
        <img className='w-20 md:w-52' alt='hero-img' src='https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg'/>
        <span className='font-beba text-4xl md:hidden'>Batman</span>
      </div>
      <PowerStats/>
    </div>
  )
}

export default HeroStats