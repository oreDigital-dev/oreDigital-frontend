import React from 'react'
import { partners } from './menu'
function Partners() {
  return (
    <div className='h-[45vh] mt-20'>
        <h1 className='text-5xl font-bold text-center pt-4 font-inter'>Our Partners</h1>
        <p className='text-center font-open-sans'>Who aren’t we working with ?</p>
        <div className='flex justify-evenly mt-8'>
           {partners.map((partner) => (
            <img src={partner.path} alt="image" />
           ))}
        </div>
    </div>
  )
}

export default Partners