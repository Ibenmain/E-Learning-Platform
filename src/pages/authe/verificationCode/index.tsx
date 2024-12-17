import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
    const navigate = useNavigate()

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
            <div className="relative z-10 flex flex-col  items-center justify-center text-white  backdrop-blur-2xl px-20 py-12 rounded-[12px]">
                <div className='flex flex-col items-center space-y-4' >
                    <div className='w-full space-y-4'>
                        <button onClick={() => navigate('/signup')}>
                            <img src="/figure/rows.svg" alt="logo" className="w-[38px] h-[38px]" />
                        </button>
                        <h1 className="text-[32px] text-[#9FEF2E] leading-6 font-bold ">
                            Register
                        </h1>
                        <p className="text-start font-sans font-normal text-[16px]  w-full max-w-[343px] leading-5 ">
                            We have sent an email to your email account with a verification code!            </p>
                    </div>
                    <form action="" className="flex flex-col w-full space-y-6">
                        <div className='space-y-1'>
                            <label htmlFor="email" className='leading-6 text-[16px] font-normal font-sans'>Verification Code</label>
                            <div className="relative w-[343px] h-[56px]">
                                <input
                                    type="text"
                                    id="verificationCode"
                                    placeholder="EX: 123456"
                                    className="w-full h-full placeholder:text-center rounded-[16px] font-sans placeholder:font-normal placeholder:italic placeholder:text-[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 border-[#9FEF2E]"
                                />
                            </div>
                        </div>
                        <button className=" w-[343px] h-[56px] rounded-[16px] bg-custom-gradient text-black text-base font-bold leading-6" onClick={() => navigate('')}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerificationCode;
