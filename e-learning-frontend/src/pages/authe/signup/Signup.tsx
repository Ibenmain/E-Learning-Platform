import axios from 'axios';
import * as yup from 'yup';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginWithGoogle from '../google/GoogleLogin';
import LoginWithGithub from '../github/GithubLogin';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../context/AutheContext';
import { toast } from 'react-hot-toast';
import SpinnerComponent from '../../../components/spinnerComponent/SpinnerComponent'

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
});

const defaultValues = {
  email: '',
  username: '',
  password: '',
};

interface FormData {
  email: string;
  username: string;
  password: string;
}

const SignupForm = () => {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(false);
  const { isAuthenticated } = useAuth();
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: FormData) => {
    setDisabled(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/authe/register/",
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      if (response.status === 400) {
        toast.error('Invalid data provided');
      } else if (response.status === 500) {
        toast.error('Server error, please try again later');
      } else if (response.status === 201 || response.status === 200) {
        navigate('/verificationCode', {
          state: { email: data.email }
        });
      }
    } catch (error: any) {
      if (error.response?.status == 409) {
        toast.error(error.response.data.message || 'An error occurred');
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="relative pt-16 min-h-screen  flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0 "
      >
        <source src="/images/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="relative ~w-[300px]/[430px]   z-10 flex flex-col items-center justify-center text-white  backdrop-blur-2xl ~py-[20px]/[40px] ~rounded-[8px]/[10px]">
        <div className='flex flex-col items-center  ~space-y-[8px]/[16px]' >
          <div className='~space-y-[8px]/[16px] ~w-[250px]/[343px]'>
            <h1 className="~text-[20px]/[28px] text-[#9FEF2E] leading-6 font-bold ">
              Sign up
            </h1>
            {/* <p className="text-start font-sans font-normal ~text-[12px]/[16px]  leading-5 max-w-[343px] ">
              Create an account to access all the features of <span className='text-[#9FEF2E]'>OCM!</span>
            </p> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col w-full ">
            <div className='~space-y-[8px]/[12px] flex flex-col justify-center items-center '>
              <div className='space-y-1  ~text-[12px]/[16px]'>
                <label htmlFor="email" className='leading-6 font-normal font-sans'> Email</label>
                <div>
                  <div className="relative ~w-[250px]/[343px] ~h-[35px]/[50px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <img src="/figure/arobas.svg" alt="email" className='~w-[14px]/[20px]' />
                    </span>
                    <Controller
                      name='email'
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="email"
                          placeholder="john@example.com"
                          className={`w-full h-full ~pl-[32px]/[44px]  ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.email ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                        />
                      )}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500 ~text-[12px]/[14px] mt-1 block">{errors.email.message}</span>
                  )}

                </div>
              </div>
              <div className='space-y-1 ~text-[12px]/[16px]'>
                <label htmlFor="name" className='leading-6 font-normal font-sans'> Username</label>
                <div>
                  <div className="relative ~w-[250px]/[343px] ~h-[35px]/[50px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <img src="/figure/profile.svg" alt="name" className='~w-[14px]/[20px]' />
                    </span>
                    <Controller
                      name='username'
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="username"
                          placeholder="John Doe"
                          className={`w-full h-full ~pl-[32px]/[44px]  ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.username ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                        />
                      )}
                    />
                  </div>
                  {errors.username && (<span className="text-red-500 ~text-[12px]/[14px] mt-1 block">{errors.username.message}</span>)}
                </div>
              </div>
              <div className='space-y-1 ~text-[12px]/[16px]'>
                <label htmlFor="password" className='leading-6 font-normal font-sans'> Password</label>
                <div>
                  <div className="relative ~w-[250px]/[343px] ~h-[35px]/[50px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <img src="/figure/lock.svg" alt="password" className='~w-[14px]/[20px]' />
                    </span>
                    <Controller
                      name='password'
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type={show ? 'text' : 'password'}
                          id="password"
                          placeholder="Password"
                          className={`w-full h-full ~pl-[32px]/[44px]  ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.password ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                        />
                      )}
                    />
                    <button type="button"
                      onClick={() => setShow(!show)} className='absolute right-4 top-1/2 -translate-y-1/2  '>
                      {show ?
                        <Icon icon="mingcute:eye-line" className='~w-[14px]/[24px] ~h-[14px]/[24px]' /> :
                        <Icon icon="mingcute:eye-close-line" className='~w-[14px]/[24px] ~h-[14px]/[24px]' />
                      }
                    </button>
                  </div>
                  {errors.password && (<span className="text-red-500 ~text-[12px]/[14px] mt-1 block">{errors.password.message}</span>)}
                </div>
              </div>
              <div className='~py-[8px]/[14px]'></div>
            </div>
            <button
              disabled={disabled}
              type="submit"
              className="~w-[250px]/[343px] ~h-[25px]/[48px] ~rounded-[8px]/[10px] bg-custom-gradient text-black text-base font-bold  ~text-[12px]/[16px]  leading-6 flex justify-center items-center "
            >
              {disabled ? (
                <SpinnerComponent />
              ) : (
                'Sign up'
              )}
            </button>

          </form>
          <div className="flex  flex-col ~w-[250px]/[340px]  items-center ~space-y-[8px]/[16px]">
            <div className="w-full flex flex-row justify-center items-center">
              <div className="w-full border-[1px] border-[#9FEF2E] "></div>
              <p className="px-4 ~text-[12px]/[16px] ">Or</p>
              <div className="w-full border-[1px] border-[#9FEF2E] "></div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <LoginWithGithub />
              <LoginWithGoogle />
            </div>
            <p className="~text-[12px]/[16px] font-normal leading-5 font-sans text-center mt-4">
              Already have an account?
              <button
                onClick={() => navigate('/signin')}
                className="text-[#9FEF2E] underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
