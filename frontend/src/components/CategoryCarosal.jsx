import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { motion } from 'framer-motion';

const categories = [
    {
        name: "Frontend Developer",
        color: "from-blue-500 to-cyan-400",
        icon: "💻"
    },
    {
        name: "Backend Developer",
        color: "from-purple-500 to-indigo-500",
        icon: "⚙️"
    },
    {
        name: "Data Science",
        color: "from-green-500 to-emerald-400",
        icon: "📊"
    },
    {
        name: "Graphic Designer",
        color: "from-pink-500 to-rose-400",
        icon: "🎨"
    },
    {
        name: "FullStack Developer",
        color: "from-orange-500 to-amber-400",
        icon: "🚀"
    }
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-4 pb-12 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/30 via-transparent to-blue-100/30"></div>
            </div>

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
                Popular Categories
            </motion.h2>
            
            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent className="py-4">
                    {categories.map((cat, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-full"
                            >
                                <Button
                                    onClick={() => searchJobHandler(cat.name)}
                                    className={`w-full h-24 rounded-xl bg-gradient-to-r ${cat.color} text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 border-0`}
                                >
                                    <span className="text-2xl">{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </Button>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-6">
                    <CarouselPrevious className="static translate-y-0 hover:bg-purple-100" />
                    <CarouselNext className="static translate-y-0 hover:bg-purple-100" />
                </div>
            </Carousel>
        </motion.div>
    )
}

export default CategoryCarousel