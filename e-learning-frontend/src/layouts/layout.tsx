import Navbar from "../components/primaryNavbar/primaryNavbar";
import Navbar2 from "../components/secondaryNavbar/secondaryNavbar";
import { ThemeProvider } from "../components/themeProvider/theme-provider";
import { useAuth } from "../context/AutheContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    // const location = useLocation();
    // const noNavbarRoutes = ["/notfound", ""];
    // const hideNavbar = noNavbarRoutes.includes(location.pathname);
    const {isAuthenticated} = useAuth();

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {isAuthenticated ? <Navbar2 /> : <Navbar />}
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default Layout;
