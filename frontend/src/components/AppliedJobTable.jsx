import React from 'react';
import { Table, TableRow, TableCaption, TableHeader, TableHead, TableBody, TableCell } from './ui/table';
import { Badge } from './ui/badge'; // Ensure this path is correct based on your project structure

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Job Title</TableHead>
            <TableHead className="text-center">Company</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">17-07-2024</TableCell>
              <TableCell className="text-center">Software Engineer</TableCell>
              <TableCell className="text-center">Google</TableCell>
              <TableCell className="text-right">
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
