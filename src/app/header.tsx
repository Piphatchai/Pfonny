'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {

  useEffect(() => {
    const languageCheck = typeof localStorage !== 'undefined' ? localStorage.getItem("language") : null;
    if(languageCheck) {
      setF(languageCheck)
    }else{
      localStorage.setItem("language", 'EN');
      setF('EN')
    }

  }, [])

  const currentPath = usePathname();
  const [showNavbar, setShowNavbar] = useState<boolean>(false)

  const [showLanguage, setShowLanguage] = useState<boolean>(false)
  const [f,setF] = useState<string>('')

  const changeLanguage = (e: string) => {
    localStorage.setItem("language", e);
    window.location.reload();
  }

  return (
    <>
      {f === 'EN' ?
        <div className='w-full'>
          <div className="max-w-[1366px] mx-auto Helvetica px-4">
            <div className="md:flex space-x-10 text-lg pt-10 font-medium justify-end text-white items-center  hidden">
              <div className="cursor-pointer"> <Link href="/" className={`${currentPath === '/' ? `text-blue-500 font-bold` : ``}`}>HOME</Link></div>
              <div className="cursor-pointer"><Link href="/about" className={`${currentPath === '/about' ? `text-blue-500 font-bold ` : ``}`}>ABOUT</Link></div>
              <div className="cursor-pointer"><Link href="/courses" className={`${currentPath === '/courses' ? `text-blue-500 font-bold` : ``}`}>COURSES</Link></div>
              <div className="cursor-pointer"><Link href="/contact" className={`${currentPath === '/contact' ? `text-blue-500 font-bold` : ``}`}>CONTACT</Link></div>
              <div className="text-blue-500 bg-white rounded-lg cursor-pointer px-4 py-1">Join us</div>
              <div className='relative' onClick={() => { setShowLanguage(!showLanguage) }}>
                <div className='flex space-x-3 items-center cursor-pointer'><svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                  <span>{f}</span>
                </div>
                <div className={`${showLanguage ? "opacity-100" : "opacity-0"} bg-white text-black  rounded-lg pb-5 cursor-pointer transition-opacity  
              duration-500 w-24 items-center flex flex-col absolute top-10`}>
                  <div className='pt-5 hover:text-blue-500' onClick={() => { changeLanguage('EN') }}>EN</div>
                  <div className='pt-5 hover:text-blue-500' onClick={() => { changeLanguage('TH') }}>TH</div>
                </div>
              </div>
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

        </div> : (
          <div className='w-full'>
            <div className="max-w-[1366px] mx-auto Helvetica px-4">
              <div className="md:flex space-x-10 text-lg pt-10 font-medium justify-end text-white items-center  hidden">
                <div className="cursor-pointer"> <Link href="/" className={`${currentPath === '/' ? `text-blue-500 font-bold` : ``}`}>หน้าหลัก</Link></div>
                <div className="cursor-pointer"><Link href="/about" className={`${currentPath === '/about' ? `text-blue-500 font-bold ` : ``}`}>เกี่ยวกับ</Link></div>
                <div className="cursor-pointer"><Link href="/courses" className={`${currentPath === '/courses' ? `text-blue-500 font-bold` : ``}`}>คอร์ส</Link></div>
                <div className="cursor-pointer"><Link href="/contact" className={`${currentPath === '/contact' ? `text-blue-500 font-bold` : ``}`}>ติดต่อ</Link></div>
                <div className="text-blue-500 bg-white rounded-lg cursor-pointer px-4 py-1">เข้าร่วมกับเรา</div>
                <div className='relative' onClick={() => { setShowLanguage(!showLanguage) }}>
                  <div className='flex space-x-3 items-center cursor-pointer'><svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />
                    <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                    <span>{f}</span>
                  </div>
                  <div className={`${showLanguage ? "opacity-100" : "opacity-0"} bg-white text-black  rounded-lg pb-5 cursor-pointer transition-opacity  
                   duration-500 w-24 items-center flex flex-col absolute top-10`}>
                    <div className='pt-5 hover:text-blue-500' onClick={() => { changeLanguage('EN') }}>EN</div>
                    <div className='pt-5 hover:text-blue-500' onClick={() => { changeLanguage('TH') }}>TH</div>
                  </div>
                </div>
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

        )}
    </>


  )
}