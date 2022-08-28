import React from 'react'
import Documentation from '../components/About/Documentation'
import Hero from '../components/About/Hero'

const About = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Documentation/>
    </div>
  )
}

export default About