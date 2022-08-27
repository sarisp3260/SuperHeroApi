import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const heros = useSelector(state => state.heros);

  console.log(heros)
  return (
    <div>
      home
    </div>
  )
}

export default Home