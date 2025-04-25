import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { User2 } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
                <h1 className='text-2xl font-bold'>
                    Job <span className='text-[#F83002]'>Portal</span>
                </h1>

                <div className='flex items-center gap-6'>
                    <ul className='flex font-medium items-center gap-6 text-gray-700'>
                        <li className='hover:text-[#F83002] cursor-pointer'>Home</li>
                        <li className='hover:text-[#F83002] cursor-pointer'>Jobs</li>
                        <li className='hover:text-[#F83002] cursor-pointer'>Browse</li>
                    </ul>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>Tushar Shinde</h4>
                                    <p className='text-sm text-muted-foreground'>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col my-2 text-gray-600'>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                    <User2/>
                                    <Button variant="Link">View Profile</Button>
                                </div>
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <Button variant="Link">Logout</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Navbar
