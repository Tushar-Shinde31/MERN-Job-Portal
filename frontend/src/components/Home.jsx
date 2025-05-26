import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosal from './CategoryCarosal'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.role === 'recruiter' ) {
      navigate("/admin/companies");
    }
  },[]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with enhanced spacing and background */}
        <section className="py-12 md:py-20">
          <HeroSection/>
        </section>

        {/* Category Section with card-like appearance */}
        <section className="py-12 bg-white rounded-2xl shadow-sm my-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="px-6">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Browse Jobs by Category</h2> */}
            <CategoryCarosal/>
          </div>
        </section>

        {/* Latest Jobs Section with enhanced layout */}
        <section className="py-12">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Job Opportunities</h2>
            <LatestJobs/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Home