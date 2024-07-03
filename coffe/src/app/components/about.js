import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="container w-full ">
        <div className="flex flex-wrap">
          <div class="w-full -mb-5 md:-mb-7 lg:-mb-10">
            <h1 id="about"
              className="text-xl md:text-2xl lg:text-3xl mt-14 text-yellow-500 font-bold text-center uppercase font-Mochy">
              Coffee Shop </h1>
            <Image className="mx-auto -mt-8 md:-mt-10 lg:-mt-11 w-40 md:w-48 lg:w-60 opacity-70"
              src="/images/undeline-decoraion.png"
              width={384} // The base width of the image
             height={256}
              alt="decor"/>
          </div>
          <div class="w-full md:w-1/2">
            <Image className="w-56 md:w-72 lg:w-96 mx-auto" src="/images/Coffee shop-bro.png" 
             width={484} // The base width of the image
             height={356}
             alt="shop"/>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-5 lg:mt-20">
              <h3 class="font-bold text-xl md:text-2xl uppercase font-Mochy mb-2 text-yellow-500">
              CAFE RENAISSANCE</h3>
              <p className="font-Mochy font-medium text-sm md:text-base text-p ">Welcome to Cafe Renaissance, your online destination for exquisite coffee experiences. At Cafe
                 Renaissance, we believe that a great cup of 
                 coffee can transform your day. Our passion for coffee 
                 craftsmanship drives us to source the finest beans from around the world, ensuring every
                 sip is a celebration of rich flavors and aromas.
              </p>
              <button
                className="font-medium text-sm md:text-base font-Mochy text-black mt-5 bg-yellow-400 py-2 px-5 rounded-lg shadow-lg border-2 border-black">More
                info...</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
