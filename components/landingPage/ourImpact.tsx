import React from 'react'
import { impactContent } from './menu'
function OurImpact() {

  return (
    <div className='w-full bg-gradient-to-b from-blue-100 via-transparent mt-20 '>
           <div className='text-center w-1/3  ml-auto mr-auto  '>
        <h1 className='font-bold text-4xl pt-32'>Our impact</h1>
            <p>Here’s  the services that we offer to you, to ensure both your company’s products and employees security</p>
        </div>
        <div className='flex justify-evenly mt-32'>
        {impactContent.map(impact => (
      <div className='h-auto w-[20vw] bg-white shadow-md shadow-gray-300 pl-6 pr-10 pt-14 pb-10 rounded-lg'>
         <img src={impact.image} alt="" className='h-14 w-12'/>
         <h1 className='font-bold text-xl pt-10'>{impact.title}</h1>
         <p className='text-sm pt-4'>{impact.description}</p>
      </div>
      ))}
      </div>
    </div>
  )
}

export default OurImpact