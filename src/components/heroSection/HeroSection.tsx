import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative h-[437px] flex justify-center items-center ">
            <div
                className="absolute inset-0 bg-cover bg-center blur-[4px]"
                style={{ backgroundImage: 'url(/images/Fast-Internet.gif)' }}
            />
            <div className="relative z-10 text-white text-center flex items-center justify-center h-full flex-col font-sans max-w-[903px] space-y-10">
                <h1 className='~text-[20px]/[47px] ~leading-[20px]/[48px] w-full font-extrabold'>Master Robotic AI, 3D CAD, and Coding</h1>
                <p className='~text-[15px]/[20px] ~leading-[16px]/[28px] text-[#CBD5E1] text-center font-semibold'>Unlock your potential with our free learning platform. Dive into the  world of robotics, artificial intelligence, 3D modeling, and  programming.</p>
                <div className='flex gap-4  font-medium'>
                    <button className='rounded-[4px] h-8 sm:h-10 w-24 sm:w-32 font-sans text-xs sm:text-base  bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] text-black'>
                        Get started
                    </button>
                    <button className='rounded-[4px] h-8 sm:h-10 w-24 sm:w-32 font-sans text-xs sm:text-base bg-black text-white px-5 sm:px-7 '>
                        More info
                        <div className='h-[1px]  bg-white w-full'></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
