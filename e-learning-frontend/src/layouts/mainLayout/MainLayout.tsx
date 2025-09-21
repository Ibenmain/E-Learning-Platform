import React from 'react';
import { ThemeProvider } from '../../components/themeProvider/theme-provider';
import { useAuth } from '../../context/AutheContext';
import PublicNavbar from '../../components/publicNavbar/PublicNavbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
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

export default MainLayout;
