
import { useAuth } from '../../../context/AutheContext';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


const GoogleLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      axios.post('http://localhost:8000/api/authe/google/', {
        access_token: tokenResponse.access_token,
        email: userInfo.data.email,
        name: userInfo.data.name,


      }).then(response => {
        sessionStorage.setItem('access_token', response.data.access_token);
        login();
        navigate('/home');

      }).catch(error => {
        console.error(error);
      });
    },
  });

  return (
    <button onClick={() => googleLogin()} className="rounded-[10px] bg-transparent border-[1px] border-[#9FEF2E]  flex flex-row justify-center items-center space-x-2 ~w-[250px]/[343px] ~h-[30px]/[40px] ~text-[12px]/[16px]">
      <Icon icon="logos:google-icon"  className="~w-[20px]/[24px] ~h-[20px]/[24px]" />
      <p>Login with Google</p>
    </button>
  );
};

export default GoogleLogin;
