import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
  {
    filterType: 'Location',
    array: ['India', 'USA', 'UK', 'Canada', 'Australia'],
  },
  {
    filterType: 'Industry',
    array: ['IT', 'Finance', 'Marketing', 'Sales', 'HR'],
  },
  {
    filterType: 'Salary',
    array: ['0-5 LPA', '5-10 LPA', '10-15 LPA', '15-20 LPA', '20+ LPA'],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>Filter Jobs</h1>
      <hr className='mt-3 mb-4' />
      <RadioGroup>
        {filterData.map((data, index) => {
          return (
            <div key={index} className='mb-4'>
              <h2 className='font-bold text-lg mb-2'>{data.filterType}</h2>
              {data.array.map((item, idx) => (
                <div key={idx} className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item} id={`${data.filterType}-${idx}`} />
                  <Label htmlFor={`${data.filterType}-${idx}`}>{item}</Label>
                </div>
              ))}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
