'use client'
import Header from "@/app/header";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Courses1() {

  const router = useRouter()


  useEffect(() => {
    const languageCheck = typeof localStorage !== 'undefined' ? localStorage.getItem("language") : null;
    if (languageCheck) {
      setF(languageCheck)
    } else {
      setF('EN')
    }
  })



  const [f, setF] = useState<string>('')

  const mockInstruclors = [
    '• Understanding the Story : Understand the type of work you want to present. Creating an understanding of audience needs',
    '• Planning and creating content : Systematic presentation planning. Creating meaningful and interesting content',
    '• Time management and communication : Planning a presentation for a specified period of time Using presentation techniques to capture attention',
    '• Managing questions and concerns : Answering questions confidently and clearly. Dealing with doubts and disagreements',
    '• Promoting the value and efficiency of work : Emphasizing the value and quality of the work. Providing information and offers that can convince the audience',
    '• Promoting benefits from work : Analysis of work impact. Creating a marketing and communications plan Tracking performance and receiving feedback',
    `• Developing future presentation skills : Checking and improving one's abilities. Understanding trends in presentations Developing presentation skills
    `,

  ]

  const mockInstruclorsTh = [
    `• เข้าใจเรื่องราว : เข้าใจประเภทงานที่คุณต้องการนำเสนอ การสร้างความเข้าใจในความต้องการของผู้ชม`,
    `• การวางแผนและการสร้างเนื้อหา : การวางแผนการนำเสนออย่างเป็นระบบ การสร้างเนื้อหาที่มีความหมายและน่าสนใจ`,
    `• ทักษะการนำเสนอ : การใช้ภาษาที่เข้าใจง่าย สร้างประสบการณ์การนำเสนอที่น่าจดจำ`,
    `• การบริหารเวลาและการสื่อสาร : การวางแผนการนำเสนอตามระยะเวลาที่กำหนด
    การใช้เทคนิคการนำเสนอเพื่อดึงดูดความสนใจ
    `,
    `• การจัดการคำถามและข้อกังวล : ตอบคำถามอย่างมั่นใจและชัดเจน การจัดการกับข้อสงสัยและความขัดแย้ง`,
    `• การส่งเสริมคุณค่าและประสิทธิภาพของงาน : เน้นคุณค่าและคุณภาพของงาน การให้ข้อมูลและข้อเสนอที่สามารถโน้มน้าวใจผู้ชมได้`,
    `• การส่งเสริมผลประโยชน์จากการทำงาน : การวิเคราะห์ผลกระทบต่องาน การสร้างแผนการตลาดและการสื่อสาร ติดตามประสิทธิภาพและรับข้อเสนอแนะ`,
    `• การพัฒนาทักษะการนำเสนอในอนาคต : การตรวจสอบและพัฒนาความสามารถของตนเอง ทำความเข้าใจแนวโน้มในการนำเสนอ การพัฒนาทักษะการนำเสนอ`,
  ]

  const selectCouese = (e: any) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "COURSES1":
        router.push('/courses/courses1')
        break;
      case "COURSES2":
        router.push('/courses/courses2')
        break;
      case "COURSES3":
        router.push('/courses/courses3')
        break;
      case "COURSES4":
        router.push('/courses/courses4')
        break;
      case "COURSES5":
        router.push('/courses/courses5')
        break;
    }
  }

  const Courses1 = () => {
    return (
      <div className="w-full">
        <div className="w-full h-[150px] bg-black">
          <div className='relative z-50'><Header /></div>
        </div>
        <div className="w-full h-[250px] bg-gray-700">
          <div className="max-w-[1366px] mx-auto">
            <div className="text-center text-white pt-20">
              <div className="text-[40px]">หลักสูตรการเรียน</div>
              <div className="text-[21px] mt-3">ข้อมูลเชิงลึกที่จะทำให้คุณเปลี่ยนไปโดยสิ้นเชิง</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-auto pb-20">
          <div className="max-w-[1366px] mx-auto">
            <div className="flex pt-10">
              <select className="text-[30px] bg-slate-100" onChange={selectCouese} >
                <option value="">COURSES 1</option>
                <option value="COURSES2">COURSES 2</option>
                <option value="COURSES3">COURSES 3</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 01.jpg'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-full h-auto object-cover  "
                  priority
                />
              </div>
              <div className="2">
                <div className="text-[30px] mt-5 didot">วิธีการนำเสนอเพื่อเงินล้าน</div>
                <div className="md:mt-20 kanda">
                  <div className="text-[30px]">12</div>
                  <div className="text-[30px] mt-5">Hrs.</div>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 px-4 md:px-0">
              <div className="text-2xl md:text-[34px] font-bold didot">เกี่ยวกับหลักสูตร</div>
              <div className="text-2xl md:text-3xl text- mt-10 kanda">
                <span className="text-2xl md:text-3xl font-bold pr-3 leading-10 kanda">"Present to Millons"</span>
                ได้รับการออกแบบทักษะและกลยุทธ์ที่จำเป็นในการนำเสนอแนวคิด  หรือโครงการแก่ผู้ชมจำนวนมากอย่างมั่นใจ หลักสูตรนี้มุ่งเน้นไปที่พลังของการสื่อสารที่มีประสิทธิภาพ โดยมีเป้าหมายเพื่อเปลี่ยนให้ผู้นำเสนอกลายเป็นวิทยากรที่น่าดึงดูดซึ่งสามารถเข้าถึงและสร้างผลความประทับใจให้กับคนจำนวนมาก
              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                <span className="text-2xl md:text-3xl font-bold pr-3 kanda">"วิธีการนำเสนอเพื่อเงินล้าน"</span>
               ย่อมต้องมีความเชี่ยวชาญศิลปะแห่งการสื่อสารที่มีประสิทธิภาพ ยกระดับทักษะการนำเสนอของคุณ ดึงดูดผู้ชม และสร้างความประทับใจไม่รู้ลืม
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-4xl didot">โครงสร้างหลักสูตร Private</div>
                {mockInstruclorsTh.map((item: any, index: number) => (
                  <div key={index} className="mt-10 text-2xl md:text-3xl kanda">{item}</div>
                ))}
              </div>
              <div className="bg-white mt-24 pb-20 px-4 ">
                <div className="text-center underline pt-5 pb-10 text-5xl  didot">Price</div>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
                  <div className="1 mt-16 md:mt-0">
                    <div className="didot text-3xl md:text-4xl">Private Coaching</div>
                    <div className="flex  mt-5">
                      <div className="kanda text-2xl md:text-3xl  ">From</div>
                      <div>
                        <div className="pl-5 text-gray-400 text-3xl line-through">125,000 Baht</div>
                        <div className="pl-5 mt-5 text-4xl kanda text-blue-500">89,000 Baht</div>
                      </div>

                    </div>
                  </div>
                  <div className="2 mt-24 md:mt-0">
                    <div className="didot text-3xl  md:text-4xl">Online Learning</div>
                    <div className="flex  mt-5">
                      <div className="kanda text-2xl md:text-3xl">From</div>
                      <div>
                        <div className="pl-5 text-gray-400 text-3xl line-through">125,000 Baht</div>
                        <div className="pl-5 mt-5 text-4xl kanda text-blue-500">89,000 Baht</div>
                      </div>

                    </div>
                  </div>
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
      {f === 'EN' ? <div className="w-full">
        <div className="w-full h-[150px] bg-black">
          <div className='relative z-50'><Header /></div>
        </div>
        <div className="w-full h-[250px] bg-gray-700">
          <div className="max-w-[1366px] mx-auto">
            <div className="text-center text-white pt-20">
              <div className="text-[40px]">LEARNING SYLLABUS</div>
              <div className="text-[21px] mt-3">Provide Insight Into Your Interests</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-auto pb-20">
          <div className="max-w-[1366px] mx-auto">
            <div className="flex pt-10">
              <select className="text-[30px] bg-slate-100" onChange={selectCouese} >
                <option value="">COURSES 1</option>
                <option value="COURSES2">COURSES 2</option>
                <option value="COURSES3">COURSES 3</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 01.jpg'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-full h-auto object-cover  "
                  priority
                />
              </div>
              <div className="2">
                <div className="text-[30px] mt-5 didot">PRESENT TO MILLIONS</div>
                <div className="md:mt-20 kanda">
                  <div className="text-[30px]">12</div>
                  <div className="text-[30px] mt-5">Hrs.</div>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 px-4 md:px-0">
              <div className="text-2xl md:text-[34px] font-bold didot">About</div>
              <div className="text-2xl md:text-3xl text- mt-10 kanda">
                <span className="text-2xl md:text-3xl font-bold pr-3 leading-10 kanda">"Present to Millons"</span>
                is designed the essential skills and strategies needed to confidently present ideas,
                products, or messages to vast audiences. Focused on the power of effective communication, this class aims
                to transform presenters into captivating speakers capable of reaching and impacting millions.

              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                <span className="text-2xl md:text-3xl font-bold pr-3 kanda">"Present to Millons"</span>
                and master the art of impactful communication. Elevate your presentation skills, captivate
                audiences, and leave a lasting impression.
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-4xl didot">Instruclors</div>
                {mockInstruclors.map((item: any, index: number) => (
                  <div key={index} className="mt-10 text-2xl md:text-3xl kanda">{item}</div>
                ))}
              </div>
              <div className="bg-white mt-24 pb-20 px-4 ">
                <div className="text-center underline pt-5 pb-10 text-5xl  didot">Price</div>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
                  <div className="1 mt-16 md:mt-0">
                    <div className="didot text-3xl md:text-4xl">Private Coaching</div>
                    <div className="flex  mt-5">
                      <div className="kanda text-2xl md:text-3xl  ">From</div>
                      <div>
                        <div className="pl-5 text-gray-400 text-3xl line-through">125,000 Baht</div>
                        <div className="pl-5 mt-5 text-4xl kanda text-blue-500">89,000 Baht</div>
                      </div>

                    </div>
                  </div>
                  <div className="2 mt-24 md:mt-0">
                    <div className="didot text-3xl  md:text-4xl">Online Learning</div>
                    <div className="flex  mt-5">
                      <div className="kanda text-2xl md:text-3xl">From</div>
                      <div>
                        <div className="pl-5 text-gray-400 text-3xl line-through">125,000 Baht</div>
                        <div className="pl-5 mt-5 text-4xl kanda text-blue-500">89,000 Baht</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : (<Courses1 />)}


    </>
  )
}