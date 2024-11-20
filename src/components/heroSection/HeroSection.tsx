import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative h-[437px] flex justify-center items-center">
            <div
                className="absolute inset-0 bg-cover bg-center blur-[6px]"
                style={{ backgroundImage: 'url(/images/Fast-Internet.gif)' }}
            />
            <div className="relative z-10 text-white text-center flex items-center justify-center h-full flex-col font-sans max-w-[903px] space-y-10">
                <h1 className='text-[47px] leading-[48px] w-full font-extrabold'>Master Robotic AI, 3D CAD, and Coding</h1>
                <p className='text-[20px] leading-[28px] text-[#CBD5E1] text-center font-semibold'>Unlock your potential with our free learning platform. Dive into the  world of robotics, artificial intelligence, 3D modeling, and  programming.</p>
                <div className='flex gap-4  font-medium'>
                    <button className='rounded-[4px] h-10 w-32 font-sans  bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] text-black'>
                        Get started
                    </button>
                    <button className='rounded-[4px]  h-10 w-32 font-sans bg-black text-white px-7 '>
                        More info
                        <div className='h-[1px]  bg-white w-full'></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
