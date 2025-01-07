import { Icon } from '@iconify/react'
import { useTheme } from "next-themes"
import Dropdown from '../dropdown/DropdownMenu'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const navigate = useNavigate()
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
                    <button>
                        <Icon icon="material-symbols:language" width={33} height={33} />
                    </button>
                    {false ? (
                        <>
                            <span className='text-sm font-medium'>Welcome, issam</span>
                            <button
                                className='h-8 w-32 font-sans rounded-[2px] bg-red-600 text-white'
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button className='h-8 w-32 size-4 font-sans rounded-[2px]  bg-black dark:bg-[#212A34] text-white ' onClick={() => navigate('/login')}>Login</button>
                            <button className='h-8 w-32 font-sans rounded-[2px] bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] text-black ' onClick={() => navigate('/landingpage')}>Get started</button>
                        </>
                    )}
                </div>
                <div className='sm:hidden block'>
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Navbar
