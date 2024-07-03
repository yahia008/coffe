import React from 'react'
import Image from 'next/image'
const Band = () => {
    const data = [
        {id:1, 
            title:'Internasional Quality',
             image:'/images/coffe3.png',
             desc:'Experience the pinnacle of coffee excellence. Our beans, sourced from the finest regions worldwide, ensure a rich and consistent flavor. Each cup embodies international quality, rigorously tested for superior taste and aroma. Indulge in a luxurious coffee experience with every sip.'
            },
            {id:2, 
                title:'100% KOPI ALAMI',
                 image:'/images/coffe2.png',
                 desc:'Experience the pure essence of coffee with our 100% Kopi Alami. Sourced from the finest regions, our coffee is naturally grown and meticulously processed to ensure a rich, authentic flavor. Every cup delivers a true taste of nature, perfect for those who appreciate genuine quality.'
                },
                {id:3, 
                    title:'Biji Kopi Berkualitas',
                     image:'/images/coffe1.png',
                     desc:'Discover the excellence of our premium coffee beans. Handpicked from the best coffee-growing regions, our beans offer a rich and authentic flavor. Experience the true essence of quality in every sip, crafted for those who demand the best.'
                    },
                    
        
    ]
  return (
    
    <div className="">
        <div className="flex  flex-wrap justify-evenly  mt-10 " id='services'>
            {
                data.map((item) => (
                    <div key={item.id} className='sm:w-[300px]  flex flex-wrap flex-col 
                    border border-yellow-400
                    bg-white p-3
                    items-center'>
                        <Image className='w-[200px]' src={item.image} width={300} height={158} alt=''/>
                        <h1 className='
                        text-yellow-600 
                        font-bold
                        sm:text-2xl m-4'>{item.title}</h1>
                        <p className='text-center text-gray-500 font-bold text-xs sm:text-base'>{item.desc}</p>
                    </div>
                ))
            }
            </div>
            </div>
  )
}

export default Band
