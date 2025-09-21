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
            title: "3D",
            description: "From modeling to animation, explore the world of 3D design through hands-on interactive projects",
            icon: "gis:cube-3d",
        },
        {
            id: 2,
            title: "Robotic",
            description: "From mechanics to programming, build real-world robots through hands-on practical projects",
            icon: "hugeicons:robotic",
        },
        {
            id: 3,
            title: "Coding",
            description: "From basics to full-stack development, create powerful applications through hands-on coding projects",
            icon: "mdi:code-tags",
        },
        {
            id: 4,
            title: "CAD",
            description: "From concept to manufacturing, create professional designs through hands-on CAD projects",
            icon: "mdi:file-cad",
        },
    ]

    return (
        <section className='relative w-full flex items-center flex-col py-11 '>
            <div className='flex flex-col items-center justify-center z-0 '>

                <h1 className='font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] text-[#1D293C] dark:text-[#F1F5F9]'>Our Features</h1>
                <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-10 lg:gap-20 py-14 '>
                    {features.map(feature => (
                        <div key={feature.id} className='flex flex-col ~w-[250px]/[400px] h-auto rounded-xl shadow-custom bg-white p-4 space-y-2 font-sans dark:bg-[#212A34]  hover:-translate-y-1 hover:scale-105 duration-300'>
                            <Icon icon={feature.icon} style={{ color: "#9FEF00" }} className=' w-8 h-8 md:w-12 md:h-16' />
                            <h1 className='text-[#334155] dark:text-[#F1F5F9] font-extrabold ~text-[14px]/[32px] ~leading-[20px]/[48px] '>{feature.title}</h1>
                            <p className='text-[#65748B] dark:text-[#F1F5F9] font-semibold ~text-[10px]/[18px] ~leading-[12px]/[28px]' >{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img className='absolute hidden lg:block top-16 left-0 -z-10' src="images/icon00.svg" alt="icon not found" width={150} height={150} />
            <img className='absolute hidden lg:block top-2 right-0  -z-10' src="images/icon01.svg" alt="icon not found" width={300} height={300} />
            <img className='absolute hidden lg:block top-[600px] right-0 -z-10 ' src="images/icon02.svg" alt="icon not found" width={100} height={100} />
            <img className='absolute hidden lg:block top-[600px] left-0 -z-10' src="images/icon03.svg" alt="icon not found" width={100} height={100} />
        </section>
    )
}

export default Features
