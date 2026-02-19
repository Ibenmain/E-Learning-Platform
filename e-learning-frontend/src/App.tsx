import './App.css';
import LandingPage from './pages/landingpage/LandingPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound/NotFound';
import LoginForm from './pages/authe/signin/signin';
import SignupForm from './pages/authe/signup/Signup';
import ForgetPassword from './pages/authe/forgetpassword/ForgetPassword';
import VerificationCode from './pages/authe/verificationCode/VerificationCode';
import { ProtectedRoute } from './context/ProtectedRoute';
import GithubCallback from './pages/authe/github/callback';
import Home from './pages/home/home';
import Profile from './pages/profile/Profile';
import Careers from './pages/careers/Careers';
import Settings from './pages/settings/Settings'
import CountDown from './pages/countDown/CountDown';
import MyLearningLayout from './layouts/myLearningLayout/MyLearningLayout';
import MainLayout from './layouts/mainLayout/MainLayout';
import MyLearning from './pages/myLearning/MyLearning';
import MotionPlanning from './pages/course/motion-plainning/MotionPlaninng';
import Robotics from './pages/course/robotics/Robotics';

function App() {
  return (
    <MainLayout>
      <Routes >
        <Route path="/" element={<Navigate to="/landingpage" />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/my-learning" element={<ProtectedRoute><MyLearning /></ProtectedRoute>} />
        <Route path="/careers" element={<ProtectedRoute><Careers /></ProtectedRoute>} />
        <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path='/count-down' element={<ProtectedRoute><CountDown /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/github/callback" element={<GithubCallback />} />
        <Route path='/course' element={<ProtectedRoute><MyLearningLayout /></ProtectedRoute>}>
          <Route path='/course/motion-planning' element={<ProtectedRoute><MotionPlanning /></ProtectedRoute>} />
          <Route path='/course/robotics' element={<ProtectedRoute><Robotics /></ProtectedRoute>} />
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
