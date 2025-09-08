import axios from 'axios';
import * as yup from 'yup';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginWithGoogle from '../google/GoogleLogin';
import LoginWithGithub from '../github/GithubLogin';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../../context/AutheContext';
import SpinnerComponent from '../../../components/spinnerComponent/SpinnerComponent'
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
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
      const response = await axios.post("http://localhost:8000/api/authe/login/", data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status == 401) {
        toast.error("Invalid email or password");
      }
      if (response.status === 200) {
        login();
        navigate('/home');
        setDisabled(false);
        sessionStorage.setItem('access_token', response.data.access_token);
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="relative pt-16 min-h-screen flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="/images/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="relative ~w-[300px]/[430px] z-10 flex flex-col items- center justify-center text-white bg-custom-black-red  ~py-[20px]/[40px] ~rounded-[8px]/[10px] ">
        <div className="flex flex-col items-center ~space-y-[8px]/[16px] ">
          <div className=" flex flex-col justify-center items-start ~space-y-[8px]/[16px] ~w-[250px]/[343px] ">
            <h1 className="~text-[20px]/[28px] text-[#9FEF2E] leading-6 font-bold">Sign in</h1>
            <p className="text-start font-sans font-normal ~text-[12px]/[16px] w-full max-w-[343px] leading-5">
              Login now to track all your expenses and income at a place!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full ~space-y-[8px]/[16px]">
            <div className="space-y-1">
              <label htmlFor="email" className="leading-6 ~text-[12px]/[16px] font-normal font-sans">
                Email
              </label>
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
                        className={`w-full h-full ~pl-[32px]/[44px]  ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic ~text-[12px]/[16px]  placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.email ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                      />
                    )}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 ~text-[12px]/[14px] mt-1 block">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className='space-y-1'>
              <label htmlFor="password" className='leading-6 ~text-[12px]/[16px] font-normal font-sans'>Password</label>
              <div>
                <div className="relative flex flex-row ~w-[250px]/[343px] ~h-[35px]/[50px]">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img src="/figure/lock.svg" alt="password" className='~w-[14px]/[20px]' />
                  </span>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type={show ? 'text' : 'password'}
                        id="password"
                        placeholder="Password"
                        className={`w-full h-full  ~pl-[32px]/[44px] ~rounded-[8px]/[10px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic ~text-[12px]/[16px]  placeholder:~text-[12px]/[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.password ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                      />
                    )}
                  />
                  <button type="button"
                    onClick={() => setShow(!show)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                    {show ?
                      <Icon icon="mingcute:eye-line" className='~w-[14px]/[24px] ~h-[14px]/[24px]' /> :
                      <Icon icon="mingcute:eye-close-line" className='~w-[14px]/[24px] ~h-[14px]/[24px]' />
                    }
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 ~text-[12px]/[14px] mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <a href="/forgetpassword" className='~text-[11px]/[15px] font-sans font-normal leading-6 text-[#9FEF2E] underline'>Forgot Password?</a>
            </div>
            <button
              disabled={disabled}
              type="submit"
              className="~w-[250px]/[343px] ~h-[25px]/[48px] ~rounded-[8px]/[10px] bg-custom-gradient text-black text-base font-bold  ~text-[12px]/[16px]  leading-6 flex justify-center items-center "
            >
              {disabled ? (
                <SpinnerComponent />
              ) : (
                'Sign in'
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
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-[#9FEF2E] underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
