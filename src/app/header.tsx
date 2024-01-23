'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {

  const currentPath = usePathname();
  const [showNavbar, setShowNavbar] = useState<boolean>(false)




  return (
    <div className='w-full'>
      <div className="max-w-[1366px] mx-auto Helvetica ">
        <div className="md:flex space-x-10 text-lg pt-10 font-medium justify-end text-white items-center  hidden">
          <div className="cursor-pointer"> <Link href="/" className={`${currentPath === '/' ? `text-blue-500 font-bold` : ``}`}>HOME</Link></div>
          <div className="cursor-pointer"><Link href="/about" className={`${currentPath === '/about' ? `text-blue-500 font-bold ` : ``}`}>ABOUT</Link></div>
          <div className="cursor-pointer"><Link href="/courses" className={`${currentPath === '/courses' ? `text-blue-500 font-bold` : ``}`}>COURSES</Link></div>
          <div className="cursor-pointer"><Link href="/contact" className={`${currentPath === '/contact' ? `text-blue-500 font-bold` : ``}`}>CONTACT</Link></div>
          <div className="text-blue-500 bg-white rounded-lg cursor-pointer px-4 py-1">Join us</div>
        </div>
      </div>
      <div className='block md:hidden bg-white h-14 z-50'>
        <div className='p-3' onClick={() => { setShowNavbar(!showNavbar) }}>
          <svg className="h-8 w-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className={`${showNavbar ? "opacity-100" : "opacity-0"
          } transition-opacity  duration-500 bg-white px-4 h-[200px] z-50  w-[50%] text-sm`}>
          <div className="cursor-pointer text- pt-5"> <Link href="/" className={`${currentPath === '/' ? `text-blue-500 font-bold` : ``}`}>HOME</Link></div>
          <div className="cursor-pointer mt-3"><Link href="/about" className={`${currentPath === '/about' ? `text-blue-500 font-bold ` : ``}`}>ABOUT</Link></div>
          <div className="cursor-pointer mt-3"><Link href="/courses" className={`${currentPath === '/courses' ? `text-blue-500 font-bold` : ``}`}>COURSES</Link></div>
          <div className="cursor-pointer mt-3"><Link href="/contact" className={`${currentPath === '/contact' ? `text-blue-500 font-bold` : ``}`}>CONTACT</Link></div>
          <div className="cursor-pointer mt-3">Join us</div>
        </div>
      </div>

    </div>
  )
}