'use client'
import Image from 'next/image'
import Header from '../header'
import { useRef } from 'react'
import Footer from '../footer';

export default function About() {

    const ref = useRef<HTMLDivElement | null>(null);
    const refBody = useRef<HTMLDivElement | null>(null);
    const refSkills = useRef<HTMLDivElement | null>(null);
    const refAchievement = useRef<HTMLDivElement | null>(null);
    const refTrained = useRef<HTMLDivElement | null>(null);


    const ref1 = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref2 = () => {
        refSkills.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref3 = () => {
        refAchievement.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref4 = () => {
        refTrained.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref5 = () => {
        refBody.current?.scrollIntoView({ behavior: 'smooth' });
    }

    let skills = [
        '• 14 years of experience in hospitality tourism management, digital transformation platform plan, marketing plan, organization, operation management, etc.',
        '• 5 years of experience in Travel Tech Start up Business',
        '• Experience in Social Media Platform',
        '• Expertise in B2B Sale Market, Ability to dealing with Big Corporate and Government',
        '• Expertise in pitch deck, commercial, proposal to client, partner, investor and VC',
        '• Expertise in FAM Trips oversea, Food Testing, Media visit and Review in Hotel',
        '• Expertise in organizing a MICE event, overseas event in Thailand, international conference for foreign participants.',
        '• Expertise in negotiating with foreign customers in India, Middle East and Asia.',
        '• Experience as international speaker by giving informative speeches on tourism industry in Thailand and digital transformation',
        '• platform to Tourism University in India.',
        '• Fluent command of spoken and written English.',
    ]

    let achievement = [
        '• Hello Universe Tour with Miss Universe Organization ',
        '• Authorized Wholesale Agent Merlin Entertainment Group Sealife & Madame Tussauds in Bangkok ',
        '• Authorized Wholesale Agent for Rajadamnern World Class Thai Boxing stadium ',
        '• Thailand’s Top 10  Destination Management Company for Indian market for every consecutive year during 2015 to 2020.',
        '• Receives the first runner-up prize for tourism innovation competition at TAT Start up Thailand, organized by Tourism Authority of Thailand, given in 2020. TAT start up season 2 a wrap to the future. ',
        '• Thailand’s top 20 finalist team at smart city innovation competition, organized by Ministry of Digital Economy & Society in 2020.',
        '• Top 3 finalist of The Future of Travel and Tourism Innovation Challenge, organize by Expara Singapore (Venture Capital) in Singapore, given in 2021.',
        '• Thailand & International Tourism Digital Transformation. Speaker',
    ]

    let trained = [
        '• Certified : Tech Start up smart city innovation competition, organized by Ministry of Digital Economy & Society in 2020.',
        '• Certified : Tourism innovation competition at TAT Start up Thailand, organized by Tourism Authority of Thailand, given in 2020. TAT start up season 2 a wrap to the future.',
        '• Boot camp : The Future of Travel and Tourism Innovation Challenge, organized by Expara Singapore (Venture Capital) in Singapore, given in 2021',
        '• Certified course : Yong Digital CEO by DEPA (The Digital Economy Promotion Agency) under the digital development for Economy and Society Thailand 2019',
        '• Certified course : Alibaba Dream trip to Success at China 2019 (E-commerce) ',
        '• Start up Boot Camp at Platform E in Singapore 2018',
        '• Image Certified Coach (Business Make Over)',
        '• Train the Trainer (Certified Coach)',
    ]


    return (
        <div className="w-full">
            <div className='w-full bg-black bg-opacity-25  fixed '>
                <div className='w-full bg-black absolute top-0 h-screen opacity-75 z-10'> </div>
                <Image
                    src='/images/1 Banner.jpg'
                    alt="thaidestinaiton"
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-screen object-cover  absolute top-0 "
                    priority
                />
            </div>
            <div className='w-full z-30 relative' ref={refBody}>
                <div className='max-w-[1366px] mx-auto text-white'>
                    <Header />
                    <div className='text-center text-[40px] mt-48'>PERSONAL BIOGRAPHY</div>
                    <div className='mt-32'>
                        <div className='text-[32px] mt-10 cursor-pointer' onClick={ref1}>EDUCATION BACKGROUND</div>
                        <div className='text-[32px] mt-10 cursor-pointer' onClick={ref2}>SKILLS</div>
                        <div className='text-[32px] mt-10 cursor-pointer' onClick={ref3}>KEY ACHIEVEMENT</div>
                        <div className='text-[32px] mt-10 cursor-pointer' onClick={ref4}>TRAINED & CERTIFIED</div>
                    </div>
                    <div className='flex justify-center mt-24 pb-10'>
                        <Image
                            src='/images/6 Fonny.jpg'
                            alt="thaidestinaiton"
                            width={0}
                            height={0}
                            sizes="100vw"
                            quality={100}
                            className="w-[300px] h-[300px] object-cover rounded-full border-4 border-white"
                            priority
                        />
                    </div>
                </div>
                <div className='bg-white pt-20 pb-10'>
                    <div className='max-w-[1366px] mx-auto'>
                        <div className='text-5xl '>RESUME</div>
                        <div className='mt-10 text-4xl'>DR. WALAILUCK NIANKHAW</div>
                        <hr className='mt-5'></hr>
                    </div>
                </div>
                <div className='bg-white mt-24 pt-20 pb-10 relative' ref={ref}>
                    <div className='max-w-[1366px] mx-auto'>
                        <div className='grid grid-cols-7 '>
                            <div className='text-4xl col-span-3'>
                                <div>education</div>
                                <div>Background</div>
                            </div>
                            <div className='text-3xl'>
                                <div>2023</div>
                            </div>
                            <div className='col-span-3 text-2xl'>
                                <div>
                                    Doctor of Philosophy
                                    (Integrated Tourism & Hospitality Management)
                                    National Institute of Development Administration, Thailand (NIDA)
                                    Courses include : policy, planning, tourism & hospitality integrated
                                    management airline, logistic, hotel & hospitality management
                                </div>

                            </div>
                        </div>
                        <div className='grid grid-cols-7 mt-20'>
                            <div className='text-4xl col-span-3'>
                            </div>
                            <div className='text-3xl'>
                                <div>2012</div>
                            </div>
                            <div className='col-span-3 text-2xl'>
                                <div>
                                    Master of Arts
                                    (Service Innovation) - International Program
                                    Thammasart University, Thailand
                                    Courses include : service innovation, hospitality and tourism management

                                </div>

                            </div>
                        </div>
                        <div className='grid grid-cols-7 mt-20 '>
                            <div className='text-4xl col-span-3'>
                            </div>
                            <div className='text-3xl'>
                                <div>2001</div>
                            </div>
                            <div className='col-span-3 text-2xl'>
                                <div>
                                    Bachelor’s Degree
                                    in English Communication for Business 2
                                    Rajamangala Institute of Technology, Thailand
                                    Courses include : English communication skill, grammatical correspondence
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 px-10 flex flex-col items-center justify-center cursor-pointer' onClick={ref5}>
                        <div className=''>Top</div>
                        <div className=''>
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="9" x2="12" y2="5" />  <line x1="8" y1="9" x2="12" y2="5" /></svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-24 pt-20 pb-10 relative' ref={refSkills}>
                    <div className='max-w-[1366px] mx-auto'>
                        <div className='grid grid-cols-2'>
                            <div className='text-4xl mt-10'>
                                SKILLS
                            </div>
                            <div className='text-2xl'>
                                {skills.map((item: string, key: number) => (
                                    <div key={key} className='mt-10 '>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 px-10 flex flex-col items-center justify-center cursor-pointer' onClick={ref5}>
                        <div className=''>Top</div>
                        <div className=''>
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="9" x2="12" y2="5" />  <line x1="8" y1="9" x2="12" y2="5" /></svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-24 pt-20 pb-10 relative' ref={refAchievement}>
                    <div className='max-w-[1366px] mx-auto'>
                        <div className='grid grid-cols-2'>
                            <div className='text-4xl mt-10'>
                                KEY ACHIEVEMENT
                            </div>
                            <div className='text-2xl'>
                                {achievement.map((item: string, key: number) => (
                                    <div key={key} className='mt-10 '>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 px-10 flex flex-col items-center justify-center cursor-pointer' onClick={ref5}>
                        <div className=''>Top</div>
                        <div className=''>
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="9" x2="12" y2="5" />  <line x1="8" y1="9" x2="12" y2="5" /></svg>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-24 pt-20 pb-10 relative' ref={refTrained}>
                    <div className='max-w-[1366px] mx-auto'>
                        <div className='grid grid-cols-2'>
                            <div className='text-4xl mt-10'>
                                TRAINED & CERTIFIED
                            </div>
                            <div className='text-2xl'>
                                {trained.map((item: string, key: number) => (
                                    <div key={key} className='mt-10 '>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 px-10 flex flex-col items-center justify-center cursor-pointer' onClick={ref5}>
                        <div className=''>Top</div>
                        <div className=''>
                            <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="9" x2="12" y2="5" />  <line x1="8" y1="9" x2="12" y2="5" /></svg>
                        </div>
                    </div>
                </div>
                <div className='bg-black text-white pt-20 pb-20 relative'>
                    <div className='w-full bg-black absolute top-0  opacity-75 z-10'></div>
                    <Footer />
                </div>

            </div>





        </div>
    )
}