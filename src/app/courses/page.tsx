'use client'
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {

    useEffect(() => {
        const languageCheck = typeof localStorage !== 'undefined' ? localStorage.getItem("language") : null;
        if (languageCheck) {
            setF(languageCheck)
        } else {
            setF('EN')
        }
    })



    const [f, setF] = useState<string>('')


    const dataList = [
        {
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

    const dataListTh = [
        {
            title: 'การนำเสนองานสู่รายได้หลักล้าน',
            number: '01',
            text: `Present to Millions” ได้รับการออกแบบทักษะและกลยุทธ์ที่จำเป็นในการนำเสนอแนวคิด  หรือโครงการแก่ผู้ชมจำนวนมากอย่างมั่นใจ หลักสูตรนี้มุ่งเน้นไปที่พลังของการสื่อสารที่มีประสิทธิภาพ โดยมีเป้าหมายเพื่อเปลี่ยนให้ผู้นำเสนอกลายเป็นวิทยากรที่น่าดึงดูดซึ่งสามารถเข้าถึงและสร้างผลกระทบกับคนจำนวนมาก
        “วิธีการนำเสนอสู่รายได้หลักล้าน” ย่อมต้องมีความเชี่ยวชาญศิลปะแห่งการสื่อสารที่มีประสิทธิภาพ ยกระดับทักษะการนำเสนอของคุณ ดึงดูดผู้ชม และสร้างความประทับใจที่น่าจดจำ`,
            img: '/images/courses/01-1.jpg'
        },
        {
            title: 'ปรับภาพลักษณ์สไตล์ผู้บริหาร',
            number: '02',
            text: `เป็นโปรแกรมที่ครอบคลุมและตรงเป้าหมาย ซึ่งออกแบบมาเพื่อปรับปรุงและปรับแต่งการแสดงตนและภาพลักษณ์ระดับมืออาชีพ เน้นแนวทางการปรับลุคส่วนบุคคลแบบองค์รวมให้ดูดีขึ้นในทันที ครอบคลุมประเด็นต่างๆ เช่น รูปลักษณ์ รูปแบบการสื่อสาร ภาษากาย รูปลักษณ์ใหม่ด้วยสไตล์ของคุณเองเพื่อให้บรรลุเป้าหมาย และเพิ่มศักยภาพในการนำเสนอความมั่นใจ ความถูกต้อง และผลกระทบเชิงบวกทางวิชาชีพ`,
            img: '/images/courses/02-1.jpg'
        },
        {
            title: 'ทักษะการนำเสนอและการปรับภาพลักษณ์',
            number: '03',
            text: `หลักสูตร “Presentation Mastery” เป็นการเรียนรู้ทักษะในการนำเสนออย่างมีความเชี่ยวชาญ ที่ช่วยเสริมสร้างความเชื่อมั่นและมีผลส่งเสริมการสื่อสารอย่างมีประสิทธิภาพในการนำเสนอข้อมูลหรือไอเดียของคุณ ในที่เดียวกัน, “Business Image Makeover” เน้นการพัฒนาภาพลักษณะธุรกิจที่มีความมั่นใจและมีคุณค่า ซึ่งช่วยเสริมสร้างภาพลักษณะ
            ที่น่าเชื่อถือและทันสมัย มีการปรับแต่งมุมมองในธุรกิจของคุณเพื่อให้เข้ากับแนวโน้มและความเปลี่ยนแปลงในวงการปัจจุบัน ทั้งสองหลักสูตรนี้จะช่วยให้คุณเติบโตทั้งในด้านทักษะการนำเสนอและมีภาพลักษณะธุรกิจที่ทันสมัยและโดดเด่นในตลาดที่แข็งแกร่งในปัจจุบัน`,
            img: '/images/courses/03-1.jpg'
        },
    ]

    const CoursesTh = () => {
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
                                <div className="text-[40px] font-bold didot">พลังความตั้งใจและมุ่งมั่น</div>
                                <div className="text-[30px]  didot">สามารถสร้างสรรค์ชีวิตคุณ</div>
                                <div className="text-3xl mt-10 md:mt-20 kanda">ให้ลักษณะท่าทางหรือวิธีการที่คุณแตกต่างออกไป</div>
                                <div className="text-3xl mt-5 kanda">เป็นเสียงที่แสดงถึงบุคลิกของคุณอย่างเต็มที่.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="max-w-[1000px] mx-auto mt-16 px-4 md:px-0">
                        <div className="text-4xl md:text-[50px] font-bold pt-10  md:pt-0 didot">หลักสูตร</div>
                        {dataListTh.map((item: any, index: number) => (
                            <Link href={`/courses/courses${index + 1}`} key={index}>
                                <div className="grid md:grid-cols-2 gap-14 mt-10 pb-10 md:pb-44">
                                    <div className="text-xl">
                                        <div className="font-bold kanda text-3xl">{item.title} <span className="pl-5 md:pl-10  text-2xl didot">{item.number}</span></div>
                                        <div className="mt-10  kanda text-3xl">{item.text}</div>
                                        <div className="text-end mt-5 text-blue-500 kanda">อ่านต่อ...</div>
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



    return (

        <>
            {f === 'EN' ? <div className="w-full">
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
            </div> : (
                <CoursesTh />
            )}

        </>




    )
} 