'use client'
import Header from "@/app/header";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Courses2() {

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
    </>
  )
}