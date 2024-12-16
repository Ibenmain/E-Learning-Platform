import { useTheme } from 'next-themes';
import React from 'react';

const NotFound = () => {
    const { theme } = useTheme();
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-center py-16 ">
            <div className="mb-8">
                {theme === 'dark' ? (
                    <img src="/images/logo-dark.png" alt="logo not found" className="w-28" />
                ) : (
                    <img src="/images/logo-light.png" alt="logo not found" className="w-28" />
                )}
            </div>

            <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The page you are looking for does not exist.
            </p>

            <a href="/" className="text-lg font-semibold text-white bg-gradient-to-tr from-[#9FEF00] to-[#03FF89] py-2 px-6 rounded-lg hover:bg-gradient-to-tl transition-all">
                Go to Homepage
            </a>
        </div>
    );
};

export default NotFound;
