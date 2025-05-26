import React from 'react'
import LatestJobCards from './LatestJobsCards';
import { useSelector } from 'react-redux'; 
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-7xl mx-auto my-20 px-4'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-12"
            >
                <h1 className='text-4xl font-bold mb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>Latest & Top </span> 
                    Job Openings
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the most recent and exciting opportunities from leading companies
                </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allJobs.length <= 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full text-center py-12 text-gray-500"
                        >
                            No Jobs Available
                        </motion.div>
                    ) : (
                        allJobs?.slice(0,6).map((job, index) => (
                            <motion.div
                                key={job._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <LatestJobCards job={job}/>
                            </motion.div>
                        ))
                    )
                }
            </div>
        </motion.div>
    )
}

export default LatestJobs