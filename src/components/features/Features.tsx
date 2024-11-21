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
        <section className='relative w-full flex items-center flex-col py-11 overflow-hidden'>
            <div className='flex flex-col items-center justify-center z-0'>

                <h1 className='font-extrabold text-[48px] leading-[48px] text-[#1D293C] dark:text-[#F1F5F9]'>Our Features</h1>
                <div className='flex flex-wrap items-center justify-center gap-10 py-14'>
                    {features.map(feature => (
                        <div key={feature.id} className='flex flex-col w-[400px] h-auto rounded-xl shadow-custom bg-white p-4 space-y-2 font-sans dark:bg-[#212A34]'>
                            <Icon icon={feature.icon} width={48} height={48} style={{ color: "#9FEF00" }} />
                            <h1 className='text-[#334155] dark:text-[#F1F5F9] font-extrabold text-[32px] leading-[48px] '>{feature.title}</h1>
                            <p className='text-[#65748B] dark:text-[#F1F5F9] font-semibold text-[18px] leading-[28px]' >{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img className='absolute top-16 left-12 -z-10' src="images/icon00.svg" alt="icon not found" width={100} height={100} />
            <img className='absolute top-2 -right-10  -z-10' src="images/icon01.svg" alt="icon not found" width={250} height={250} />
            <img className='absolute top-[500px] right-40 -z-10 ' src="images/icon02.svg" alt="icon not found" width={70} height={70} />
            <img className='absolute top-[500px] left-28 -z-10' src="images/icon03.svg" alt="icon not found" width={70} height={70} />
        </section>
    )
}

export default Features