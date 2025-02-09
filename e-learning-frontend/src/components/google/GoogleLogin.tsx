import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      axios.post('http://localhost:8000/api/authe/google/', {
        access_token: tokenResponse.access_token,
      }).then(response => {
        console.log(JSON.stringify(response.data));
      }).catch(error => {
        console.error(error);
      });
    },
  });

  return (
    <button onClick={() => login()}>
      Login with Google
    </button>
  );
};

export default GoogleLogin;
