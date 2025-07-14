import React from 'react'
import { Button } from './ui/button'
import { Bookmark, Building2, MapPin, Briefcase, Clock, IndianRupee } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate()
  // const jobId = "iryqwoiryo"

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/ (1000*24*60*60));
  }

  return (
    <div className="relative bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 transition-transform duration-200 hover:shadow-lg">
       <span className="text-gray-400 font-medium">
          {/* Date formatting logic */}
          {(() => {
            const createdAt = new Date(job?.createdAt);
            const currentTime = new Date();
            const daysAgo = Math.floor((currentTime - createdAt) / (1000 * 60 * 60 * 24));
            if (daysAgo === 0) return "Today";
            if (daysAgo === 1) return "Yesterday";
            return `${daysAgo} days ago`;
          })()}
        </span>
      {/* Header: Company Logo & Name */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gray-100 rounded-full p-2 border border-gray-200 flex items-center justify-center w-12 h-12">
          {job?.company?.logo ? (
            <Avatar className="w-8 h-8">
              <AvatarImage src={job?.company?.logo} />
            </Avatar>
          ) : (
            <Building2 className="w-7 h-7 text-gray-400" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-base text-gray-800">{job?.company?.name}</h2>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">India</span>
          </div>
        </div>
      </div>
      {/* Title & Description */}
      <div>
        <h1 className="font-bold text-lg text-gray-900 mb-1">{job?.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{job?.description}</p>
      </div>
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Badge className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
          <Briefcase className="w-4 h-4 mr-1 text-gray-500" />
          {job?.position} Position
        </Badge>
        <Badge className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
          <Clock className="w-4 h-4 mr-1 text-gray-500" />
          {job?.jobType}
        </Badge>
        <Badge className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full flex items-center gap-1" variant="secondary">
          <IndianRupee className="w-4 h-4 mr-1 text-gray-500" />
          {job?.salary} LPA
        </Badge>
      </div>
      {/* Footer: Actions & Date */}
      <div className="flex items-center gap-4 mt-2">
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline" className="rounded-full border-gray-200 text-gray-700 font-medium">Details</Button>
        <Button className="bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
