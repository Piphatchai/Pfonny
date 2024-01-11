'use client'
import Header from "../header";
import Image from 'next/image'

export default function Courses() {


    const dataList = [{
        title: 'PRESENT TO MILLIONS',
        number: '01',
        text: `Present to Millions” is designed the essential skills and strategies needed to confidently present ideas, products, or messages to vast audiences. Focused on the power of effective communication, this class aims to transform presenters into captivating speakers capable of reaching and impacting millions.
        “Present to Millions” and master the art of impactful communication. Elevate your presentation skills, captivate audiences, and leave a lasting impression.
        `,
        img: '/images/6 Fonny.jpg'
    },
    {
        title: 'EXECUTIVE IMAGE MAKE OVER',
        number: '02',
        text: `The "Executive Image Makeover Class" is a comprehensive and targeted program designed to enhance and refine the professional presence and 
        image of individuals in executive or leadership roles. This class focuses on a holistic approach to personal branding, 
        covering aspects such as appearance, communication style, body language, the new looks with your own style to reach 
        to the goal and over all for Executive level. This class aims to empower executives to project confidence, authenticity, and a positive professional impact.
        `,
        img: '/images/6 Fonny.jpg'
    },
    {
        title: 'PRESENTATION MASTERY & BUSINESS IMAGE MAKE OVER',
        number: '03',
        text: `A transformative journey of your presentation skills and your professional image. The "Presentation Mastery & Business Image Makeover" class is a comprehensive training program designed to elevate participants' communication skills and refine their professional image.
        This class focused on combines expertise in delivering powerful presentations with a strategic emphasis on enhancing personal and business-related aesthetics.
        `,
        img: '/images/6 Fonny.jpg'
    },
    {
        title: 'DIGITAL TRANSFORMATIONFOR TOURISM BUSINESS',
        number: '04',
        text: `The "Digital Transformation for Tourism Business Class" is a strategic and hands-on program tailored for professionals in the tourism industry aiming to leverage digital technologies for business growth. This class delves into the latest trends, tools, and strategies essential for a successful digital transformation journey. Your success story starts with us—let's create a compelling digital transformation for your tourism business!"`,
        img: '/images/6 Fonny.jpg'
    },
    {
        title: 'ROAD TO TRAVEL TECH START UP',
        number: '05',
        text: `The "Road to Travel Tech Startup Class" is an immersive and strategic program designed for aspiring entrepreneurs looking to venture into the dynamic world of travel technology.
        Tourism market trends to business strategies, we guide you every step of the way. Fuel your passion for innovation and turn your travel tech dreams into reality. Your startup adventure begins here.
        `,
        img: '/images/6 Fonny.jpg'
    },

    ]


    return (



        <div className="w-full">
            <div className="w-full h-[1200px] relative">
                <div className=' bg-black bg-opacity-25 h-auto  pb-20'>
                    <Image
                        src='/images/Banner.jpg'
                        alt="thaidestinaiton"
                        width={0}
                        height={0}
                        sizes="100vw"
                        quality={100}
                        className="w-full h-auto object-cover absolute top-0"
                        priority
                    />
                    <div className='max-w-[1366px] mx-auto relative pb-20'>
                        <Header />
                        <div className='absolute top-[18rem] left-[-20px] '>
                            <div className="text-[60px] font-bold">Embrace</div>
                            <div className="text-[40px] font-bold">The power of choice</div>
                            <div className="text-xl mt-20">let your style be the voice that speaks </div>
                            <div className="text-xl mt-5">volumes about your individuality.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-[50px] font-bold">COURSES</div>
                    {dataList.map((item: any, index: number) => (
                        <div key={index} className="grid grid-cols-3 gap-12 mt-10 pb-44">
                            <div className="col-span-2">
                                <div className="font-bold text-xl">{item.title} <span className="pl-10  text-2xl">{item.number}</span></div>
                                <div className="mt-10">{item.text}</div>
                                <div className="text-end mt-10 text-blue-500">Read more...</div>
                            </div>
                            <div className="">
                                <Image
                                    src={item.img}
                                    alt="thaidestinaiton"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    quality={100}
                                    className="w-[300px] h-[300px] object-cover  "
                                    priority
                                />
                            </div>
                       
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
} 