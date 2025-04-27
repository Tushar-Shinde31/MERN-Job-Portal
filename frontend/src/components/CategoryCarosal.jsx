import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
]
const CategoryCarosal = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
            {/* {
                category.map((item, index) => (
                    <CarouselItem className={}></CarouselItem>
                ))
            } */}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CategoryCarosal
