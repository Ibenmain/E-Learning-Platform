import React from 'react'
import { useLocation } from 'react-router'

const PrivateNavbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const linkClasses = (path: string) =>
    `hover:underline font-semibold text-[20px] leading-[32px] tracking-[-0.006em] align-middle font-plus-jakarta ${
      currentPath === path
        ? 'text-[#9FEF00]'
        : 'text-black dark:text-white'
    }`

  return (
    <nav className="fixed w-full z-50 top-[56px] px-10 bg-white  dark:bg-black/40 backdrop-blur-md py-3">
      <div className="flex space-x-4">
        <a href="/home" className={linkClasses("/home")}>Home</a>
        <a href="/my-learning" className={linkClasses("/my-learning")}>My Learning</a>
        <a href="/careers" className={linkClasses("/careers")}>Careers</a>
        <a href="/profile" className={linkClasses("/profile")}>Profile</a>
      </div>
    </nav>
  )
}

export default PrivateNavbar
