import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosal from './CategoryCarosal'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarosal/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
