import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Mypage = () => {
  return (
    <div className='container mx-auto' id='contact'>
       <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="max-h-96 md:h-screen">
        <Image className="w-screen h-screen object-cover object-top" src="/images/setup.jpg" width="940" height="650" alt=""/>
      </div>
      <div className="flex bg-gray-100 mt-[150px]">
        <div className=" ml-5 max-w-lg">
          <h1 className="text-3xl uppercase">Yahya Tijjani</h1>
          <p className="font-semibold mb-5">Software Engineer</p>
          <p className='text-xs sm:text-sm'>I am Yahya Tijjani, a dedicated Software Engineer with a robust background in developing high-quality software solutions. My expertise spans multiple programming languages and frameworks, allowing me to create efficient and scalable applications. I pride myself on my problem-solving abilities and attention to detail, consistently delivering robust code and innovative solutions.

Throughout my career, I have worked on various projects, ranging from web development to complex system integrations. I am proficient in technologies such as Python, JavaScript, and Typescript, and have a solid understanding of software development methodologies like Agile and Scrum.

I am passionate about staying up-to-date with the latest industry trends and continuously improving my skills. As a proactive team player, I enjoy collaborating with colleagues to achieve common goals. My commitment to excellence and continuous learning makes me a valuable asset to any development team.</p>
          <div className='px-7 flex  mt-6'>
          <a href='https://github.com/yahia008' className="  text-white">  <FaGithub size={40} color="black" /></a>
          <a href='https://www.linkedin.com/in/yahya-tijjani-0bab68247/' className="text-white ml-5"><FaLinkedin size={40} color="#0077B5" /></a>

          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mypage 
