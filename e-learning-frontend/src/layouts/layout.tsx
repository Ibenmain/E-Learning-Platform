import PublicNavbar from "../components/publicNavbar/PublicNavbar";
import { ThemeProvider } from "../components/themeProvider/theme-provider";
import { useAuth } from "../context/AutheContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex flex-col h-screen">

                <PublicNavbar />
                <main className={`flex-1 overflow-auto ${isAuthenticated ? 'pt-[120px]' : ''}`}>{children}</main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
