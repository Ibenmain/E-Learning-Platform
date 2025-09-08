import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Automatically close the dropdown on window resize if > 640px (Tailwind's sm breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };

    // Close immediately on mount if window is already large
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <Icon icon="bx:bx-menu" width={33} height={33} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-medium">
          <DropdownMenuItem className="flex justify-center items-center">
            <button onClick={() => {navigate('/signin')}} className="h-8 w-20 font-sans rounded-[4px] bg-black dark:bg-[#212A34] text-white text-xs">
              Login
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <button onClick={() => {navigate('/landingpage')}} className="h-8 w-20 font-sans rounded-[4px] bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] text-black text-xs">
              Get started
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <button
              className="flex justify-center items-center h-8 w-20 font-sans rounded-[4px] text-black dark:text-white text-xs border"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "light" : "dark"} mode
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <Icon icon="material-symbols:language" width={33} height={33} />
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;
