import React from 'react'

const Contact = () => {
    return (
        <section className='relative py-11 flex items-center justify-center flex-col '>
            <h1 className='font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] font-sans text-[#1D293C] dark:text-[#F1F5F9] w-full text-center'>Start Your Learning Journey Today</h1>
            <p className='text-[#64748B] w-full text-center font-semibold text-[20px] leading-[28px] max-w-[772px] py-10'>Join our community of learners and innovators. Sign up now to access all our free courses and resources.</p>
            <div className='py-14 flex items-center justify-center flex-row  w-full'>
                <img src="/images/icon05.svg" alt="icon not found" className='absolute left-0 lg:block hidden' />
                <div className='flex justify-center w-full max-w-[541px] space-x-4'>
                    <div className='w-full flex flex-col'>
                        <input type="text" placeholder='Enter your email' className='text-xl text-[#CBD5E1] border border-[#64748B] dark:border-[#334155] rounded-[4px] h-14 w-full py-4 px-4 mb-5' />
                        <p className='text-[#64748B] dark:text-[#64748B] w-full font-normal text-[13px]'>By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                    <button className='bg-black dark:bg-[#9FEF00] text-white dark:text-black font-sans font-normal text-xl rounded-[4px] h-14 w-28'>Send</button>
                </div>
            </div>
        </section>
    )
}

export default Contact