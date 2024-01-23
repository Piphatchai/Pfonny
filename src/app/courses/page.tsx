'use client'
import Footer from "../footer";
import Header from "../header";
import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {


    const dataList = [{
        title: 'PRESENT TO MILLIONS',
        number: '01',
        text: `Present to Millions” is designed the essential skills and strategies needed to confidently present ideas, products, or messages to vast audiences. Focused on the power of effective communication, this class aims to transform presenters into captivating speakers capable of reaching and
        `,
        img: '/images/courses/01-1.jpg'
    },
    {
        title: 'EXECUTIVE IMAGE MAKE OVER',
        number: '02',
        text: `The "Executive Image Makeover Class" is a comprehensive and targeted program designed to enhance and refine the professional presence and 
        image of individuals in executive or leadership roles. This class focuses on a holistic approach to personal branding, 
        covering aspects such as
        `,
        img: '/images/courses/02-1.jpg'
    },
    {
        title: 'PRESENTATION MASTERY & BUSINESS IMAGE MAKE OVER',
        number: '03',
        text: `A transformative journey of your presentation skills and your professional image. The "Presentation Mastery & Business Image Makeover" class is a comprehensive training program designed to elevate participants' communication skills and refine their professional image.
        
        `,
        img: '/images/courses/03-1.jpg'
    },


    ]


    return (



        <div className="w-full">
            <div className="w-full h-[1100px] relative">
                <div className=' bg-black bg-opacity-25 h-auto  pb-20'>
                    <Image
                        src='/images/Banner.jpg'
                        alt="thaidestinaiton"
                        width={0}
                        height={0}
                        sizes="100vw"
                        quality={100}
                        className="w-full h-[800px] md:h-[1100px] object-cover absolute top-0"
                        priority
                    />
                    <div className='relative z-50'><Header /></div>
                    <div className='max-w-[1366px] mx-auto relative pb-20 px-4 md:px-0'>
                        <div className='absolute top-[50rem] md:top-[18rem] md:left-[-20px] '>
                            <div className="text-[80px] font-bold didot">Embrace</div>
                            <div className="text-[45px]  didot">The power of choice</div>
                            <div className="text-3xl mt-10 md:mt-20 kanda">let your style be the voice that speaks </div>
                            <div className="text-3xl mt-5 kanda">volumes about your individuality.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="max-w-[1000px] mx-auto mt-16 px-4 md:px-0">
                    <div className="text-4xl md:text-[50px] font-bold pt-10  md:pt-0 didot">COURSES</div>
                    {dataList.map((item: any, index: number) => (
                        <Link href={`/courses/courses${index + 1}`} key={index}>
                            <div className="grid md:grid-cols-2 gap-14 mt-10 pb-10 md:pb-44">
                                <div className="text-xl">
                                    <div className="font-bold kanda text-3xl">{item.title} <span className="pl-5 md:pl-10  text-2xl didot">{item.number}</span></div>
                                    <div className="mt-10  kanda text-3xl">{item.text}</div>
                                    <div className="text-end mt-5 text-blue-500 kanda">Read more...</div>
                                </div>
                                <div className="">
                                    <Image
                                        src={item.img}
                                        alt="thaidestinaiton"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        quality={100}
                                        className="w-full h-auto object-cover  "
                                        priority
                                    />
                                </div>
                            </div>  </Link>
                    ))}
                </div>
            </div>
            <div className='bg-black text-white pt-20 pb-20 relative'>
                <div className='w-full bg-black absolute top-0  opacity-75 z-10'></div>
                <Footer />
            </div>
        </div>


    )
} 