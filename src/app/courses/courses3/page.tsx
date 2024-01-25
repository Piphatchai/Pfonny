'use client'
import Header from "@/app/header";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Courses3() {

  useEffect(() => {
    const languageCheck = typeof localStorage !== 'undefined' ? localStorage.getItem("language") : null;
    if (languageCheck) {
      setF(languageCheck)
    } else {
      setF('EN')
    }
  })

  const [f, setF] = useState<string>('')

  const router = useRouter()

  const textPresentation = [
    `• Understanding the Story : Understand the type of work you want to present. Creating an understanding of audience needs`,
    '• Planning and creating content : Systematic presentation planning. Creating meaningful and interesting content',
    '• Presentation skills : Using language that is easy to understand. Creating a memorable presentation experience',
    '• Time management and communication : Planning a presentation for a specified period of time Using presentation techniques to capture attention',
  ]

  const textPresentationTh = [
    `• เข้าใจเรื่องราว : เข้าใจประเภทงานที่คุณต้องการนำเสนอ การสร้างความเข้าใจในความต้องการของผู้ชม`,
    `• การวางแผนและการสร้างเนื้อหา : การวางแผนการนำเสนออย่างเป็นระบบ การสร้างเนื้อหาที่มีความหมายและน่าสนใจ`,
    `• ทักษะการนำเสนอ : การใช้ภาษาที่เข้าใจง่าย สร้างประสบการณ์การนำเสนอที่น่าจดจำ`,
    `• การบริหารเวลาและการสื่อสาร : การวางแผนการนำเสนอตามระยะเวลาที่กำหนด`,

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

  const Courses3Th = () => {
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
                <option value="">COURSES 3</option>
                <option value="COURSES1">COURSES 1</option>
                <option value="COURSES2">COURSES 2</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 03.jpg'
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
                <div className="text-[30px] mt-5 didot">ทักษะการนำเสนอและการปรับภาพลักษณ์</div>
                <div className="md:mt-20 kanda">
                  <div className="text-[30px]">12</div>
                  <div className="text-[30px] mt-5">Hrs.</div>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 px-4 md:px-0">
              <div className="text-2xl md:text-[34px] font-bold didot">เกี่ยวกับหลักสูตร</div>
              <div className="text-2xl md:text-3xl text- mt-10 kanda">
                <span className="text-2xl md:text-3xl pr-3 leading-10 kanda">หลักสูตร  "Presentation Mastery"</span>
                เป็นการเรียนรู้ทักษะในการนำเสนออย่างมีความเชี่ยวชาญ ที่ช่วยเสริมสร้างความเชื่อมั่นและมีผลส่งเสริมการสื่อสารอย่างมีประสิทธิภาพในการนำเสนอข้อมูลหรือไอเดียของคุณ
                ในที่เดียวกัน “Business Image Makeover” เน้นการพัฒนาภาพลักษณะธุรกิจที่มีความมั่นใจและมีคุณค่า ซึ่งช่วยเสริมสร้างภาพลักษณ์ที่น่าเชื่อถือและทันสมัย มีการปรับแต่งมุมมองในธุรกิจของคุณเพื่อให้เข้ากับแนวโน้มและความเปลี่ยนแปลงในวงการปัจจุบัน
              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                ทั้งสองหลักสูตรนี้จะช่วยให้คุณเติบโตทั้งในด้านทักษะการนำเสนอและมีภาพลักษณะธุรกิจที่ทันสมัยและโดดเด่นในตลาดที่แข็งแกร่งในปัจจุบัน
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-3xl didot">โครงสร้างหลักสูตร Private</div>
                <div className="text-2xl md:text-3xl mt-5 kanda">หลักสูตรนี้เป็นการรวม 2 หลักสูตรไว้ด้วยกัน มุ่งเน้นการพัฒนาทักษะการนำเสนออย่างมีประสิทธิภาพและภาพลักษณ์ทางธุรกิจที่มีคุณค่าและทันสมัยในสภาพการตลาดที่เปลี่ยนแปลงอยู่ตลอดเวลา การเรียนรู้ทักษะการนำเสนอที่มีความเชี่ยวชาญ และการปรับเปลี่ยนภาพลักษณะทางธุรกิจให้สวยงาม น่าทึ่งและมีเสน่ห์
                </div>
                <div className="font-bold text-2xl md:text-3xl mt-20 didot">วิธีการนำเสนอเพื่อเงินล้าน</div>
                {textPresentationTh.map((item: any, index: number) => (
                  <div key={index} className="mt-10 text-2xl md:text-3xl kanda">{item}</div>
                ))}
                <div className="font-bold text-2xl md:text-3xl mt-20 didot">ปรับภาพลักษณ์ในสไตล์คุณ</div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• การปรับลุคส่วนตัว</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>สร้างแบรนด์ส่วนตัวที่แข็งแกร่งและแท้จริงตรงกับคุณค่า, ข้อได้เปรียบ, และเป้าหมายวุฒิภาคธุรกิจ.</div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• การให้คำปรึกษาเรื่องเสื้อผ้า</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>ให้แน่ใจว่าเลือกเสื้อผ้าในแบบที่สอดคล้องกับแต่ละบุคคลและคาดหวังของสภาพแวดล้อมธุรกิจ.
                  ประเมินเสื้อผ้าที่ใช้อยู่ในปัจจุบัน ระบุเสื้อผ้าหลักที่ต้องมี
                </div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• พาไปเลือกซื้อเสื้อผ้า</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>เลือกไปร้านเสื้อผ้าที่มีคอลเลคชั่นที่เหมาะสม ให้คำแนะนำในการปรับเปลี่ยนทรงและสไตล์เสื้อผ้า.
                  ส่งเสริมประสบการณ์การเลือกซื้อที่เต็มไปด้วยความมั่นใจและสนุกสนาน.
                </div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• การปรับปรุงทักษะการสื่อสาร:</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>วัตถุประสงค์: ปรับปรุงทักษะการสื่อสารทั้งทางมีเสียงและทางไม่มีเสียงเพื่อส่งเสริมความมั่นใจ, ความน่าเชื่อถือ, และความ
                  เป็นโปรไฟล์ การปรับปรุงท่าทางและการวางตัว.
                </div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• การจัดการออนไลน์เพื่อสร้างตัวตน</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>วัตถุประสงค์: การบริหารจัดการและเพิ่มประสิทธิภาพลักษณะดิจิทัลของบุคคลสำหรับลุคที่เป็นบวกและมีความเป็นมืออาชีพ
                  กลยุทธ์เนื้อหาโซเชียลมีเดีย การบริหารจัดการภาพลักษณ์ออนไลน์
                </div>

              </div>
              <div className="bg-white mt-24 pb-20 px-4">
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
                <option value="">COURSES 3</option>
                <option value="COURSES1">COURSES 1</option>
                <option value="COURSES2">COURSES 2</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 03.jpg'
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
                <span className="text-2xl md:text-3xl pr-3 leading-10 kanda">The "Presentation Mastery"</span>
                course is about learning presentation skills with expertise. That helps build confidence and promotes effective communication in presenting your information or ideas.
                In the same place, “Business Image Makeover” focuses on developing a confident and valuable business image. This helps to create a reliable and modern image. Your business perspective is customized to match current trends and changes in the industry.
              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                Both courses will help you grow in both your presentation skills and your business landscape to stand out in today’s robust market.
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-3xl didot">Instruclors</div>
                <div className="text-2xl md:text-3xl mt-5 kanda">Improving your look is a multifaceted process that is not limited to modifying your appearance. It is included in
                  the Strengthen various aspects of presentation and behavior to create a positive, authentic, and impactful
                  impression More Here are some key ways to improve your look
                </div>
                <div className="font-bold text-2xl md:text-3xl mt-20 didot">PRESENTATION MASTERY</div>
                {textPresentation.map((item: any, index: number) => (
                  <div key={index} className="mt-10 text-2xl md:text-3xl kanda">{item}</div>
                ))}
                <div className="font-bold text-2xl md:text-3xl mt-20 didot">BUSINESS IMAGE MAKE OVER</div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• Personal image adjustment</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>Build a strong, authentic personal brand that matches your business’s values, advantages, and goals.</div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• Clothing consultation</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>Be sure to choose clothing in a way that is consistent with the individual and the expectations of the business
                  environment.<br></br>
                  Evaluate your current clothing. Identify the main items of clothing that you must have.
                </div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• Take them shopping for clothes.</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>Choosing a clothing store with the right collection Give advice on changing the shape and style of clothing.
                  Promote a confident and fun buying experience.
                </div>
                <div className='mt-10 text-2xl md:text-3xl kanda'>• Continuous improvement plan.</div>
                <div className='mt-3 text-2xl md:text-3xl kanda'>Promote continuous improvement to suit your own changing context and professional environment.
                  Regular self-assessment and feedback</div>

              </div>
              <div className="bg-white mt-24 pb-20 px-4">
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
      </div> : (<Courses3Th />)}

    </>
  )
}