import React from 'react'

const Banner = () => {
  return (
    <div className='relative bg-no-repeat bg-cover h-screen 
    md:h-[500px] lg:h-screen bg-center overflow-hidden'
    style={{ backgroundImage: "url('/images/banner.jpeg')" }} id='home'>
      
      <div className="container">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor:"rgba(0, 0, 0, 0.633)"}}>
            <div className="flex justify-center items-center h-full">
              <div className="text-center  px-6 md:px-12">
                <div className="p-2 border-2 border-yellow-500 border-dashed rounded-lg mt-20 mb-5 md:mb-7 lg:mb-10">
                  <h1 className="text-2xl py-2 md:text-3xl lg:text-5xl font-bold text-yellow-500 font-Mochy">
                  CAFE RENAISSANCE </h1>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-4xl mb-8 text-slate-300 font-semibold font-Courgette">
                  Home Of Good 
                  <span className="text-yellow-500 underline-2 ml-1">Coffe</span></h3>
                <a href="#about">
                  <button type="button" className="px-6 py-2.5 border-2 bg-yellow-400 border-white rounded-lg">
                  <svg className="w-7 fill-black animate-bounce mt-2" viewBox="0 0 503 503">
                      <path
                        d="M461.904,262.868l-33.955-33.955c-9.14-9.141-24.031-9.158-33.194-0.04l-95.896,95.44V23.5c0-12.958-10.542-23.5-23.5-23.5  h-48c-12.958,0-23.5,10.542-23.5,23.5v300.753l-95.598-95.598c-4.438-4.438-10.339-6.883-16.617-6.883s-12.179,2.444-16.617,6.883  l-33.943,33.942c-9.163,9.163-9.163,24.071,0,33.234l204.972,204.971c1.464,1.465,3.383,2.197,5.303,2.197  c1.916,0,3.833-0.73,5.296-2.19l205.227-204.686c4.448-4.437,6.901-10.34,6.905-16.623  C468.792,273.218,466.347,267.311,461.904,262.868z M451.29,285.503L251.366,484.9L51.691,285.226  c-3.314-3.314-3.314-8.707,0-12.021l33.943-33.942c1.605-1.605,3.74-2.49,6.011-2.49s4.405,0.884,6.01,2.49l108.401,108.401  c2.145,2.146,5.372,2.787,8.173,1.626c2.803-1.161,4.63-3.896,4.63-6.929V23.5c0-4.687,3.813-8.5,8.5-8.5h48  c4.687,0,8.5,3.813,8.5,8.5v318.859c0,3.03,1.823,5.763,4.622,6.926c2.799,1.163,6.021,0.527,8.169-1.61l108.686-108.169  c3.314-3.299,8.7-3.292,12.007,0.014l33.955,33.955c1.607,1.607,2.491,3.744,2.489,6.017  C453.786,281.764,452.899,283.898,451.29,285.503z" />
                      <path
                        d="M262.044,418.209l-15.987,15.987c-2.929,2.929-2.929,7.677,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197 s3.839-0.732,5.303-2.197l15.987-15.987c2.929-2.929,2.929-7.677,0-10.606C269.721,415.28,264.972,415.28,262.044,418.209z" />
                      <path
                        d="M350.056,330.197l-64.001,64.001c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.465,3.384,2.197,5.303,2.197 s3.839-0.732,5.303-2.197l64.001-64.001c2.929-2.929,2.929-7.677,0-10.606C357.734,327.268,352.985,327.268,350.056,330.197z" />
                      <path
                        d="M251.36,159c4.142,0,7.5-3.358,7.5-7.5v-104c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v104 C243.86,155.642,247.217,159,251.36,159z" />
                      <path
                        d="M251.36,215c4.142,0,7.5-3.358,7.5-7.5v-24c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v24 C243.86,211.642,247.217,215,251.36,215z" />
                    </svg>
                  
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Banner
