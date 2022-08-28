import React from 'react'
import PowerStats from './PowerStats'

const HeroStats = ({data}) => {

  return (
    <div className='flex gap-5 flex-col items-center w-full min-h-fit md:min-h-screen h-full md:w-1/6'>
      <div className='flex items-center gap-5'>
        <img className='w-20 md:w-44' alt='hero-img' src={data.images.md}/>
        <span className='font-beba text-4xl md:hidden'>{data.name}</span>
      </div>
      <PowerStats data={data}/>
    </div>
  )
}

export default HeroStats