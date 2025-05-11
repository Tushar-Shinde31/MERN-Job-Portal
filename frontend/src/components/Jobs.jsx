import React from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Jobs = () => {
  const { allJobs = [] } = useSelector(store => store.job);
  useGetAllJobs();
  
  return (
   <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto mt-5'>
      <div className="flex gap-5">
        <div style={{ width: '20%' }}>
          <FilterCard/>
        </div>
        {
          !allJobs || allJobs.length === 0 ? (
            <div className='flex-1 flex items-center justify-center'>
              <span className='text-gray-500'>No jobs found</span>
            </div>
          ) : (
            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
              <div className='grid grid-cols-3 gap-4'>
                {
                  allJobs.map((job) => (
                   <div key={job?._id}>
                    <Job job={job}/>
                   </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
   </div>
  );
};

export default Jobs;