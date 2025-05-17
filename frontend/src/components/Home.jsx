import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosal from './CategoryCarosal'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const Home = () => {
  useGetAllJobs
  const {user} = useSelector(store => store.auth);
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if(user?.role === 'recruiter' && !location.pathname.startsWith('/admin')) {
  //     navigate("/admin/companies");
  //   }
  // },[user, location.pathname]);
  
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
