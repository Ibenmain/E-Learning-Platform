import { Icon } from "@iconify/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useState } from "react"
import { useAuth } from "../../context/AutheContext"

const Dropdown = () => {
    const { isAuthenticated, logout } = useAuth()
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-[#9FEF00] flex items-center gap-4 rounded-[3px]">
        <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)} >
            <DropdownMenuTrigger >
            {!open ? <Icon icon="ic:baseline-arrow-drop-up" width={33} height={33} /> : <Icon icon="ic:baseline-arrow-drop-down" width={33} height={33} />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-semibold text-black dark:text-white space-y-1">
            <DropdownMenuItem className="flex justify-center items-center font-semibold ">
                Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center items-center">
                Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center items-center text-red-800 ">
                {isAuthenticated && <button onClick={logout} className="px-4 py-2">Logout</button>}
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}

export default Dropdown
