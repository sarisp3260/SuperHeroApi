import React from 'react'
import { Link } from 'react-router-dom'

const CardHero = ({hero}) => {
  return (

    <Link to={`/detail/${hero.id}`} className='relative flex flex-col items-center w-11/12 h-fit'>
      <img src={hero.images.md} className='bg-cover rounded-md' alt='hero-img'/>
      <span className='absolute bottom-0 bg-orange400/70 rounded-b-md w-full text-primary font-semibold font-beba text-xl p-2 text-center'>{hero.name}</span>
    </Link>

  )
}

export default CardHero