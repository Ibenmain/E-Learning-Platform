import { Icon } from '@iconify/react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="/images/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center text-white bg-custom-black-red px-20 py-16 rounded-[12px]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full space-y-4">
            <h1 className="text-[32px] text-[#9FEF2E] leading-6 font-bold">Login</h1>
            <p className="text-start font-sans font-normal text-[16px] w-full max-w-[343px] leading-5">
              Login now to track all your expenses and income in one place!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="leading-6 text-[16px] font-normal font-sans">
                Email
              </label>
              <div>
                <div className="relative w-[343px] h-[56px]">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img src="/figure/arobas.svg" alt="email" width={20} height={20} />
                  </span>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="email"
                        placeholder="Ex: abc@example.com"
                        className={`w-full h-full pl-12 rounded-[16px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic placeholder:text-[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.email ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                      />
                    )}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className='space-y-1'>
              <label htmlFor="password" className='leading-6 text-[16px] font-normal font-sans'>Your Password</label>
              <div>
                <div className="relative w-[343px] h-[56px]">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img src="/figure/lock.svg" alt="password" width={20} height={20} />
                  </span>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className={`w-full h-full pl-12 rounded-[16px] font-sans focus:placeholder:opacity-0 placeholder:font-normal placeholder:italic placeholder:text-[16px] placeholder:leading-[24px] placeholder:[letter-spacing:-0.011em] focus:outline-none bg-transparent border-2 ${errors.password ? 'border-red-500' : 'border-[#9FEF2E]'}`}
                      />
                    )}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <a href="/forgetpassword" className='text-sm font-sans font-normal leading-6 text-[#9FEF2E] underline'>Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-[343px] h-[56px] rounded-[16px] bg-custom-gradient text-black text-base font-bold leading-6"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col w-full">
            <div className="w-full py-4 flex flex-row justify-center items-center">
              <div className="w-full border-[1px] border-[#9FEF2E] rounded-lg"></div>
              <p className="px-4">Or</p>
              <div className="w-full border-[1px] border-[#9FEF2E] rounded-lg"></div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-4 py-4">
              <button className="rounded-[16px] bg-transparent">
                <Icon icon="octicon:mark-github-24" width="24" height="24" />
              </button>
              <button className="rounded-[16px] bg-transparent">
                <Icon icon="logos:google-icon" width="24" height="24" />
              </button>
            </div>
            <p className="text-[16px] font-normal leading-5 font-sans text-center mt-2">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-[#9FEF2E] underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
