import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosal from './CategoryCarosal'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarosal/>
    </div>
  )
}

export default Home
