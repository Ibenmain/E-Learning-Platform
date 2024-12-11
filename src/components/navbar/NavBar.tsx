import { Icon } from '@iconify/react'
import { useTheme } from "next-themes"
import Dropdown from '../dropdown/DropdownMenu'

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <div className=' items-center justify-between h-14 p-2 sm:flex hidden'>
                <div>
                    {theme === "dark" ?
                        <img src="images/logo-dark.png" alt="logo not found" className='w-28 ' />
                        :
                        <img src="images/logo-light.png" alt="logo not found" className='w-28 ' />
                    }
                </div>
                <div className='flex items-center gap-4 '>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Icon icon="proicons:dark-theme" width={33} height={33} />
                    </button>
                    <button>
                        <Icon icon="material-symbols:language" width={33} height={33} />
                    </button>
                    <button className='h-8 w-32 size-4 font-sans rounded-[2px]  bg-black dark:bg-[#212A34] text-white '>Login</button>
                    <button className='h-8 w-32 font-sans rounded-[2px] bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] text-black '>Get started</button>
                </div>
            </div>
            <div className='flex items-center justify-between h-10 p-2 sm:hidden'>
                <div>
                    {theme === "dark" ?
                        <img src="images/logo-dark.png" alt="logo not found" className='w-16 ' />
                        :
                        <img src="images/logo-light.png" alt="logo not found" className='w-16 ' />
                    }
                </div>
                <div >
                    <Dropdown />
                </div>

            </div>
        </>
    )
}

export default Navbar