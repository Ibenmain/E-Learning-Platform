import React from 'react'

const Contact = () => {
    return (
        <section className='relative py-11 flex items-center justify-center flex-col '>
            <h1 className='font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] font-sans text-[#1D293C] dark:text-[#F1F5F9] w-full text-center'>Start Your Learning Journey Today</h1>
            <p className='text-[#64748B] w-full text-center font-semibold ~text-[12px]/[20px] ~leading-[14px]/[28px] max-w-[300px] md:max-w-[772px] py-10'>Join our community of learners and innovators. Sign up now to access all our free courses and resources.</p>
            <div className='py-14 flex items-center justify-center flex-row  w-full'>
                <img src="/images/icon05.svg" alt="icon not found" className='absolute left-0 lg:block hidden' />
                <div className='flex justify-center w-full max-w-[541px] space-x-4 px-4 sm:px-0'>
                    <div className='w-full flex flex-col'>
                        <input type="text" placeholder='Enter your email' className='font-sans text-xl text-[#CBD5E1] border border-[#64748B] dark:border-[#334155] rounded-[4px] ~h-[24px]/[48px] w-full py-4 px-4 mb-2 sm:mb-5 ~text-[12px]/[20px] ~leading-[14px]/[28px] placeholder:text-[#64748B] dark:placeholder:text-[#64748B]' />
                        <p className='text-[#64748B] dark:text-[#64748B] w-full font-normal text-[8px]/[13px]'>By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                    <button className='bg-black dark:bg-[#9FEF00] text-white dark:text-black font-sans font-normal ~text-[12px]/[20px] rounded-[4px] ~h-[32px]/[48px] w-28'>Send</button>
                </div>
            </div>
        </section>
    )
}

export default Contact