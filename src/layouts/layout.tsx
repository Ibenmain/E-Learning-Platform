import Navbar from "../components/navbar/NavBar";
import { ThemeProvider } from "../components/themeProvider/theme-provider";


const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main>{children}</main>
        </ThemeProvider>
    </>
);

export default Layout;