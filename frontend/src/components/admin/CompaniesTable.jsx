// import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recet resgisterd companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableCell>
            <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/VW0WlGzQyVo4wEUu9dydN9dKEN9QodbqMUOXjm4V5V4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzgxLzQ5LzI0/LzM2MF9GXzg4MTQ5/MjQ3Nl95N1Z2TFRT/eGZOWHY3NkJ6NzBm/WlNXNmc1VEFsbmI2/cS5qcGc"/>
          </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>18-7-2025</TableCell>
            <TableCell className='text-right cursor-pointer'>
                <Popover>
                    <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                    <PopoverContent className='w-32'>
                        <div className='flex items-center gap-2 w-fit cursor-pointer'>
                            <Edit2 className='w-4'/>
                            <span>Edit</span>
                        </div>
                    </PopoverContent>
                </Popover>
            </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable