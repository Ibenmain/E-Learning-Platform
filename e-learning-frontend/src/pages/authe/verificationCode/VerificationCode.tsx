import axios from 'axios';
import * as yup from 'yup';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

const schema = yup.object().shape({
    verificationCode: yup.string()
        .required('Verification code is required')
        .matches(/^\d{6}$/, 'Code must be 6 digits'),
});

const VerificationCode = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Get email from location state (passed from signup)
    const email = location.state?.email;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { verificationCode: string }) => {
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:8000/api/authe/verify/", {
                email,
                verification_code: data.verificationCode,
            });

            if (response.status === 200) {
                navigate("/signin");
            }
        } catch (err: any) {
            if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError("Verification failed.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        setIsLoading(true);
        try {
            await axios.post("http://localhost:8000/api/authe/resend-code/", { email });
            setError(""); // Clear any old errors
        } catch (err: any) {
            setError("Failed to resend code.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative pt-16 min-h-screen  flex justify-center items-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 object-cover w-full h-full z-0"
            >
                <source src="/images/bg_video.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center text-white backdrop-blur-2xl ~w-[300px]/[430px] ~py-[20px]/[40px] ~rounded-[8px]/[10px]">
                <div className='flex flex-col items-center justify-center ~space-y-[8px]/[16px]'>
                    <div className='~w-[250px]/[343px] ~space-y-[8px]/[16px]'>
                        <button onClick={() => navigate('/signup')}>
                            <img src="/figure/rows.svg" alt="logo" className="w-[38px] h-[38px]" />
                        </button>
                        <h1 className="~text-[20px]/[28px] text-[#9FEF2E] leading-6 font-bold">
                            Register
                        </h1>
                        <p className="text-start font-sans font-normal ~text-[12px]/[16px] w-full max-w-[343px] leading-5">
                            We've sent a 6-digit code to {email || 'your email'}. Please enter it below.
                        </p>
                    </div>

                    {error && (
                        <div className="text-red-500 ~text-[12px]/[14px] mt-1">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full ~space-y-[12px]/[24px]">
                        <div className='~space-y-[8px]/[16px] ~text-[12px]/[16px]'>
                            <label htmlFor="verificationCode" className='leading-6 font-normal font-sans'>Verification Code</label>
                            <div>
                                <div className="relative ~w-[250px]/[343px] ~h-[35px]/[50px]">
                                    <Controller
                                        name='verificationCode'
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="Ex: 123456"
                                                className={`w-full h-full pl-2 ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic ~text-[12px]/[16px] placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.verificationCode ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                                            />
                                        )}
                                    />
                                </div>
                                {errors.verificationCode && (
                                    <span className="text-red-500 ~text-[12px]/[14px] mt-1 block">{errors.verificationCode.message}</span>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="~w-[250px]/[343px] ~h-[25px]/[48px] ~rounded-[8px]/[10px] bg-custom-gradient text-black text-base font-bold ~text-[12px]/[16px] leading-6 disabled:opacity-50"
                        >
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </button>
                    </form>

                    <button
                        onClick={handleResendCode}
                        disabled={isLoading}
                        className="text-[#9FEF2E] cursor-pointer ~text-[12px]/[16px]"
                    >
                        Didn't receive a code? Resend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerificationCode;