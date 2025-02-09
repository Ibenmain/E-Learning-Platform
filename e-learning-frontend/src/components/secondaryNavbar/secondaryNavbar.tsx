import { Icon } from '@iconify/react'
import { useTheme } from "next-themes"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropMenu/DropMenu'
import Languages from '../languages/Languages'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    // const navigate = useNavigate()
    const path = window.location.pathname
    const isAuth = path === '/landingpage' ? true : false

    return (
        <div className={` ${isAuth ? 'sticky' : 'fixed'} w-full bg-white dark:bg-black z-10`}>
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
                <img src="images/ibenmain.jpg" alt="" className='rounded-full w-11 h-11 border-2 border-[#9FEF00]'/>
                <p className='font-medium'>ibenmain</p>
                <Dropdown />
                </div>
                {/* <div className='sm:hidden block'>
                    <Dropdown />
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
