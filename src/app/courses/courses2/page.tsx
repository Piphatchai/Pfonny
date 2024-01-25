'use client'
import Header from "@/app/header";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";




export default function Courses2() {


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

  const mockInstruclors = [
    `• Personal image adjustment : Build a strong, authentic personal brand that matches your business' s values, advantages, and goals.`,
    '• Clothing consultation : Be sure to choose clothing in a way that is consistent with the individual and the expectations of the business  environment. Evaluate your current clothing. Identify the main items of clothing that you must have.',
    `• Take them shopping for clothes : Choosing a clothing store with the right collection Give advice on changing the shape and style of clothing.
    Promote a confident and fun buying experience.`,
    '• Improving communication skills : Objective: Improve both verbal and non-verbal communication skills to promote confidence, trustworthiness, and It’s profile, improving posture and positioning.',
    '• Online management to establish identity : Managing and optimizing a person’s digital appearance for a positive and professional look. Social media content strategy Online image management',
    '• Continuous improvement plan : Promote continuous improvement to suit your own changing context and professional environment. Regular self-assessment and feedback'
  ]

  const mockInstruclorsTh = [
    `• การปรับภาพลักษณ์ส่วนตัว
    สร้างแบรนด์ส่วนตัวที่แข็งแกร่งและแท้จริงตรงกับคุณค่า, ข้อได้เปรียบ, และเป้าหมายวุฒิภาคธุรกิจ
    `,
    `• การให้คำปรึกษาเรื่องเสื้อผ้า
    ให้แน่ใจว่าเลือกเสื้อผ้าในแบบที่สอดคล้องกับแต่ละบุคคลและคาดหวังของสภาพแวดล้อมธุรกิจ
    ประเมินเสื้อผ้าที่ใช้อยู่ในปัจจุบัน ระบุเสื้อผ้าหลักที่ต้องมี
    `, 
    `• พาไปเลือกซื้อเสื้อผ้า
    การเลือกร้านเสื้อผ้าที่มีคอลเลคชั่นที่เหมาะสม ให้คำแนะนำในการปรับเปลี่ยนทรงและสไตล์เสื้อผ้า
    ส่งเสริมประสบการณ์การเลือกซื้อที่เต็มไปด้วยความมั่นใจและสนุกสนาน
    `,
    `• การปรับปรุงทักษะการสื่อสาร
    วัตถุประสงค์: ปรับปรุงทักษะการสื่อสารทั้งทางมีเสียงและทางไม่มีเสียงเพื่อส่งเสริมความมั่นใจ, ความน่าเชื่อถือ, และความ
    เป็นโปรไฟล์ การปรับปรุงท่าทางและการวางตัว
    `,
    `• การจัดการออนไลน์เพื่อสร้างตัวตน
    การบริหารจัดการและเพิ่มประสิทธิภาพลักษณะดิจิทัลของบุคคลสำหรับลุคที่เป็นบวกและมีความเป็นมืออาชีพ กลยุทธ์เนื้อหาโซเชียลมีเดีย การบริหารจัดการภาพลักษณ์ออนไลน์
    `,
    `• แผนการปรับปรุงต่อเนื่อง
    ส่งเสริมการปรับปรุงต่อเนื่องเพื่อให้เข้ากับบริบทที่เปลี่ยนไปของตนเองและสภาพแวดล้อมทาง
    การประเมินตนเองและการตอบรับอย่างสม่ำเสมอ
    `
    
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

  const Courses2Th = () => {
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
                <option value="">COURSES 2</option>
                <option value="COURSES1">COURSES 1</option>
                <option value="COURSES3">COURSES 3</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 02.jpg'
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
                <div className="text-[30px] mt-5 didot">ปรับภาพลักษณ์ในสไตล์คุณ</div>
                <div className="md:mt-20 kanda">
                  <div className="text-[30px]">12</div>
                  <div className="text-[30px] mt-5">Hrs.</div>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 px-4 md:px-0">
              <div className="text-2xl md:text-[34px] font-bold didot">เกี่ยวกับหลักสูตร</div>
              <div className="text-2xl md:text-3xl  text- mt-10 kanda">
                เป็นโปรแกรมที่ครอบคลุมและตรงเป้าหมาย ซึ่งออกแบบมาเพื่อปรับปรุงและปรับแต่งการแสดงตนและภาพลักษณ์ระดับมืออาชีพ เน้นแนวทางการปรับลุคส่วนบุคคลแบบองค์รวมให้ดูดีขึ้นในทันที ครอบคลุมประเด็นต่างๆ เช่น รูปลักษณ์ รูปแบบการสื่อสาร ภาษากาย รูปลักษณ์ใหม่ด้วยสไตล์ของคุณเองเพื่อให้บรรลุเป้าหมาย และเพิ่มศักยภาพในการนำเสนอความมั่นใจ ความถูกต้อง และผลกระทบเชิงบวกทางวิชาชีพ
              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                ผู้เรียนจะมีลุคที่ได้รับการปรับแต่งให้เหมาะสมกับความเป็นไปได้และบทบาทของตนเอง มีความมั่นใจในการสื่อสารและปฏิบัติทักษะการแต่งตัวที่มีสไตล์และน่าสนใจ ความมั่นใจในการเป็นตัวเองและการมีเสน่ห์ในทุกสถานการณ์ รวมถึงการสร้างตัวตนที่มีความสมดุลและน่าจดจำในสื่อออนไลน์
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-4xl didot">โครงสร้างหลักสูตร Private</div>
                <div className="text-2xl md:text-3xl mt-20 kanda">การปรับปรุงลุคเป็นกระบวนการหลากหลายทางที่ไม่จำกัดเฉพาะการปรับแต่งลักษณะภายนอกเท่านั้น มันเข้าข่ายถึงการเสริมสร้างด้านต่างๆ ของการนำเสนอและพฤติกรรมเพื่อสร้างความประทับใจที่เป็นบวก, แท้จริง, และมีผลกระทบมากขึ้น นี่คือบางประการสำคัญของการปรับภาพลักษณ์ส่วนตัว
                </div>
                {mockInstruclorsTh.map((item: any, index: number) => (
                  <div key={index} className="mt-20 text-2xl md:text-3xl kanda">{item}</div>
                ))}
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
                <option value="">COURSES 2</option>
                <option value="COURSES1">COURSES 1</option>
                <option value="COURSES3">COURSES 3</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 w-full bg-white md:gap-20 items-center mt-10 px-4 md:px-0">
              <div className="1">
                <Image
                  src='/images/courses/Course 02.jpg'
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
              <div className="text-2xl md:text-3xl  text- mt-10 kanda">
                <span className="text-2xl md:text-3xl font-bold pr-3 leading-10 kanda">An "Executive Image Makeover"</span>
                refers to a comprehensive process of refining and enhancing the professional image and presence of an individual in an executive or leadership role within an organization. The goal is to project a polished, credible, and influential image that aligns with the organization's values and the expectations of the professional world.
              </div>
              <div className="text-2xl md:text-3xl mt-14 kanda">
                An Executive Image Makeover is the goal to empower executives to present themselves authentically, build a positive reputation, and effectively lead and influence within their professional sphere.
              </div>
              <hr className="mt-20 border-2"></hr>

              <div className="mt-20 text-xl md:text-3xl">
                <div className="font-bold text-2xl md:text-4xl didot">Instruclors</div>
                <div className="text-2xl md:text-3xl mt-5 kanda">Improving your look is a multifaceted process that is not limited to modifying your appearance. It is included in
                  the Strengthen various aspects of presentation and behavior to create a positive, authentic, and impactful
                  impression More Here are some key ways to improve your look
                </div>
                {mockInstruclors.map((item: any, index: number) => (
                  <div key={index} className="mt-10 text-2xl md:text-3xl kanda">{item}</div>
                ))}
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
      </div> : (<Courses2Th />)}


    </>
  )
}