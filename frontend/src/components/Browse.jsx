import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { setSearchedQuery } from '@/redux/jobSlice'
import { motion } from 'framer-motion'

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-gray-800"
          >
            Search Results
          </motion.h1>
          <p className="text-gray-600 mt-1">{allJobs.length} job{allJobs.length !== 1 && 's'} found</p>
        </div>

        {
          allJobs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allJobs.map((job, i) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Job job={job} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-16">
              <p>No jobs found matching your criteria.</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Browse
