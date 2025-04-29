import React from 'react'
import {RadioGroup, RadioGroupItem} from './ui/radio-group'
import { Label } from './ui/label'


const filterData = [
  {
    filterType : "Location",
    array : ["India", "USA", "UK", "Canada", "Australia"]
  },
  {
    filterType : "Industry",
    array : ["IT", "Finance", "Marketing", "Sales", "HR"]
  },
  {
    filterType : 'Salary',
    array : ["0-5 LPA", "5-10 LPA", "10-15 LPA", "15-20 LPA", "20+ LPA"]
  }

]

const FilterCard = () => {
  return (
    <div>
      <h1>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index) => {
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          })
        }
      </RadioGroup>
      
    </div>
  )
}

export default FilterCard
