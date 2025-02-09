import Question from "./components/commonQuestion/Question"
import Features from "./components/features/Features"
import HeroSection from "./components/heroSection/HeroSection"
import Potential from "./components/potential/Potential"
import Footer from "./components/footer/Footer"
import { useAuth } from "../../context/AutheContext"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const LandingPage = () => {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    } , [isAuthenticated, navigate]);

  return (
    <div className="scrollbar-hidden">
      <HeroSection />
      <div className='container mx-auto '>
        <Features />
        <Potential />
        <Question />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
