import { Icon } from '@iconify/react'
import { useTheme } from "next-themes"
import { useNavigate } from 'react-router-dom'
import Languages from '../languages/Languages'
import { useAuth } from '../../context/AutheContext'
import Dropdown from '../dropMenu/DropMenu'
import MobileNavbar from '../mobileNavbar/MobileNavbar'

const PublicNavbar = () => {
    const { theme, setTheme } = useTheme()
    const navigate = useNavigate()
    const path = window.location.pathname
    // const isAuth = path === '/landingpage' ? true : false
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? (
        // ${isAuth  ? 'sticky top-0' : 'fixed'}
        <div className={` fixed w-full bg-white dark:bg-[#212A34] z-20 top-0`}>
            <div className='items-center justify-between h-14 p-2 flex'>
                <div>
                    {theme === "dark" ?
                        <img src="images/logo-dark.png" alt="logo not found" className='w-20 ' />
                        :
                        <img src="images/logo-light.png" alt="logo not found" className='w-20 ' />
                    }
                </div>
                <div className='hidden sm:flex items-center gap-4 '>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Icon icon="proicons:dark-theme" width={33} height={33} />
                    </button>
                    <Languages />
                    <img src="images/ibenmain.jpg" alt="" className='rounded-full w-11 h-11 border-2 border-[#9FEF00]' />
                    <span className='font-semibold text-[20px] leading-[32px] tracking-[-0.006em] align-middle font-plus-jakarta'>ibenmain</span>
                    <Dropdown />
                </div>
            </div>
        </div>
    ) : (
        <div className={` fixed w-full bg-white dark:bg-[#212A34] top-0 z-10 flex flex-row justify-between items-center `}>
            <div className='items-center justify-between h-14 p-2 flex w-full'>
                <div>
                    {theme === "dark" ?
                        <img src="images/logo-dark.png" alt="logo not found" className='w-20 ' />
                        :
                        <img src="images/logo-light.png" alt="logo not found" className='w-20 ' />
                    }
                </div>
                <div className='hidden sm:flex items-center gap-4 '>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Icon icon="proicons:dark-theme" width={33} height={33} />
                    </button>
                    <Languages />
                    <button className='h-8 w-32 size-4 font-sans rounded-[2px]  bg-black dark:bg-[#212A34] text-white ' onClick={() => navigate('/signin')}>Login</button>
                    <button className='h-8 w-32 font-sans rounded-[2px] bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] text-black ' onClick={() => navigate('/landingpage')}>Get started</button>
                </div>
            </div>
            <div className='sm:hidden flex items-center justify-center'>
                <MobileNavbar />
            </div>
        </div>

    )
}

export default PublicNavbar
