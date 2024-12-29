import Navbar from "../components/navbar/NavBar";
import { ThemeProvider } from "../components/themeProvider/theme-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
    // const location = useLocation();
    // const noNavbarRoutes = ["/notfound", ""];
    // const hideNavbar = noNavbarRoutes.includes(location.pathname);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default Layout;
