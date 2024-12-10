import { Icon } from "@iconify/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const Dropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {/* menu */}
                <Icon icon="bx:bx-menu" width={33} height={33} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem className="flex justify-center items-center">
                    {/* login */}
                    <button className='h-8 w-20 size-4 font-sans rounded-[4px]  bg-black dark:bg-[#212A34] text-white text-xs'>Login</button>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-center items-center">
                    {/* get start */}
                    <button className='h-8 w-20 font-sans rounded-[4px] bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] text-black text-xs'>Get started</button>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-center items-center">
                    {/* theme */}
                    <p className=" flex justify-center items-center h-8 w-20 font-sans rounded-[4px] text-black text-xs border">
                        dark mode
                    </p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-center items-center">
                    {/* language */}
                    <Icon icon="material-symbols:language" width={33} height={33} />
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown
