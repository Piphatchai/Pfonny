'use client'
import Header from "@/app/header";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Courses2() {

  const router = useRouter()

  const mockInstruclors = [
    '• Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis cumque tempora, voluptate excepturi quas officiis, sed deserunt aliquid, voluptas alias,',
    '• Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis cumque tempora, voluptate excepturi quas officiis, sed deserunt aliquid, voluptas alias,',
    '• Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis cumque tempora, voluptate excepturi quas officiis, sed deserunt aliquid, voluptas alias,',
    '• Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis cumque tempora, voluptate excepturi quas officiis, sed deserunt aliquid, voluptas alias,',
    '• Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis cumque tempora, voluptate excepturi quas officiis, sed deserunt aliquid, voluptas alias,',
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

  return (
    <>
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
              <span className="text-2xl md:text-3xl font-bold pr-5 leading-10 kanda">"Present to Millons"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae voluptate assumenda et eius, quasi incidunt provident saepe illum aliquid reiciendis rerum quidem atque quia quas totam blanditiis at ex!
            </div>
            <div className="text-2xl md:text-3xl mt-14 kanda">
              <span className="font-bold pr-5 kanda">"Present to Millons"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae voluptate assumenda et eius, quasi incidunt provident saepe illum aliquid reiciendis rerum quidem atque quia quas totam blanditiis at ex!
            </div>
            <hr className="mt-20 border-2"></hr>

            <div className="mt-20 text-xl md:text-3xl">
              <div className="font-bold text-2xl md:text-3xl">Instruclors</div>
              {mockInstruclors.map((item: any, index: number) => (
                <div key={index} className="mt-10 text-2xl kanda">{item}</div>
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
    </>
  )
}