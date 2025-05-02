import React, { useState } from 'react'
import Navbar from '../components/shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
// import { useStore } from 'react-redux'

// const skills = ['C++' , 'Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'HTML', 'CSS']

const isResume = true; // Change this to false to test the other condition

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store=>store.auth)
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://imgs.search.brave.com/XVqL0jTcI2X8zuC5NlYsJj_akfW_7C10Oq9DjGaVZJ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MmJkYzkzZTljY2Nm/YjQzZTE1NTEwNGMv/NjY2M2EwNzdmYWU2/NGUzZTBiZmQzYWJi/X2JhdG1hbiUyMHBm/cCUyMGZvciUyMHRp/a3RvayUyMCg2KS5w/bmc" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} variant="outline">
            <Pen />
          </Button>
        </div>

        {/* Contact Info */}
        <div className='mt-8'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>{user?.phoneNumber}</span> {/* Add contact info here if needed */}
          </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className='flex items-center gap-1'>
          {
            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
          }
          </div>
        </div>
        <div className='grid w-full items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a  target='blank' href="https://www.linkedin.com/in/tushar-shinde-262335257/" className='text-blue-500 w-full hover:underline cursor-pointer'>Tushar Shinde</a> : <span className='text-gray-500'>No Resume Uploaded</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
          <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile
