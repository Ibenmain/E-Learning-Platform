import { Icon } from '@iconify/react'
import React from 'react'

const Features = () => {
    const features = [
        {
            id: 0,
            title: "AI",
            description: "From basics to advanced concepts, learn AI and machine learning through interactive lessons",
            icon: "ix:ai",
        },
        {
            id: 1,
            title: "Robotics",
            description: "Discover the world of robotics and learn how to build and program robots with ease",
            icon: "ix:ai",
        },
        {
            id: 2,
            title: "Coding",
            description: "Learn the fundamentals of coding and programming in a fun and engaging way",
            icon: "ix:ai",
        },
        {
            id: 3,
            title: "3D Modeling",
            description: "Explore the world of 3D modeling and learn how to create and design 3D objects",
            icon: "ix:ai",
        },
        {
            id: 4,
            title: "Artificial Intelligence",
            description: "Discover the world of artificial intelligence and learn how to build and program robots with ease",
            icon: "ix:ai",
        },
        {
            id: 5,
            title: "Machine Learning",
            description: "From basics to advanced concepts, learn AI and machine learning through interactive lessons",
            icon: "ix:ai",
        },

    ]
  return (
    <section className='h-[721px]'>
        <h1>Oue Features</h1>
        <div className='flex flex-wrap'>
        <Icon icon="ix:ai" color={'gradient-to-tr from-[#9FEF00] to-[#03FF89]'} />
        </div>
    </section>
  )
}

export default Features