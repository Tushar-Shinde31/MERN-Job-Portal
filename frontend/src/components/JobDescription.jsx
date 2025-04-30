import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const JobDescription = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
        <div>
        <h1 className='font-bold text-xl'>Title</h1>
        <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost"> Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">LPA</Badge>
            </div>
        </div>
            <Button>Apply Now</Button>
    </div>
    </div>
  )
}

export default JobDescription
