import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [query, setQuery] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
      dispatch(setSearchedQuery(query));
      navigate("/browse")
  }

  return (
    <div className='text-center relative'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      <div className="flex flex-col gap-8 my-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mx-auto px-6 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm tracking-wide shadow-sm hover:shadow-md transition-shadow duration-300'
        >
          No. 1 Job Hunt website
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-5xl md:text-6xl font-bold leading-tight'
        >
          Search, Apply & <br /> 
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-purple-600 relative inline-block'
          >
            Dream Job
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-2 left-0 h-2 bg-purple-200 rounded-full"
            ></motion.span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-gray-600 text-lg max-w-2xl mx-auto'
        >
          Find your perfect job match from thousands of opportunities. 
          Connect with top companies and take the next step in your career.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex w-full max-w-2xl shadow-lg border border-gray-200 pl-6 rounded-full items-center gap-4 mx-auto bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <input 
            type="text"
            placeholder='Search for jobs, companies, etc.'
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full py-4 text-gray-700 placeholder-gray-400'
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={searchJobHandler} 
              className="rounded-full bg-purple-600 hover:bg-purple-700 text-white p-4 m-1 transition-all duration-300"
            >
              <Search className='h-5 w-5'/>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-12 mt-8"
        >
          {[
            { number: "10K+", label: "Active Jobs" },
            { number: "5K+", label: "Companies" },
            { number: "15K+", label: "Job Seekers" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-purple-600">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection