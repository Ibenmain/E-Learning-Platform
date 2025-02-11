import './App.css';
import Layout from './layouts/layout';
import LandingPage from './pages/landingpage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound';
import LoginForm from './pages/authe/login';
import SignupForm from './pages/authe/signup';
import ForgetPassword from './pages/authe/forgetpassword';
import VerificationCode from './pages/authe/verificationCode';
import { useAuth } from './context/AutheContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage" />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/home" element={<ProtectedRoute><h1 className='text-black flex justify-center items-center h-screen'>Home</h1></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><h1 className='text-black flex justify-center items-center h-screen'>Profile</h1></ProtectedRoute>} />
        <Route path="/learning" element={<ProtectedRoute><h1 className='text-black flex justify-center items-center h-screen'>My Learning</h1></ProtectedRoute>} />
        <Route path="/careers" element={<ProtectedRoute><h1 className='text-black flex justify-center items-center h-screen'>Careers</h1></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
