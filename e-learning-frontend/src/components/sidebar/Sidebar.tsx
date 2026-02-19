import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Sidebar = ({
    collapsed,
    setCollapsed,
}: {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}) => {
    return (
        <aside
            className={`${collapsed ? "w-16" : "w-64"
                } bg-[#f5f5f5] dark:bg-[#212A34]  transition-all duration-300 flex flex-col fixed h-full`}
        >
            {/* Toggle button */}
            <button
                aria-label="Toggle sidebar"
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 self-end text-black hover:text-white dark:text-white hover:bg-slate-700 rounded-md m-2"
            >
                <Icon
                    icon={collapsed ? "mdi:chevron-right" : "mdi:chevron-left"}
                    width="24"
                    height="24"
                />
            </button>

            {/* Navigation */}
            <nav className="flex flex-col space-y-2">
                <NavLink
                    to="motion-planning"
                    className={({ isActive }) =>
                        `${collapsed ? "justify-center" : "justify-start"} flex items-center p-2 rounded-md transition-colors ${isActive
                            ? "bg-[#9FEF00] bg-opacity-80 text-white"
                            : "hover:bg-slate-700 hover:text-white text-black dark:text-white "
                        }`
                    }
                >
                    <Icon icon="mdi:map-marker-path" width="20" />
                    <span
                        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                            }`}
                    >
                        Motion Planning
                    </span>
                </NavLink>

                <NavLink
                    to="robotics"
                    className={({ isActive }) =>
                        `${collapsed ? "justify-center" : "justify-start"} flex items-center p-2 rounded-md transition-colors ${isActive
                            ? "bg-[#9FEF00] bg-opacity-80 text-white"
                            : "hover:bg-slate-700 hover:text-white text-black dark:text-white "
                        }`
                    }
                >
                    <Icon icon="mdi:robot" width="20" />
                    <span
                        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                            }`}
                    >
                        Robotics
                    </span>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;