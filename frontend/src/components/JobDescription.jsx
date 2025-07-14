import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Building2, MapPin, Briefcase, Clock, IndianRupee, Users, Calendar } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'


const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const {singleJob} = useSelector(store=>store.job)
  const {user} = useSelector(store=>store.auth)
  const dispatch = useDispatch();
  
  const isApplied = singleJob?.applications?.some(application=>application.applicant === user?._id) || false;

  const applyJobHandler = async() => {
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials: true});
        if(res.data.success){
            toast.success(res.data.message);
            // Refresh the job data to update the application status
            const updatedJob = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
            if(updatedJob.data.success){
                dispatch(setSingleJob(updatedJob.data.job));
            }
        }
    } catch(error) {
        toast.error(error.response?.data?.message || "Failed to apply for the job");
    }
  }

  useEffect(()=>{
    const fetchSingleJob= async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
            } else {
                console.error("Failed to fetch jobs:", res.data.message);
            }
        } catch (error) {
            console.error("Error fetching jobs:", error.response?.data?.message || error.message);
        }
    }
    fetchSingleJob();
},[jobId.dispatch, user?._id])

  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
        {/* Header: Company Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gray-100 rounded-full p-3 border border-gray-200 flex items-center justify-center w-16 h-16">
            {singleJob?.company?.logo ? (
              <Avatar className="w-10 h-10">
                <AvatarImage src={singleJob?.company?.logo} />
              </Avatar>
            ) : (
              <Building2 className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <div>
            <h2 className="font-bold text-xl text-gray-800 mb-1">{singleJob?.company?.name}</h2>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">{singleJob?.location || 'India'}</span>
            </div>
          </div>
        </div>
        {/* Title & Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h1 className="font-extrabold text-2xl text-gray-900 mb-1">{singleJob?.title}</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
              <Briefcase className="w-4 h-4 mr-1" />
              {singleJob?.position} Position
            </Badge>
            <Badge className="bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
              <Clock className="w-4 h-4 mr-1" />
              {singleJob?.jobType}
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
              <IndianRupee className="w-4 h-4 mr-1" />
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        {/* Apply Button */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-full px-6 py-2 text-lg font-bold shadow-md transition-all duration-200 ${isApplied ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'}`}
          >
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        {/* Job Details Section */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h2 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-500" /> Job Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">Role:</span>
              <span>{singleJob?.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="font-semibold">Location:</span>
              <span>{singleJob?.location || 'India'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span className="font-semibold">Applicants:</span>
              <span>{singleJob?.applications?.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="font-semibold">Experience:</span>
              <span>{singleJob?.experience} yrs</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <IndianRupee className="w-4 h-4 text-purple-500" />
              <span className="font-semibold">Salary:</span>
              <span>{singleJob?.salary} LPA</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="font-semibold">Posted Date:</span>
              <span>{singleJob?.createdAt ? new Date(singleJob?.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-md mb-2 text-gray-800">Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{singleJob?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
