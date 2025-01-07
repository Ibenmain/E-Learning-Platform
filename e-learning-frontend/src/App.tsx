import './App.css';
import Layout from './layouts/layout';
import LandingPage from './pages/landingpage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound';
import LoginForm from './pages/authe/login';
import SignupForm from './pages/authe/signup';
import ForgetPassword from './pages/authe/forgetpassword';
import VerificationCode from './pages/authe/verificationCode';

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="landingpage" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="/landingpage" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
