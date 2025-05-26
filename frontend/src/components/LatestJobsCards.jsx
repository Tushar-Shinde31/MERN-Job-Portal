import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, MapPin, Briefcase, Clock, IndianRupee } from 'lucide-react'

const LatestJobsCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <motion.div 
            onClick={() => navigate(`/description/${job._id}`)}
            className='p-6 rounded-xl shadow-lg bg-white border border-gray-100 cursor-pointer relative overflow-hidden group'
            whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Hover effect background */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
            />

            {/* Content */}
            <div className="relative z-10">
                <div className='flex items-start justify-between'>
                    <div>
                        <h1 className='font-semibold text-lg text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>{job?.company?.name}</h1>
                        <div className='flex items-center gap-1 mt-1'>
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <p className='text-sm text-gray-500'>India</p>
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Building2 className="w-8 h-8 text-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                </div>

                <div className='mt-4'>
                    <h1 className='font-bold text-xl text-gray-900 group-hover:text-purple-800 transition-colors duration-300'>{job?.title}</h1>
                    <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{job?.description}</p>
                </div>

                <div className='flex flex-wrap items-center gap-2 mt-4'>
                    <Badge 
                        className='bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300'
                        variant="secondary"
                    >
                        <Briefcase className="w-3 h-3 mr-1" />
                        {job?.position} Positions
                    </Badge>
                    <Badge 
                        className='bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-300'
                        variant="secondary"
                    >
                        <Clock className="w-3 h-3 mr-1" />
                        {job?.jobType}
                    </Badge>
                    <Badge 
                        className='bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors duration-300'
                        variant="secondary"
                    >
                        <IndianRupee className="w-3 h-3 mr-1" />
                        {job?.salary}LPA
                    </Badge>
                </div>

                {/* Hover effect line */}
                <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    )
}

export default LatestJobsCards