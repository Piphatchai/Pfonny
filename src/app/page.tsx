import Image from 'next/image'
import Header from './header'

export default function Home() {
  return (
    <div className='w-full'>
      <div className='w-full bg-black bg-opacity-25 h-[765px] relative'>
        <div className='w-full bg-black absolute top-0 h-[765px] opacity-75 z-10'> </div>
        <Image
          src='/images/1 Banner.jpg'
          alt="thaidestinaiton"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="w-full h-[764px] object-cover  absolute top-0 "
          priority
        />

        <div className='relative z-50'><Header /></div>
        <div className='md:max-w-[1366px] mx-auto z-30 relative px-4 md:px-0'>
          <div className='text-[60px] mt-20 md:mt-40 text-white SuperSpace'>The Best <span className='text-orange-400 SuperSpace'>Deal !!</span></div>
          <div className='text-[50px] text-white mt-5 didot'>PITCHING MASTERY</div>
          <div className='text-[40px] text-white kanda'>Personal Branding for Business</div>
          <div className='flex justify-center mt-16'>
            <div className='bg-[#0f87FF] px-10 py-2 rounded-lg text-xl  text-white Roboto'>EXPLORE MORE</div>
          </div>
          <div className='md:absolute md:bottom-[-220px] md:left-[16rem] mt-20 md:mt-0 z-30'>
            <div className='md:flex flex-row  md:space-x-20 md:relative z-30'>
              <div className='bg-black w-full md:w-[230px] h-[100px] flex flex-col justify-center items-center md:rounded-md mt-5 md:mt-0'>
                <div className='text-white text-[12px]'>HOW CLOTHING EFFCTS TO</div>
                <div className='text-white text-[30px] didot'>"success"</div>
              </div>
              <div className='bg-black w-full md:w-[230px] h-[100px] flex flex-col justify-center items-center md:rounded-md mt-5 md:mt-0'>
                <div className='text-white text-[30px] didot'>"changing"</div>
                <div className='text-white text-[12px]'>BODY LANGUSGE</div>
              </div>
              <div className='bg-black w-full md:w-[230px] h-[100px] flex flex-col justify-center items-center md:rounded-md mt-5 md:mt-0'>
                <div className='text-white text-[12px]'>COMMUNICATION</div>
                <div className='text-white text-[30px] didot'>"behavior"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-black bg-opacity-25 h-[1400px] md:h-[1000px] relative z-10'>
        <div className='w-full bg-[#222222] absolute top-0 h-[1400px] md:h-[1000px] opacity-70 z-10'> </div>
        <Image
          src='/images/Background2.png'
          alt="thaidestinaiton"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="w-full h-[1400px] md:h-[1000px] object-cover absolute top-0 "
          priority
        />
        <div className='max-w-[1366px] mx-auto z-10 h-auto relative'>
          <div className='grid md:grid-cols-2 pt-60 z-20 px-4 md:px-0 '>
            <div className='1 '>
              <Image
                src='/images/2 Fonny.png'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-[600px] object-cover"
                priority
              />
            </div>
            <div className='2 kanda'>
              <div className='text-[30px]  tracking-widest text-[#0f87FF] didot'>ABOUT</div>
              <div className='text-[60px]'>PERSONAL IMAGE</div>
              <div className='mt-2 md:mt-10 text-white leading-10 text-2xl md:text-3xl md:max-w-[600px]'>
                To improve or manage personal image, individuals can focus on areas such as self-care, developing skills, maintaining a positive online presence, and fostering positive relationships.
                It’s essential to strike a balance between presenting an authentic self and making positive choices that
                contribute to a favorable personal image
              </div>

              <div className='text-yellow-600 text-lg text-end'>Read more....</div>

            </div>
          </div>
          <div className='mt-5 md:mt-24 md:max-w-[800px] md:mx-auto Roboto px-4 md:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 md:gap-20'>
              <div className='border-4 border-blue-500 py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>Our Location</div>
                </div>
              </div>
              <div className='border-4 border-blue-500 py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>Facebook</div>
                </div>
              </div>
              <div className='border-4 border-blue-500  py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>LINE</div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 md:mt-10 md:max-w-[800px] md:mx-auto Roboto px-4 md:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 md:gap-20'>
              <div className='border-4 border-blue-500 px-10 py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>Instagram</div>
                </div>
              </div>
              <div className='border-4 border-blue-500 px-10 py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>Twitter</div>
                </div>
              </div>
              <div className='border-4 border-blue-500 px-10 py-3 rounded-md'>
                <div className='flex justify-center space-x-2'>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className='text-[17px] text-white'>Call us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#585858] h-auto pb-20'>
        <div className=' max-w-[1366px] mx-auto justify-center'>
          <div className='grid md:grid-cols-2 pt-20'>
            <div className='1 '>
              <Image
                src='/images/Power Dressing.png'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-[500px]  object-cover "
                priority
              />
            </div>
            <div className='2 mt-20'>
              <Image
                src='/images/4 Fonny.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full  object-cover "
                priority
              />
              <div className=' text-center pt-10 text-white kanda text-3xl'>  Power dressing has become integral to presentations as it exudes confidence
                and professionalism, influencing how individuals are perceived.
                Well-chosen attire can enhance credibility, command attention,
                and communicate a strong, assertive presence during presentations.
                The strategic use of power dressing aligns with the notion that appearance plays a significant role in effective communication and leadership.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-900 h-auto pb-20'>
        <div className=' max-w-[1366px]  mx-auto justify-center'>
          <div className='grid md:grid-cols-2 md:gap-20 pt-20'>
            <div className='1 text-white px-4'>
              <div className='text-7xl text-center md:text-start md:text-[100px] didot '>Online<br></br>Presence </div>
              {/* <div className='text-[100px] didot'>Presence</div> */}
              <div className='text-[30px] md:max-w-[600px] text-center mt-10 md:mt-0 kanda'>In the digital age, personal image often extends to one's online presence.</div>
              <div className='text-lg text-center mt-5 md:mt-24 leading-9 max-w-[700px]'>Online presence refers to an individual’s representation on the internet.
                It encompasses digital footprints, including social media profiles,
                personal websites, and online interactions. A robust online presence is
                vital in <span className='font-bold'>the digital age</span>, influencing personal and professional
                opportunities. It requires active management to ensure a positive image
                and effective communication. Strategies for optimizing online presence
                include maintaining consistency, engaging with the audience, and
                leveraging various online platforms.
              </div>
            </div>
            <div className='2 mt-20'>
              <Image
                src='/images/6 Fonny.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full h-[800px] object-cover "
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1366px] mx-auto mt-20 h-auto pb-20'>
        <div className='text-7xl md:text-[80px] text-center md:text-start font-bold didot'>Persuasive Storytelling</div>
        <div className='text-4xl text-center md:text-start mt-10  md:text-[30px] kanda'>Building and maintaining a positive reputation is </div>
        <div className='text-3xl mt-10 md:mt-0  md:text-[30px]  text-center md:text-start kanda'>important for success in various areas of life. </div>
        <div className='pt-20 md:relative'>
          <Image
            src='/images/7.jpg'
            alt="thaidestinaiton"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className="w-full md:block hidden  object-cover relative "
            priority
          />
          <div className='md:absolute md:top-[10rem] mt-20 max-w-[500px] left-10 mx-auto text-center md:text-white z-20'>
            <div className='text-[50px] didot font-bold'>Adaptability to Audience</div>
            <div className='text-2xl mt-20 leading-10 kanda'>
              In summary, persuasive storytelling is a skill that
              involves creating a narrative that captivates,
              engages, and convinces your audience.
              By incorporating emotional elements, establishing
              a compelling plot, showcasing real-world examples,
              and keeping your story concise and relevant,
              you can leverage the power of storytelling
              to enhance the persuasiveness
              of your communication.

            </div>
          </div>

        </div>
      </div>

      <div className='w-full bg-black h-auto opacity-90 pb-20'>
        <div className='z-10 max-w-[1366px] mx-auto text-white'>
          <div className='text-4xl md:text-[80px] pt-20 text-center didot'>Pitching Syllabus</div>
          <div className='text-3xl md:text-[30px] mt-10 text-center kanda'>A comprehensive guide to mastering the art of persuasive communication</div>
          <div className='grid grid-cols-1 grid-cols-2  mt-20 gap-20'>
            <div>
              <Image
                src='/images/8 Fonny.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full h-auto object-cover "
              />
            </div>
            <div>
              <Image
                src='/images/9 Fonny.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
          <div className='text-center text-[28px] pt-20 kanda'>
            The Pitching Mastery Instrument is a comprehensive guide to mastering the art of persuasive
            communication. By combining clarity of message, persuasive storytelling, audience
            understanding, confident delivery, and visual appeal, individuals can elevate their pitches and
            increase their chances of success in diverse professional settings.

          </div>
        </div>
      </div>

      <div className='w-full pb-20 h-auto relative'>
        <div className='absolute inset-0 bg-black opacity-70 z-10'></div>
        <div className='max-w-[1366px] mx-auto text-white relative z-20'>
          <div className='text-center text-[40px] font-bold pt-20 didot'>Our Happy Customers</div>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-20'>
            <div className='relative'>
              <Image
                src='/images/10 Pooklook.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full h-auto object-cover "
                priority
              />
              <div className='absolute top-[10rem] md:top-[14rem] left-[12rem] md:left-[19rem]'>
                <Image
                  src='/images/12 Youtube logo.jpg'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-[100px] h-auto object-cover "
                  priority
                />
              </div>
            </div>
            <div className='relative'>
              <Image
                src='/images/11 Kru Ngoh.jpg'
                alt="thaidestinaiton"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full h-auto object-cover "
                priority
              />
              <div className='absolute top-[10rem] md:top-[14rem] left-[12rem] md:left-[19rem]'>
                <Image
                  src='/images/12 Youtube logo.jpg'
                  alt="thaidestinaiton"
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  className="w-[100px] h-auto object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1366px] mx-auto mt-20 pb-20'>
        <div className='flex justify-center items-center flex-col relative'>
          <div>
            <Image
              src='/images/13 Testimonial.jpg'
              alt="thaidestinaiton"
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className="w-[150px] h-auto object-cover "
              priority
            />
          </div>

          <div className='font-bold text-[20px] mt-10 Roboto'>Pnoop Apimongkoldhorn</div>
          <div className='text-[18px] mt-5 Roboto'>IT Developer</div>
          <div className='mt-10 text-center max-w-[800px] text-[28px] kanda'>
            We strive to protect oceans by raising
            awareness about their importance to human survival.
            Give us five minutes each week and we will
            give you a summary of the latest ocean news. Advocacy Actions. Make a Difference. Week in Review..
          </div>
        </div>
      </div>


    </div>
  )
}
