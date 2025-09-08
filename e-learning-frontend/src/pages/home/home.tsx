import React from 'react'
import { Icon } from '@iconify/react'

const HomeCard = [
    {
        image: "/images/image.jpeg",
        title: "Sample Course",
        description: "This is a sample course description that provides an overview of the course content and objectives.",
        duration: "2 hours 40 minutes",
        level: "Beginner",
    },
    {
        image: "/images/image.jpeg",
        title: "Advanced Course",
        description: "This course is designed for advanced learners and covers complex topics in depth. It includes practical applications and case studies.",
        duration: "3 hours 15 minutes",
        level: "Advanced",
    },
    {
        image: "/images/image.jpeg",
        title: "Intermediate Course",
        description: "An intermediate course that bridges the gap between beginner and advanced levels.",
        duration: "2 hours 50 minutes",
        level: "Intermediate",
    },
    {
        image: "/images/image.jpeg",
        title: "Expert Course",
        description: "This course is for experts and dives deep into specialized topics.",
        duration: "3 hours 30 minutes",
        level: "Expert",
    },
    {
        image: "/images/image.jpeg",
        title: "Professional Course",
        description: "A professional course aimed at enhancing skills for career advancement.",
        duration: "1 hours 50 minutes",
        level: "Professional",
    },
    {
        image: "/images/image.jpeg",
        title: "Certification Course",
        description: "This course prepares you for certification in a specific field.",
        duration: "3 hours 30 minutes",
        level: "Certification",
    },
    {
        image: "/images/image.jpeg",
        title: "Diploma Course",
        description: "A diploma course that provides comprehensive knowledge in a subject area.",
        duration: "5 hours 10 minutes",
        level: "Diploma",
    },
    {
        image: "/images/image.jpeg",
        title: "Specialization Course",
        description: "This course allows you to specialize in a particular area of interest.",
        duration: "2 hours 10 minutes",
        level: "Specialization",
    },
]

const Home = () => {
    return (
        <div className="flex justify-center items-center w-full h-full ">
            <div className=' container mx-auto flex flex-col justify-center items-center text-black dark:text-white w-full space-y-10 px-10 xl:px-0 '>
                <div className='relative flex items-center w-full text-black dark:text-white'>
                    <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none outline-none bg-[#f8fafc] dark:bg-[#212a34] text-black dark:text-white" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9FEF00]">
                        <Icon icon="ic:baseline-search" width="20" height="20" />
                    </span>
                </div>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ~gap-[20px]/[80px] h-[720px] overflow-y-scroll hide-scrollbar pb-4">
                    {HomeCard.map((card, index) => (
                        <div key={index} className=' rounded-lg shadow-md bg-white dark:bg-[#212a34] w-[250px] h-[450px] sm:w-full'>
                            <img src={card.image} alt={card.title} className='w-full h-32 object-cover rounded-t-md mb-2' />
                            <div className='p-4 space-y-7'>
                                <h3 className='text-lg font-semibold text-[#9FEF00]'>{card.title}</h3>
                                <div className='space-y-5'>
                                    <p className='text-sm text-black dark:text-white min-h-36'>{card.description.length > 240 ? card.description.slice(0, 240) + "..." : card.description}</p>
                                    <p className='text-sm text-black dark:text-white opacity-70'>{card.duration}</p>
                                    <p className='text-xs text-[#9FEF00]'>{card.level}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home