'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Contact() {

  useEffect(() => {
    const languageCheck = typeof localStorage !== 'undefined' ? localStorage.getItem("language") : null;
    if (languageCheck) {
      setF(languageCheck)
    } else {
      setF('EN')
    }
  })

  const [f, setF] = useState<string>('')

  const data = [{
    local: 'FaceBook',
    text: 'Dr.Fonny pitching mastery'
  }, {
    local: 'Line',
    text: 'Dr.Fonny pitching mastery'
  }, {
    local: 'Mobile',
    text: '089 1599379'
  }, {
    local: 'Email',
    text: 'Dr.Fonny pitching mastery'
  }, {
    local: 'Location',
    text: 'True Digltal Park (Unicorn)'
  },
  ]

  const ContactTh = () => {
    return (
      <div className="w-full">
        <div className="w-full bg-black h-[150px] px-4 md:px-0">
          <div className="md:max-w-[1366px] md:mx-auto ">
            <div className="text-white text-xl pt-16 md:text-2xl font-semibold didot"><Link href={'/'}>หน้าหลัก</Link></div>
          </div>
        </div>
        <div className='w-full bg-gray-600 h-[300px] '>
          <div className='max-w-[1366px] md:mx-auto px-14 md:px-0'>
            <div className='md:pl-[27rem] pt-[4.5rem] text-center text-white'>
              <div className='text-3xl md:text-[40px] didot '>ติดต่อเรา</div>
              <div className='text-2xl mt-5 md:text-[30px] kanda'>ติดต่อกับเราเพื่อสอบถามเกี่ยวกับการปรับภาพลักษณ์</div>
              <div className='text-2xl md:text-[30px] kanda'>และก้าวแรกสู่การเปลี่ยนแปลงที่ประสบความสำเร็จ</div>
            </div>
          </div>
        </div>
        <div className='md:w-full pb-20'>
          <div className='md:max-w-[1366px] mx-auto relative px-4 md:px-0'>
            <div className='md:pl-[30rem] md:pt-[4.5rem] text-center text-whit pb-20 md:pb-0'>
              {data.map((item: any, index: number) => (
                <div className='md:text-[30px] mt-10' key={index}>
                  <span className='font-bold text-xl md:text-2xl'>{item.local} : <span className=' pl-4 font-normal text-2xl kanda md:text-4xl'> {item.text}</span></span>
                </div>
              ))}

            </div>
            <div className='md:absolute top-[-6rem] md:block hidden'>
              <div className='md:relative'>
                <Image
                  src='/images/contact/Mask Group 35.png'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-[400px] h-[400px] object-cover  "
                  priority
                />
                <div className='absolute top-0 left-[-4rem]'>
                  <Image
                    src='/images/contact/Ellipse 33_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover  "
                    priority
                  />
                </div>
                <div className='absolute bottom-0 left-4'>
                  <Image
                    src='/images/contact/Ellipse 34_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover  "
                    priority
                  />
                </div>
                <div className='absolute bottom-4 right-0'>
                  <Image
                    src='/images/contact/Ellipse 37_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }



  return (
    <>
      {f === 'EN' ? (<div className="w-full">
        <div className="w-full bg-black h-[150px] px-4 md:px-0">
          <div className="md:max-w-[1366px] md:mx-auto ">
            <div className="text-white text-xl pt-16 md:text-2xl font-semibold didot"><Link href={'/'}>Home</Link></div>
          </div>
        </div>
        <div className='w-full bg-gray-600 h-[300px] '>
          <div className='max-w-[1366px] md:mx-auto px-14 md:px-0'>
            <div className='md:pl-[27rem] pt-[4.5rem] text-center text-white'>
              <div className='text-3xl md:text-[40px] didot '>CONTACT US</div>
              <div className='text-2xl mt-5 md:text-[30px] kanda'>Connect with to inquire about our Business Makeover Coaching</div>
              <div className='text-2xl md:text-[30px] kanda'>and take the first step toward a successful transformation</div>
            </div>
          </div>
        </div>
        <div className='md:w-full pb-20'>
          <div className='md:max-w-[1366px] mx-auto relative px-4 md:px-0'>
            <div className='md:pl-[30rem] md:pt-[4.5rem] text-center text-whit pb-20 md:pb-0'>
              {data.map((item: any, index: number) => (
                <div className='md:text-[30px] mt-10' key={index}>
                  <span className='font-bold text-xl md:text-2xl'>{item.local} : <span className=' pl-4 font-normal text-2xl kanda md:text-4xl'> {item.text}</span></span>
                </div>
              ))}

            </div>
            <div className='md:absolute top-[-6rem] md:block hidden'>
              <div className='md:relative'>
                <Image
                  src='/images/contact/Mask Group 35.png'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-[400px] h-[400px] object-cover  "
                  priority
                />
                <div className='absolute top-0 left-[-4rem]'>
                  <Image
                    src='/images/contact/Ellipse 33_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover  "
                    priority
                  />
                </div>
                <div className='absolute bottom-0 left-4'>
                  <Image
                    src='/images/contact/Ellipse 34_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover  "
                    priority
                  />
                </div>
                <div className='absolute bottom-4 right-0'>
                  <Image
                    src='/images/contact/Ellipse 37_0.png'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>) : (<ContactTh/>)}

    </>

  )
}