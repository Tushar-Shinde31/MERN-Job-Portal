import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate()
  const jobId = "iryqwoiryo"

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
      <div className="flex items-center justify-between">
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button varient="outline" className="rounded-full" size="icon"><Bookmark/></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant="outline" size="icons">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/VW0WlGzQyVo4wEUu9dydN9dKEN9QodbqMUOXjm4V5V4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzgxLzQ5LzI0/LzM2MF9GXzg4MTQ5/MjQ3Nl95N1Z2TFRT/eGZOWHY3NkJ6NzBm/WlNXNmc1VEFsbmI2/cS5qcGc"/>
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <Button onClick={() => navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
              <Button className='bg-[#7209b7]'>Save for Later</Button>
            </div>
    </div>

  )
}

export default Job
