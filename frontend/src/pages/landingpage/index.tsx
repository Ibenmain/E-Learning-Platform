import { Contact } from "lucide-react"
import Question from "./components/commonQuestion/Question"
import Features from "./components/features/Features"
import HeroSection from "./components/heroSection/HeroSection"
import Potential from "./components/potential/Potential"
import Footer from "./components/footer/Footer"

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className='container mx-auto'>
        <Features />
        <Potential />
        <Question />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage