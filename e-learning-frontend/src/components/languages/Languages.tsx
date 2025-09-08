import { Icon } from '@iconify/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"


const Languages = () => {
  return (
    <DropdownMenu  >
            <DropdownMenuTrigger >
            <Icon icon="material-symbols:language" width={33} height={33} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-semibold text-black dark:text-white space-y-1">
            <DropdownMenuItem className="flex justify-center items-center font-semibold ">
                English
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center items-center">
                French
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center items-center  ">
                Arabic
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
)
}

export default Languages
