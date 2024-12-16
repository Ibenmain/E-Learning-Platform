import { Icon } from '@iconify/react';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0 "
      >
        <source src="/images/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col  items-center justify-center  text-white bg-custom-black-red px-16 py-12 rounded-[12px]">
        <div className='flex flex-col items-center gap-6' >
          <div className='w-full'>
            <Icon icon="subway:left-arrow-1" width="38" height="38" />
            <h1 className="text-3xl font-bold ">
              login
            </h1>
            <p className="text-start text-[14px] mt-2 w-60 ">
              Login now to track all your expenses and income at a place!
            </p>
          </div>
          <form action="" className="flex flex-col gap-4 w-full">
            <label htmlFor="email" className='leading-6 text-[16px] font-normal'>Email</label>
            <div className="relative w-[343px] h-[56px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                📧
              </span>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full h-full pl-10 rounded-[16px] font-sans placeholder:font-normal placeholder:italic placeholder:text-[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 border-[#9FEF2E]"
              />
            </div>
            <label htmlFor="password" className='leading-6 text-[16px] font-normal'>Password</label>
            <div>
              <div className="relative w-[343px] h-[56px]">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔒
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full h-full pl-10 rounded-[16px] font-sans placeholder:font-normal placeholder:italic placeholder:text-[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 border-[#9FEF2E]"
                />
              </div>
              <a href="/forgetpassword" className='text-[#9FEF2E] underline'>Forgot Password?</a>
            </div>
            <button className="mt-4 w-[343px] h-[56px] rounded-[16px] bg-custom-gradient text-black" >Login</button>
          </form>
          <div className='border-[1px] border-[#9FEF2E] rounded-lg w-full'></div>
          <div className='flex flex-col gap-2 w-full'>
            <button className="mt-4 w-[343px] h-[56px] rounded-[16px] bg-transparent border-2 text-white flex flex-row justify-center items-center space-x-2" >
              <Icon icon="logos:google-icon" width="24" height="24" />
              <p>
                Continue with Google
              </p>
            </button>
            <button className="mt-4 w-[343px] h-[56px] rounded-[16px] bg-transparent border-2 text-white flex flex-row justify-center items-center space-x-2" >
              <Icon icon="logos:github-icon" width="24" height="24" />
              <p>
                Continue with Github
              </p>
            </button>
            <p className='text-[14px] text-center flex flex-row justify-center items-center gap-2'>
              Don’t have an account? <a href="/signup" className="text-[#9FEF2E] underline">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
